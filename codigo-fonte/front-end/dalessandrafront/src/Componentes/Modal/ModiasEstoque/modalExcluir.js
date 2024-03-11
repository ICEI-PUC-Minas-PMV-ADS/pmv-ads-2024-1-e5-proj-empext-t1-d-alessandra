import axios from "axios";
import React from "react";
import config from "../../../config/config";
import LogoExlivraria from "../../../img/bin.png";
function ModalExcluir({id}){
   function excluir(id){
       axios.delete(config.URL+'estoque/'+id).
       then((response) => {
            window.location.reload();
        })
        .catch((error) => {
            console.log(error)
        })
     }
    return (
        <div>
        <button className="" onClick={()=>document.getElementById('my_modal_excluir'+id).showModal()}><img src={LogoExlivraria} width={30} height={20}/></button>
        <dialog id={'my_modal_excluir'+id} className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-lg">Exlcuir!</h3>
                <p className="py-4">Tem certeza que deeja excluir esse produto ?</p>
                <div className="modal-action">
                    <button className="btn btn-error" onClick={()=>excluir(id)}>Excluir</button>   
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