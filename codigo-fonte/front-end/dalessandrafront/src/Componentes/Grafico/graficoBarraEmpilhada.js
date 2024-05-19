
import { Chart } from 'primereact/chart';
function graficoBarraEmpilhada({dados}){
  const labels = dados.map(item => item.mesAno);
  const entradaData = dados.map(item => item.entrada);
  const saidaData = dados.map(item => item.saida);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Entrada',
        data: entradaData,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
      },
      {
        label: 'Saída',
        data: saidaData,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: false,
      },
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
        text: 'Entradas e Saídas por Mês',
      },
    },
  };
    return(
        <Chart type="bar" data={chartData} options={chartOptions} />
    )

}export default graficoBarraEmpilhada