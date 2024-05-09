import "../../../"
import dayjs from 'dayjs';
import { Tag } from 'primereact/tag';
import React, { useState } from 'react';
import "../../../Pages/estilo/estoque.css"
import config from "../../../config/config";
import SubMenuDevedor from '../../SubMenu/subMenuDevedor';
import CardAlertaItemNaoEncontrado from '../../Card/CardAlertaItemNaoEncontrado'
import{formatarParaReal} from "../../Utils/utils"
function TabelaDevedores({ dados,filtroCodVenda, filtroNome, filtroDataVenda }){
    
    const filtrarDados = (item) => {
        return (
            item.codVenda.toString().includes(filtroCodVenda) &&
            item.nomeCliente.toLowerCase().includes(filtroNome.toLowerCase()) &&
            (filtroDataVenda === '' || dayjs(item.dtVenda).format("DD/MM/YYYY") ===dayjs(filtroDataVenda).format("DD/MM/YYYY"))
        );
    };
    return (
        <div>
        <table className="table table-xs alinharItemTabela">
            <thead>
                <tr>
                    
                    <th>Cod.Cliente</th>
                    <th>Nome</th>
                    <th>Data da venda</th>
                    <th>Data para pagamento</th>
                    <th>Dias para o Pagamento</th>
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
                        return(
                            <tr key={index}>
                                <td>{item.codCliente}</td>
                                <td>{item.nomeCliente}</td>
                                <td>{dayjs(item.dtVenda).format("DD/MM/YYYY")}</td>
                                <td>{dayjs(item.dtVenda).add(config.PERIODOCOBRANCA,"day").format("DD/MM/YYYY")}</td>
                                <td>{dayjs(dayjs(item.dtVenda).add(config.PERIODOCOBRANCA,"day")).diff(dayjs(new Date()),'day')}</td>
                                <td>{item.formaPagto}</td>
                                <td>{item.codVenda}</td>
                                <td>{formatarParaReal(item.vlTotal)}</td>
                                <td>
                                    {diasRestantes >= 20 && (<Tag severity="success" value={"Dentro do prazo"}></Tag>)}
                                    {diasRestantes >= 5 && diasRestantes <= 19 && (<Tag severity="warning" value={"Prazo quase acabando"}></Tag>)}
                                    {diasRestantes < 5 && (<Tag severity="danger" value={"Acabou o prazo"}></Tag>)}
                                </td>
                                <td><SubMenuDevedor id={item.codVenda}/></td>
                            </tr>
                          )
                        }
                      )
                }
            </tbody>
        </table>
          
        </div>
    )
}

export default TabelaDevedores;