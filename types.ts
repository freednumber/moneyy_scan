
export interface Transaction {
  id: string;
  merchant: string;
  amount: number;
  date: string;
  category: string;
}

export interface ScannedReceipt {
  merchant: string;
  total: number;
  date: string; // YYYY-MM-DD
  category: string;
}
