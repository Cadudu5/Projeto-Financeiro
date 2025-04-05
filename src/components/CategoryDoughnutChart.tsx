// components/CategoryDoughnutChart.tsx
'use client';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registre os componentes necessários do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

interface CategoryData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
  }[];
}

export default function CategoryDoughnutChart({ data }: { data: CategoryData }) {
  return (
    <div className="h-full w-full">
      <Doughnut 
        data={data}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'right',
            },
            tooltip: {
              callbacks: {
                label: (context) => {
                  const label = context.label || '';
                  const value = context.raw as number;
                  const total = context.dataset.data.reduce((a, b) => a + b, 0);
                  const percentage = Math.round((value / total) * 100);
                  return `${label}: R$ ${value.toFixed(2)} (${percentage}%)`;
                }
              }
            }
          },
          cutout: '70%',
        }}
      />
    </div>
  );
}