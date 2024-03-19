import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './Pages/Login/Login';
import Estoque from './Pages/Estoque/Estoque';
import Cadastro from './Pages/Cadastro/Cadastro';
import Cliente from './Pages/Venda/Cliente';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const router = createBrowserRouter([

  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/ladastro",
    element: <Cadastro />
  },
  {
    path: "/",
    element: <Estoque />
  },
  {
    path: "/cliente",
    element: <Cliente />
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
