
import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import config from '../../../config/config';
import CardAlertaItemNaoEncontrado from '../../Card/CardAlertaItemNaoEncontrado';
import logoOlho from'../../../img/open-eye-icon.png' 
import dayjs from 'dayjs';
function ExibirCompras({id}){
   const[compras,setCompras] = useState([])   
    function listarCompraDosDevedores(){
        axios.get(`${config.URL}devedores/obetrProdutosDevidos/${id}`)
        .then((response)=>{
            setCompras(response.data)
           
        })
        .catch((error)=>{
            console.log(error)
        })

    }
    function chamarModal() {
        document.getElementById('my_modal_exibirVendas' + id).showModal();
        listarCompraDosDevedores();
    }
    return(
        <div>
            <button className="" onClick={chamarModal}>Extrato da compra</button>
            <dialog id={"my_modal_exibirVendas"+id} className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <br></br>
                    <h3 className="font-bold text-lg">Itens comprados</h3>
                    <br></br>
                    <table className="table table-xs">
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>Tamanho</th>
                                <th>Quantidade</th>
                                <th>Valor Total</th>
                                <th>Data da compra</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            
                            (compras.length === 0) ?(    
                                <CardAlertaItemNaoEncontrado  textoExibir="Nenhum item encotrando"/>
                            ) : (
                            compras.map((item, index)  => (
                                <tr key={index}>
                                    <td>{item.nomeProduto}</td>
                                    <td>{item.tamanho}</td>
                                    <td>{item.quantidade}</td>
                                    <td>{item.vlTotal}</td>
                                    <td>{ dayjs(item.dtVenda).format("DD/MM/YYYY")}</td>
                                    </tr>
                                )))
                            }
                        </tbody>
                    </table>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn" >Fechar</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )

} export default ExibirCompras;