import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../config/config';

function ModalDetalhe({ isOpen, onClose, codVenda }) {
  const [dadosVenda, setDadosVenda] = useState(null);

  useEffect(() => {
    const fetchDadosVenda = async () => {
      const headers = { "Content-Type": "application/json" };
      try {
        const response = await axios.get(`${config.URL}venda/${codVenda}`, { headers });
        setDadosVenda(response.data);
      } catch (error) {
        console.error('Erro ao obter dados da venda:', error);
      }
    };

    if (isOpen) {
      fetchDadosVenda();
    }
  }, [isOpen, codVenda]);

  return (
    <div
      data-dialog-backdrop="dialog"
      data-dialog-backdrop-close="true"
      className={`pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : ''}`}
    >
      <div data-dialog="dialog" className="relative m-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl">
        <div className="flex items-center p-4 font-sans text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
          {dadosVenda ? 'Codigo Venda: ' + dadosVenda.codVenda : 'Loading...'}
        </div>
        <div className="relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
          {dadosVenda ? 'Cliente: ' + dadosVenda.cliente?.codCliente + ' - ' + dadosVenda.cliente?.nomeCliente : 'Loading...'}
        </div>
        <div className="relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
          {dadosVenda ? 'Forma de Pagamento: ' + dadosVenda.formaPagto : 'Loading...'}
        </div>
        <div className="relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
          {dadosVenda ? (
            <ul>
              <li>Itens: </li>
              {dadosVenda.listaItens.map((item, index) => (
                <li key={index}>
                  {item.codProduto} {item.descProduto} - Quantidade: {item.quantidade}
                </li>
              ))}
            </ul>
          ) : 'Loading...'}
        </div>
        <div className="relative p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
          {dadosVenda ? 'Valor Total Pedido: R$' + dadosVenda.vlTotal : 'Loading...'}
        </div>
        <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
          <button
            data-ripple-light="true"
            onClick={onClose}
            className="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalDetalhe;
