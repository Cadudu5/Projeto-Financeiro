import { create } from 'zustand';
import { db } from './db';
import { Transaction } from '../types/transactions';
interface TransactionStore {
  transactions: Transaction[];
  addTransaction: (transaction: Omit<Transaction, 'id'>) => Promise<void>;
  fetchTransactions: () => Promise<void>;
}

export const useTransactionStore = create<TransactionStore>((set) => ({
  transactions: [],
  addTransaction: async (transaction) => {
    await db.transactions.add(transaction);
    set({ transactions: [...useTransactionStore.getState().transactions, transaction] });
  },
  fetchTransactions: async () => {
    const transactions = await db.transactions.toArray();
    set({ transactions });
  },
}));