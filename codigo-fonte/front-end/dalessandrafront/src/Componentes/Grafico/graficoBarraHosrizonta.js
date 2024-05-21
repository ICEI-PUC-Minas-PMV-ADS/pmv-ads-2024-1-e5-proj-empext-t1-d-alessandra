import React from 'react';
import { Chart } from 'primereact/chart';

function GraficoBarraHorizontal({ dados }) {
  const labels = dados.map(item => item.formaPagamento);
  const frequenciaData = dados.map(item => item.frequencia);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Frequência',
        data: frequenciaData,
        borderColor: '#42A5F5',
        backgroundColor: '#42A5F5',
        fill: false,
      }
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Formas de pagamentos mais utilizadas no ano',
      },
    },
  };

  return (
    <Chart type="bar" data={chartData} options={chartOptions} />
  );
}

export default GraficoBarraHorizontal;
