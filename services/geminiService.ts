
import { GoogleGenAI, Type } from "@google/genai";
import type { ScannedReceipt } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

const model = 'gemini-2.5-flash';

const schema = {
    type: Type.OBJECT,
    properties: {
      merchant: { type: Type.STRING, description: "The name of the store or merchant." },
      total: { type: Type.NUMBER, description: "The final total amount of the transaction." },
      date: { type: Type.STRING, description: "The date of the transaction in YYYY-MM-DD format." },
      category: {
        type: Type.STRING,
        description: "A suggested expense category from the provided list.",
        enum: ['Groceries', 'Dining', 'Transport', 'Shopping', 'Utilities', 'Entertainment', 'Other']
      }
    },
    required: ["merchant", "total", "date", "category"]
};

export const analyzeReceipt = async (imageData: {mimeType: string, data: string}): Promise<ScannedReceipt> => {
    try {
        const imagePart = {
            inlineData: {
                mimeType: imageData.mimeType,
                data: imageData.data,
            },
        };

        const textPart = {
            text: `Analyze the attached receipt image. Extract the following details: the merchant's name, the final total amount paid, the date of the transaction in 'YYYY-MM-DD' format, and suggest a relevant expense category from this list: 'Groceries', 'Dining', 'Transport', 'Shopping', 'Utilities', 'Entertainment', 'Other'. Provide the output in a structured JSON format.`
        };

        const response = await ai.models.generateContent({
            model,
            contents: { parts: [imagePart, textPart] },
            config: {
                responseMimeType: "application/json",
                responseSchema: schema,
            },
        });

        const jsonString = response.text.trim();
        const parsedJson = JSON.parse(jsonString);
        return parsedJson as ScannedReceipt;

    } catch (error) {
        console.error("Error analyzing receipt:", error);
        if (error instanceof Error) {
            throw new Error(`Failed to analyze receipt with Gemini: ${error.message}`);
        }
        throw new Error("An unknown error occurred while analyzing the receipt.");
    }
};
