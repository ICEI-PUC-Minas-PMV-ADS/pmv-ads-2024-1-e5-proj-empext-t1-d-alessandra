import React from 'react';
import LogoAdicionar from "../../../img/adicionar.png";
import axios from 'axios';
import config from '../../../config/config';
import { useState } from 'react';

function ModalEditarQuantidade({id}){

    const [qtd, setQtd] = useState(0);
    const handleInputChange = (event) => {setQtd(event.target.value); }
    function adicionarMais(){
        axios.put(config.URL+'estoque/adicionarMaisQuantidade/'+id+'/'+qtd)
        .then((response) => {window.location.reload()})
        .catch((error) => {console.log(error)})
    }
    return(
        <div>
            <button className="" onClick={()=>document.getElementById('my_modal_adcionarvalor'+id).showModal()}>Atualizar quantidade</button>
            <dialog id={"my_modal_adcionarvalor"+id} className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                  <h3 className="font-bold text-lg">Atualizar estoque</h3>
                  <p className="py-4">Atualiza a quantidade do produto</p>
                  <input id="mais"   type="text" className="input input-bordered" placeholder="Quantidade"  onChange={handleInputChange} />    
                  <div className="modal-action">
                    <button className="btn btn-success" onClick={()=>adicionarMais()}>Salvar</button>
                    <form method="dialog">
                        <button className="btn">Fechar</button>
                    </form>
                   </div>
                </div>
             </dialog>
         </div>
    );
}export default ModalEditarQuantidade;