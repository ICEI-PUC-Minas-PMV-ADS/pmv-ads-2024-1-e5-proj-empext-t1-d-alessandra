import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Pages/Login/Login';
import Cadastro from './Pages/Cadastro/Cadastro';
import Cliente from './Pages/Cliente/Cliente';
import Venda from './Pages/Venda/Venda';
import RelatorioVenda from './Pages/Venda/RelatorioVenda';
import MaisVendidos from './Pages/Venda/RelatorioMaisVendidos';
import Estoque from './Pages/Estoque/Estoque';
import Financeiro from "./Pages/Financeiro/Financeiro";
import Devedores from './Pages/Cliente/Devedores';
import Configuracao from './Pages/Configurações/Configuracoes';
import reportWebVitals from './reportWebVitals';
import Historico from './Pages/Cliente/Historico';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

// Título da página
document.title = "D'Alessandra - Modas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  },
  {
    path: "/vendas",
    element: <Venda />
  },
  {
    path: "/relatorio-venda",
    element: <RelatorioVenda />
  },
  {
    path: "/mais-vendidos",
    element: <MaisVendidos />
  },
  {
    path: "/estoque",
    element: <Estoque />
  },
  {
    path: "/financeiro",
    element: <Financeiro />
  },
  {
    path: "/cliente",
    element: <Cliente />
  },
  {
    path: "/clienteDevedores",
    element: <Devedores />
  },
  {
    path: "/configuracao",
    element: <Configuracao />
  },
  {
    path: "/historico",
    element: <Historico />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
