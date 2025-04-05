// app/dashboard/page.tsx
'use client';
import { usePurchaseStore } from '@/lib/store';
import { useEffect, useMemo } from 'react';
import CategoryDoughnutChart from '@/components/CategoryDoughnutChart';

export default function DashboardPage() {
  const { purchases, fetchPurchases } = usePurchaseStore();

  useEffect(() => {
    fetchPurchases();
  }, [fetchPurchases]);

  // Processa os dados para o gráfico
  const chartData = useMemo(() => {
    const categories = ['Mercado', 'Restaurante', 'Entretenimento', 'Transporte'];
    const categoryTotals = categories.map(category => 
      purchases
        .filter(p => p.category === category)
        .reduce((sum, p) => sum + p.amount, 0)
    );

    return {
      labels: categories,
      datasets: [{
        data: categoryTotals,
        backgroundColor: [
          '#FF6384', // Vermelho (Mercado)
          '#36A2EB', // Azul (Restaurante)
          '#FFCE56', // Amarelo (Entretenimento)
          '#4BC0C0'  // Ciano (Transporte)
        ],
      }]
    };
  }, [purchases]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Análise por Categoria</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="h-96">
          <CategoryDoughnutChart data={chartData} />
        </div>
      </div>
    </div>
  );
}