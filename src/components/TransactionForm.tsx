import { useTransactionStore } from '../lib/store';
import { useForm } from 'react-hook-form';
import { Transaction } from '../types/transactions';

// Tipo para os dados do formulário (omitindo campos que serão preenchidos automaticamente)
type TransactionFormData = Omit<Transaction, 'id' | 'date'>;

export default function TransactionForm() {
  const { addTransaction } = useTransactionStore();
  const { register, handleSubmit, reset } = useForm<TransactionFormData>();

  const onSubmit = async (data: TransactionFormData) => {
    await addTransaction({
      ...data,
      amount: Number(data.amount), // Conversão explícita
      date: new Date() // Adiciona a data atual
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input 
        {...register('amount', { valueAsNumber: true })} 
        type="number" 
        placeholder="Valor" 
        required 
        className="p-2 border rounded"
      />
      
      <select 
        {...register('type')}
        className="p-2 border rounded"
      >
        <option value="expense">Despesa</option>
        <option value="income">Receita</option>
      </select>

      <input
        {...register('description')}
        placeholder="Descrição"
        className="p-2 border rounded"
      />

      <button 
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Salvar
      </button>
    </form>
  );
}