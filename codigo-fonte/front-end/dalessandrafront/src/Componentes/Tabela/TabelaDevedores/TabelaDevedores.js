import "../../../"
import dayjs from 'dayjs';
import React, { useState } from 'react';
import SubMenuDevedor from '../../SubMenu/subMenuDevedor';
import CardAlertaItemNaoEncontrado from '../../Card/CardAlertaItemNaoEncontrado'
import config from "../../../config/config";
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
                <br></br>
                {
                    (dados.length === 0) ?(    
                        <CardAlertaItemNaoEncontrado  textoExibir="Nenhum item encotrando"/>
                    ) : 
                    dados.filter(filtrarDados).map((item, index) => {
                        const diasRestantes = dayjs(dayjs(item.dtVenda).add(config.PERIODOCOBRANCA, "day")).diff(dayjs(new Date()), 'day');
                        let classeBg = '';
                        if (diasRestantes >= 20) {
                            classeBg = 'bg-success';
                        } else if (diasRestantes >5 || diasRestantes <= 19) {
                            classeBg = 'bg-warning';
                        } else if(diasRestantes <= 0) {
                            classeBg = 'bg-error';
                        }
                        return(
                            <tr key={index}>
                                <td>
                                    <div class="avatar placeholder">
                                        <div class={`${classeBg} text-info-content rounded-full w-8`}>
                                            <span>{item.nomeCliente[0]}</span>
                                        </div>
                                    </div> 
                                </td>
                                <td>{item.codCliente}</td>
                                <td>{item.nomeCliente}</td>
                                <td>{dayjs(item.dtVenda).format("DD/MM/YYYY")}</td>
                                <td>{dayjs(item.dtVenda).add(config.PERIODOCOBRANCA,"day").format("DD/MM/YYYY")}</td>
                                <td>{dayjs(dayjs(item.dtVenda).add(config.PERIODOCOBRANCA,"day")).diff(dayjs(new Date()),'day')}</td>
                                <td>{item.formaPagto}</td>
                                <td>{item.codVenda}</td>
                                <td>{'R$ '+item.vlTotal}</td>
                                <td><SubMenuDevedor id={item.codVenda}/></td>
                            </tr>
                         )
                        }
                      )
                }
            </tbody>
        </table>
    )
}

export default TabelaDevedores;