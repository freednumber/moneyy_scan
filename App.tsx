
import React, { useState } from 'react';
import type { Transaction, ScannedReceipt } from './types';
import { Header } from './components/Header';
import { ReceiptScanner } from './components/ReceiptScanner';
import { TransactionList } from './components/TransactionList';
import { analyzeReceipt } from './services/geminiService';

const App: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    { id: '1', merchant: 'SuperMart', amount: 75.20, date: '2023-10-26', category: 'Groceries' },
    { id: '2', merchant: 'The Coffee House', amount: 12.50, date: '2023-10-25', category: 'Dining' },
    { id: '3', merchant: 'City Gas', amount: 45.00, date: '2023-10-24', category: 'Transport' },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fileToBase64 = (file: File): Promise<{mimeType: string, data: string}> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const result = reader.result as string;
        const base64Data = result.split(',')[1];
        resolve({ mimeType: file.type, data: base64Data });
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const handleScanReceipt = async (file: File) => {
    setIsLoading(true);
    setError(null);
    try {
      const imageData = await fileToBase64(file);
      const scannedData: ScannedReceipt = await analyzeReceipt(imageData);

      const newTransaction: Transaction = {
        id: new Date().toISOString(),
        merchant: scannedData.merchant,
        amount: scannedData.total,
        date: scannedData.date,
        category: scannedData.category,
      };

      setTransactions(prev => [newTransaction, ...prev]);

    } catch (e) {
      const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';
      setError(errorMessage);
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <main className="container mx-auto p-4 md:p-8 max-w-4xl">
        <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-emerald-400">Add New Transaction</h2>
            <p className="text-gray-400 mb-6">Upload a receipt and let our AI assistant extract the details for you.</p>
            <ReceiptScanner onScan={handleScanReceipt} isLoading={isLoading} />
            {error && <p className="text-red-400 mt-4 text-center">{error}</p>}
        </div>
        <TransactionList transactions={transactions} />
      </main>
    </div>
  );
};

export default App;
