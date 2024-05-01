import React, { useState } from 'react';
import ModalDetalhe from './modalDetalhe';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";


function Tabela({ dados, filtro }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [codVendaSelecionado, setCodVendaSelecionado] = useState(null); 

    const handleClick = (codVenda) => {
        setModalOpen(true);
        setCodVendaSelecionado(codVenda); 
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setCodVendaSelecionado(null);
    };

    return (
        <div>
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th>Codigo Venda</th>
                        <th>Codigo Cliente</th>
                        <th>Forma Pagamento</th>
                        <th>Data Venda</th>
                        <th>Valor Total</th>
                        <th>Detalhe</th> 
                    </tr>
                </thead>
                <tbody>
                    {
                        dados.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.codVenda}</td>
                                    <td>{item.codCliente}</td>
                                    <td>{item.formaPagto}</td>
                                    <td>{item.dtVenda}</td>
                                    <td>{'R$ ' + item.vlTotal}</td>
                                    <td className='w-10 h-10'>
                                        <MagnifyingGlassIcon onClick={() => handleClick(item.codVenda)} style={{ cursor: 'pointer' }} />
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
            <ModalDetalhe isOpen={modalOpen} onClose={handleCloseModal} codVenda={codVendaSelecionado} /> {/* Passando o codVenda selecionado para o modal */}
        </div>
    )
}

export default Tabela;
