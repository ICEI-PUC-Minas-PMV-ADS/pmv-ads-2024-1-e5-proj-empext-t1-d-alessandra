import React, { useState, useEffect } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import config from '../../../config/config';

const Graphic = () => {
  const [chartData, setChartData] = useState({
    series: [{ name: "Valor", data: [] }],
    options: {
      type: "line",
      chart: {
        toolbar: {
          show: false,
        },
      },
      title: {
        show: "",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617"],
      stroke: {
        lineCap: "round",
        curve: "smooth",
      },
      markers: {
        size: 0,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
        categories: [
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      grid: {
        show: true,
        borderColor: "#dddddd",
        strokeDashArray: 10,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
      fill: {
        opacity: 0.8,
      },
      tooltip: {
        theme: "dark",
      },
    },
  });

  function obterDataAtual() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(4 ).padStart(2, '0'); 
    const day = String(11).padStart(2, '0'); 
    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    const headers = {"Content-Type": "application/json"};
    const dataAtual = obterDataAtual();
    axios.get(`${config.URL}venda/grafico-dia?dtVenda=${dataAtual}`, {headers})
      .then(response => {
        const vlTotalData = response.data.map(item => item.vlTotal);
        setChartData(prevState => ({
          ...prevState,
          series: [{ name: "Valor", data: vlTotalData }],
        }));
      })
      .catch(error => console.error('Erro ao buscar dados:', error));
  }, []);

  return (
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
      >
        <div className="w-max rounded-lg bg-gray-900 p-5 text-white">
          <ShoppingCartIcon className="h-6 w-6" />
        </div>
        <div>
          <Typography variant="h6" color="blue-gray">
            Gráfico de Vendas Diárias
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="max-w-sm font-normal"
          >
          </Typography>
        </div>
      </CardHeader>
      <CardBody className="px-2 pb-0">
        <Chart {...chartData} height={300} />
      </CardBody>
    </Card>
  );
};

export default Graphic;
