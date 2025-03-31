export type PaymentMethod = 'Crédito' | 'Débito' | 'Pix';
export type Category = 'Mercado' | 'Restaurante' | 'Entretenimento' | 'Transporte';

export interface Purchase {
  id?: number;
  productName: string;
  category: Category;
  paymentMethod: PaymentMethod;
  amount: number;
  date: Date;
}