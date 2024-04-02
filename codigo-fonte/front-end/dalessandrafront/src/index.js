import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Pages/Login/Login';
import Cadastro from './Pages/Cadastro/Cadastro';
import Cliente from './Pages/Cliente/Cliente';
import Venda from './Pages/Venda/Venda';
import Estoque from './Pages/Estoque/Estoque';
import Financeiro from "./Pages/Financeiro/Financeiro";
import reportWebVitals from './reportWebVitals';
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
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
