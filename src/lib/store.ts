import { create } from 'zustand';
import { db } from './db';
import { Purchase } from '../types/transactions';

interface PurchaseStore {
  purchases: Purchase[];
  addPurchase: (purchase: Omit<Purchase, 'id' | 'date'>) => Promise<void>;
  fetchPurchases: () => Promise<void>;
  deletePurchase: (id: number) => Promise<void>;
}

export const usePurchaseStore = create<PurchaseStore>((set) => ({
  purchases: [],
  
  addPurchase: async (purchase) => {
    const newPurchase = {
      ...purchase,
      date: new Date() // Adiciona a data atual automaticamente
    };
    await db.purchases.add(newPurchase);
    set({ purchases: [...usePurchaseStore.getState().purchases, newPurchase] });
  },

  fetchPurchases: async () => {
    const purchases = await db.purchases
      .orderBy('date') // Ordena por data (opcional)
      .reverse() // Mais recentes primeiro
      .toArray();
    set({ purchases });
  },

  deletePurchase: async (id) => {
    await db.purchases.delete(id);
    set({ purchases: usePurchaseStore.getState().purchases.filter(p => p.id !== id) });
  }
}));