
import React from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import { useState,useEffect } from 'react';
import config from '../../../config/config';
import "../../../Pages/estilo/estoque.css"
import{formatarParaReal} from "../../Utils/utils"
function ExibirCompras({id}){
  
   const [Todascompras,setTodasCompras]=useState([])
    function listarComprasRecentes(){
        axios.get(`${config.URL}cliente/listarHistoricoDeCompraClienteComFiltro/${id}/todas`)
        .then((response)=>{
            setTodasCompras(response.data)
           
        })
        .catch((error)=>{
            console.log(error)
        })

    }
    function chamarModal() {
        document.getElementById('my_modal_modalcompras' + id).showModal();
        listarComprasRecentes()
    }

    return(
        <div>
            <button className="verMais" onClick={chamarModal}>Ver mais</button>
            <br></br>
            <dialog id={"my_modal_modalcompras"+id} className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <section className="container mx-auto p-4"> 
                        <table className="table table-xs">
                            <thead>
                                <tr>
                                    <th>Cod.Venda</th>
                                    <th>Produto</th>
                                    <th>Quantidade</th>
                                    <th>Valor Total</th>
                                    <th>Data da compra</th>
                                </tr>
                            </thead>
                            <tbody>
                                {        
                                  (Todascompras.length === 0) ?(    
                                    <tr>
                                        <td colSpan="6">Nenhum item encotrando</td>
                                    </tr>    
                                  ) : (
                                    Todascompras.map((item, index)  => (
                                        <tr key={index}>
                                            <td>{item.codVenda}</td>
                                            <td>{item.nomeProduto}</td>
                                            <td>{item.quantidade}</td>
                                            <td>{formatarParaReal(item.vlTotal)}</td>
                                            <td>{ dayjs(item.dtVenda).format("DD/MM/YYYY")}</td>
                                        </tr>
                                         )
                                          
                                        )
                                      )
                                    }
                                </tbody>
                            </table>
                    </section>
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