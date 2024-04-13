
import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import config from '../../../config/config';
import AlertaErro from '../../Alertas/AlertaErro';
import Alertasucesso from '../../Alertas/AlertaSucesso';
import logoOlho from'../../../img/open-eye-icon.png' 
function exibirCompras({id}){
   
   // const [alertVisible, setAlertVisible] = useState(false);
    //const [alertaErro, setAlertaErro] = useState(false);
    //const [mensagemError,setMensagemError] = useState()
    //{alertVisible && <Alertasucesso message="Valor salvo com sucesso" />}
    //{alertaErro && <AlertaErro message={mensagemError} />}
    //()=>setAlertaErro(false)
    return(
        <div>
        <button className="" onClick={()=>document.getElementById('my_modal_exibirVendas'+id).showModal()}><img class="h-8 w-8" fill="none" viewBox="0 0 34 34" src={logoOlho}/></button>
        <dialog id={"my_modal_exibirVendas"+id} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
        
        <br></br>
                <h3 className="font-bold text-lg">Itens comprados</h3>
               
                <div className="modal-action">
                    
                    <form method="dialog">
                        <button className="btn" >Fechar</button>
                    </form>
                </div>
            </div>
        </dialog>
    </div>
    )


} export default exibirCompras;