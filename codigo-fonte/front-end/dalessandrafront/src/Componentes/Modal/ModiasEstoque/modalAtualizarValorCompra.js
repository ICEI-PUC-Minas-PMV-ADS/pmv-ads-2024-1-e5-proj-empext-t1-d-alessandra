import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import config from '../../../config/config';
import Alertasucesso from '../../Alertas/Alerta';
import AlertaErro from '../../Alertas/Alerta';

function ModalAtualizarValorCompra({id}){
    const [code,setCode] = useState('')
    const [qtd, setQtd] = useState(0);
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertaErro, setAlertaErro] = useState(false);
    const [mensagemError,setMensagemError] = useState()
    const handleInputChange = (event) => {setQtd(event.target.value); }
    
    function atualizar(){
        axios.put(config.URL+'estoque/atualizarValorComprado/'+id+'/'+qtd)
        .then((response) => {  
            if (response.status === 200) {
                setAlertVisible(true);
                setAlertaErro(false) 
                setCode(response.status)
                setTimeout(() => {
                  setAlertVisible(false);
                  window.location.reload(); 
                }, 1000);
              }

        })
        .catch((error) => {
            if(error.response.status === 400){
                setCode(error.response.status)
                setMensagemError("Erro: "+error.response.status+". Verifique se todos os campos estão digitados de maneira correta")
                setAlertaErro(true)
             }
             else{
                 setAlertaErro(true)
                 setCode(error.response.status)
                 setMensagemError("Ops ! Aconteceu algum erro interno")
              }
        })
    }
    return(
       <div>
            <button className="" onClick={()=>document.getElementById('my_modal_editarValorCompra'+id).showModal()}>Editar valor comprado</button>
            <dialog id={"my_modal_editarValorCompra"+id} className="modal">
            {alertVisible && <Alertasucesso code={code}/>}
            {alertaErro && <AlertaErro code={code} />}
            <div className="modal-box w-11/12 max-w-5xl">
            <br></br>
                    <h3 className="font-bold text-lg">Atualizar valor comprado</h3>
                    <p className="py-4">Digite o valor que o produto foi comprado.</p>
                    <input id="mais"   type="text" className="input input-bordered" placeholder="Valor"  onChange={handleInputChange} />    
                    <div className="modal-action">
                        <button className="btn btn-success" onClick={()=>atualizar()}>Alterar</button>
                        <form method="dialog">
                            <button className="btn" onClick={()=>setAlertaErro(false)}>Fechar</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}export default ModalAtualizarValorCompra;