
import { Chart } from 'primereact/chart';
import dayjs from 'dayjs';
function graficoBarraEmpilhada({dados}){
  const labels = dados.map(item => item.mesAno);
  const entradaData = dados.map(item => item.entrada);
  const saidaData = dados.map(item => item.saida);
    console.log(dados)
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Entrada',
        data: entradaData,
        borderColor: '#1e970bcf',
        backgroundColor: '#1e970bcf',
        fill: false,
      },
      {
        label: 'Saída',
        data: saidaData,
        borderColor: '#c31414ad',
        backgroundColor: '#c31414ad',
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