import dayjs from 'dayjs';
import React, { useState } from 'react';
import "../../../"
import ExibirCompras from '../../Modal/ModalTelaDevedores/exibirCompras';
import BaixaDevedor from '../../Modal/ModalTelaDevedores/baixaDevedor';
import SubMenuDevedor from '../../SubMenu/subMenuDevedor';
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
                    <th></th>
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
                        <td>
                            <div class="avatar placeholder">
                                <div class="bg-green-500 text-info-content rounded-full w-8">
                                    <span>{item.nomeCliente[0]}</span>
                                </div>
                            </div> 
                        </td>
                        <td>{item.codCliente}</td>
                        <td>{item.nomeCliente}</td>
                        <td>{dayjs(item.dtVenda).format("DD/MM/YYYY")}</td>
                        <td>{dayjs(item.dtVenda).add(30,"day").format("DD/MM/YYYY")}</td>
                        <td>{dayjs(dayjs(item.dtVenda).add(30,"day")).diff(dayjs(new Date()),'day')}</td>
                        <td>{item.formaPagto}</td>
                        <td>{item.codVenda}</td>
                        <td>{'R$ '+item.vlTotal}</td>
                        <td><SubMenuDevedor id={item.codVenda}/></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TabelaDevedores;