import React from 'react';
import LogoAdicionar from "../../img/adicionar.png";
function ModalEditarQuantidade(){
    return(
        <div>
        <button className="" onClick={()=>document.getElementById('my_modal_2').showModal()}><img src={LogoAdicionar} width={30} height={20}/></button>
        <dialog id="my_modal_2" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-lg">Curiossoooooo</h3>
                <p className="py-4">Tem certeza que deeja excluir esse produto ?</p>
                <div className="modal-action">
                <form method="dialog">
                    
                    <button className="btn">Fechar</button>
                </form>
                </div>
            </div>
            </dialog>
        </div>
    );
}export default ModalEditarQuantidade;