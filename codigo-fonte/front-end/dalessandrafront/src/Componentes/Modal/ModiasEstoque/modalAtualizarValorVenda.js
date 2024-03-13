import React from 'react';
import LogoAdicionar from "../../../img/adicionar.png";
import axios from 'axios';
import config from '../../../config/config';
import { useState } from 'react';

function ModalAtualizarValorVenda({id}){

    const [qtd, setQtd] = useState(0);
    const handleInputChange = (event) => {setQtd(event.target.value); }
    
    function adicionarMais(){
        axios.put(config.URL+'estoque/atualizarValorVenda/'+id+'/'+qtd)
        .then((response) => {  
            window.location.reload()
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return(
       <div>
            <button className="" onClick={()=>document.getElementById('my_modal_editarValorVenda'+id).showModal()}>Editar Valor Venda</button>
            <dialog id={"my_modal_editarValorVenda"+id} className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Editar valor venda</h3>
                    <p className="py-4">Tem certeza que deeja excluir esse produto ?</p>
                    <input id="mais"   type="text" className="input input-bordered" placeholder="Quantidade"  onChange={handleInputChange} />    
                    <div className="modal-action">
                        <button className="btn btn-success" onClick={()=>adicionarMais()}>Alterar</button>
                        <form method="dialog">
                            <button className="btn">Fechar</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}export default ModalAtualizarValorVenda;