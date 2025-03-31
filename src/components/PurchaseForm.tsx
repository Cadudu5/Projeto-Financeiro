"use client";
import { useForm } from 'react-hook-form';
import { usePurchaseStore } from '../lib/store';
import { PaymentMethod, Category } from '../types/transactions';

type PurchaseFormData = {
  productName: string;
  category: Category;
  paymentMethod: PaymentMethod;
  amount: number;
};

export default function PurchaseForm() {
  const { addPurchase } = usePurchaseStore();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<PurchaseFormData>();

  const onSubmit = async (data: PurchaseFormData) => {
    try {
      await addPurchase({
        productName: data.productName,
        category: data.category,
        paymentMethod: data.paymentMethod,
        amount: Number(data.amount)
      });
      reset();
    } catch (error) {
      console.error('Erro ao salvar compra:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
      <div>
        <label htmlFor="productName" className="block mb-1 font-medium">
          Nome do Produto
        </label>
        <input
          id="productName"
          {...register('productName', { required: 'Campo obrigatório' })}
          className="w-full p-2 border rounded"
          placeholder="Ex: Notebook, Supermercado"
        />
        {errors.productName && (
          <span className="text-red-500 text-sm">{errors.productName.message}</span>
        )}
      </div>

      <div>
        <label htmlFor="category" className="block mb-1 font-medium">
          Categoria
        </label>
        <select
          id="category"
          {...register('category', { required: true })}
          className="w-full p-2 border rounded"
        >
          {Object.values(['Mercado', 'Restaurante', 'Entretenimento', 'Transporte']).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="paymentMethod" className="block mb-1 font-medium">
          Forma de Pagamento
        </label>
        <select
          id="paymentMethod"
          {...register('paymentMethod', { required: true })}
          className="w-full p-2 border rounded"
        >
          {Object.values(['Crédito', 'Débito', 'Pix']).map((method) => (
            <option key={method} value={method}>
              {method}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="amount" className="block mb-1 font-medium">
          Valor (R$)
        </label>
        <input
          id="amount"
          type="number"
          step="0.01"
          {...register('amount', { 
            required: 'Campo obrigatório',
            min: { value: 0.01, message: 'Valor deve ser maior que zero' }
          })}
          className="w-full p-2 border rounded"
          placeholder="0,00"
        />
        {errors.amount && (
          <span className="text-red-500 text-sm">{errors.amount.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Registrar Compra
      </button>
    </form>
  );
}