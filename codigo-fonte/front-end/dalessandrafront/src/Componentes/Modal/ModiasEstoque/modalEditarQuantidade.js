import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import config from '../../../config/config';
import AlertaErro from '../../Alertas/AlertaErro';
import Alertasucesso from '../../Alertas/AlertaSucesso';

function ModalEditarQuantidade({id}){

    const [qtd, setQtd] = useState(0);
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertaErro, setAlertaErro] = useState(false);
    const [mensagemError,setMensagemError] = useState()
    const handleInputChange = (event) => {setQtd(event.target.value); }
    function adicionarMais(){
        axios.put(config.URL+'estoque/adicionarMaisQuantidade/'+id+'/'+qtd)
        .then((response) => {
            if (response.status === 200) {
                setAlertaErro(false)
                setAlertVisible(true); 
                setTimeout(() => {
                  setAlertVisible(false);
                  window.location.reload(); 
                }, 1000);
              }
            
        })
        .catch((error) => {
            if(error.response.status === 400){
                setMensagemError("Erro: "+error.response.status+". Verifique se todos os campos estão digitados de maneira correta")
                setAlertaErro(true)
            }
            else{
                setAlertaErro(true)
                setMensagemError("Ops ! Aconteceu algum erro interno")
            }
        })
    }
    return(
        <div>
            <button className="" onClick={()=>document.getElementById('my_modal_adcionarvalor'+id).showModal()}>Editar quantidade</button>
            <dialog id={"my_modal_adcionarvalor"+id} className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                {alertVisible && <Alertasucesso message="Atualizado com sucesso" />}
                {alertaErro && <AlertaErro message={mensagemError} />}
                <br></br>
                  <h3 className="font-bold text-lg">Atualizar estoque</h3>
                  <p className="py-4">Atualiza a quantidade do produto</p>
                  <input id="mais"   type="text" className="input input-bordered" placeholder="Quantidade"  onChange={handleInputChange} />    
                  <div className="modal-action">
                    <button className="btn btn-success" onClick={()=>adicionarMais()}>Salvar</button>
                    <form method="dialog">
                        <button className="btn" onClick={()=>setAlertaErro(false)}>Fechar</button>
                    </form>
                   </div>
                </div>
             </dialog>
         </div>
    );
}export default ModalEditarQuantidade;