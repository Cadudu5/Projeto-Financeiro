import Dexie from 'dexie';
import { Purchase } from '../types/transactions';

class FinanceDB extends Dexie {
  purchases!: Dexie.Table<Purchase, number>;

  constructor() {
    super('FinanceDB');
    this.version(2).stores({
      purchases: '++id, productName, category, paymentMethod, amount, date'
    });
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const db = new FinanceDB();