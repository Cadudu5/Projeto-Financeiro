'use client';
import { useTransactionStore } from '../lib/store';
import { useEffect } from 'react';
import TransactionForm from '../components/TransactionForm';

export default function Home() {
  const { transactions, fetchTransactions } = useTransactionStore();

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]); // ← Adicionei fetchTransactions como dependência

  return (
    <main className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Controle Financeiro</h1>
      <TransactionForm />
      
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Transações</h2>
        <ul className="space-y-2">
          {transactions.map((t) => (
            <li key={t.id} className="p-2 border rounded">
              <span className="font-medium">{t.description}:</span> 
              <span className={t.type === 'income' ? 'text-green-500' : 'text-red-500'}>
                R$ {t.amount.toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}