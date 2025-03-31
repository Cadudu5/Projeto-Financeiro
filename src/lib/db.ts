import Dexie from 'dexie';
import { Transaction } from '../types/transactions';

class FinanceDB extends Dexie {
  transactions!: Dexie.Table<Transaction, number>;

  constructor() {
    super('FinanceDB');
    this.version(1).stores({
      transactions: '++id, amount, category, type, date',
    });
  }
}

export const db = new FinanceDB();