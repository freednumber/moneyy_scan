
import React from 'react';
import type { Transaction } from '../types';
import { 
  GroceriesIcon, 
  DiningIcon, 
  EntertainmentIcon, 
  OtherIcon, 
  ShoppingIcon, 
  TransportIcon, 
  UtilitiesIcon 
} from './Icons';

interface TransactionListProps {
  transactions: Transaction[];
}

const categoryIcons: { [key: string]: React.FC<React.SVGProps<SVGSVGElement>> } = {
  'Groceries': GroceriesIcon,
  'Dining': DiningIcon,
  'Transport': TransportIcon,
  'Shopping': ShoppingIcon,
  'Utilities': UtilitiesIcon,
  'Entertainment': EntertainmentIcon,
  'Other': OtherIcon,
};

const CategoryIcon: React.FC<{ category: string }> = ({ category }) => {
  const IconComponent = categoryIcons[category] || OtherIcon;
  return <IconComponent className="w-6 h-6 text-emerald-400" />;
};

const TransactionItem: React.FC<{ transaction: Transaction }> = ({ transaction }) => {
  const { merchant, amount, date, category } = transaction;

  const formattedDate = new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg hover:bg-gray-700/50 transition-colors duration-200">
      <div className="flex items-center space-x-4 min-w-0">
        <div className="p-3 bg-gray-900 rounded-full flex-shrink-0">
          <CategoryIcon category={category} />
        </div>
        <div className="min-w-0">
          <p className="font-bold text-lg text-white truncate">{merchant}</p>
          <p className="text-sm text-gray-400">{formattedDate} &bull; {category}</p>
        </div>
      </div>
      <p className="font-bold text-xl text-red-400 whitespace-nowrap ml-4">-€{amount.toFixed(2)}</p>
    </div>
  );
};

export const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-2xl p-6">
       <h2 className="text-2xl font-bold mb-6 text-emerald-400">Recent Transactions</h2>
       {transactions.length > 0 ? (
         <div className="space-y-4">
            {transactions.map(tx => (
              <TransactionItem key={tx.id} transaction={tx} />
            ))}
         </div>
       ) : (
        <div className="text-center py-10">
          <p className="text-gray-400">No transactions yet.</p>
          <p className="text-gray-500">Upload a receipt to get started!</p>
        </div>
       )}
    </div>
  );
};
