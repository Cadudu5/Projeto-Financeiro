export interface Transaction {
    id?: number;
    amount: number;
    description: string;
    category: string;
    type: 'income' | 'expense';
    date: Date;
  }