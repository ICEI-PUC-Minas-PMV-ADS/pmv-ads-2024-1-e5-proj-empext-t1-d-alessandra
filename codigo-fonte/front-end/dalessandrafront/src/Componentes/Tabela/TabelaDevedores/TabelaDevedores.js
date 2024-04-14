import dayjs from 'dayjs';
import React, { useState } from 'react';
import "../../../"
import ExibirCompras from '../../Modal/ModalTelaDevedores/exibirCompras';
import BaixaDevedor from '../../Modal/ModalTelaDevedores/baixaDevedor';
function TabelaDevedores({ dados,filtroCodVenda, filtroNome, filtroDataVenda }){
    
    const filtrarDados = (item) => {
        return (
            item.codVenda.toString().includes(filtroCodVenda) &&
            item.nomeCliente.toLowerCase().includes(filtroNome.toLowerCase()) &&
            (filtroDataVenda === '' || dayjs(item.dtVenda).format("DD/MM/YYYY") ===dayjs(filtroDataVenda).format("DD/MM/YYYY"))
        );
    };
    return (
        <table className="table table-xs">
            <thead>
                <tr>
                    <th>Cod.Cliente</th>
                    <th>Nome</th>
                    <th>Data da venda</th>
                    <th>Data prevista para Pagamento</th>
                    <th>Dias que falta para o Pagamento</th>
                    <th>Forma de Pagamento</th>
                    <th>Cod.Venda</th>
                    <th>Valor Total</th>
                </tr>
            </thead>
            <tbody>
                {dados.filter(filtrarDados).map((item, index) => (
                    <tr key={index}>
                        <td>{item.codCliente}</td>
                        <td>{item.nomeCliente}</td>
                        <td>{dayjs(item.dtVenda).format("DD/MM/YYYY")}</td>
                        <td>{dayjs(item.dtVenda).add(30,"day").format("DD/MM/YYYY")}</td>
                        <td>{dayjs(dayjs(item.dtVenda).add(30,"day")).diff(dayjs(new Date()),'day')}</td>
                        <td>{item.formaPagto}</td>
                        <td>{item.codVenda}</td>
                        <td>{'R$ '+item.vlTotal}</td>
                        <td><ExibirCompras id={item.codVenda}/></td>
                        <td><BaixaDevedor id={item.codVenda}/></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TabelaDevedores;