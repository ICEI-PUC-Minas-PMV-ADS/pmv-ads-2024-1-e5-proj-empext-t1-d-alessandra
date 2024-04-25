import axios from "axios";
import React from "react";
import { useState } from "react";
import config from "../../../config/config";
import LogoExlivraria from "../../../img/bin.png";
import Alertasucesso from "../../Alertas/Alerta";

function ModalExcluir({id}){
    const [code,setCod] =useState('')
    const [alertVisible, setAlertVisible] = useState(false);
   function excluir(id){
       axios.delete(config.URL+'estoque/'+id).
       then((response) => {
        if (response.status === 200) {
            setAlertVisible(true); 
            setCod(response.status)
            setTimeout(() => {
              setAlertVisible(false);
              setCod(' ')
              window.location.reload(); 
            }, 1000);
          }
       })
       .catch((error) => {console.log(error)})
     }
    return (
        <div>
            <button className="" onClick={()=>document.getElementById('my_modal_excluir'+id).showModal()}><img class="h-8 w-8" fill="none" viewBox="0 0 34 34" src={LogoExlivraria}/></button>
            <dialog id={'my_modal_excluir'+id} className="modal">
            {alertVisible && <Alertasucesso code={code}message="Item excluído com sucesso!" />}
            <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-lg">Exlcuir!</h3>
                <p className="py-4">Tem certeza que deseja excluir esse produto ?</p>
                <br></br>
                <div className="modal-action">
                    <button className="btn btn-error" color={"#fff"} onClick={()=>excluir(id)}>Excluir</button>   
                    <form method="dialog">
                        <button className="btn">Fechar</button>
                    </form>
                </div>
            </div>
          </dialog>
        </div>
    )
}
export default ModalExcluir;