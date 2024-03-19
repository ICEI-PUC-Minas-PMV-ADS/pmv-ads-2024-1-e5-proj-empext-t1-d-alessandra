import axios from "axios";
import React, { useState } from "react";
import"../../../Pages/estilo/estoque.css";
import config from "../../../config/config";
import AlertaErro from "../../Alertas/AlertaErro";
import Alertasucesso from "../../Alertas/AlertaSucesso";
function ModalIncluir(){

    const [tipoDespesa,setTipoDespesa] = useState()
    const [nomeDespesa,setNomeDespesa] = useState()
    const [valorDespesa,setValorDespesa] = useState()
    const [dataDespesa,setDataDespesa] = useState()

    const capturaTipoDespesa = (event) => {setTipoDespesa(event.target.value); }
    const capturaNomeDespesa = (event) => {setNomeDespesa(event.target.value); }
    const capturaValorDespesa = (event) => {setValorDespesa(event.target.value); }
    const capturaDataDespesa = (event) => {setDataDespesa(event.target.value); }

    const [alertVisible, setAlertVisible] = useState(false);
    const [alertaErro, setAlertaErro] = useState(false);
    const [mensagemError,setMensagemError] = useState()
    function salvar(){
        axios.post(
            config.URL+'financeiro?tipoDespesa='+tipoDespesa+'&nomeDespesa='+nomeDespesa+'&valorDespesa='+valorDespesa+'&dataDespesa='+new Date(dataDespesa).toLocaleDateString('pt-BR')
        )
            .then((response)=>{
                if (response.status === 200) {
                    setAlertVisible(true);
                    setAlertaErro(false)
                    setTimeout(() => {
                        setAlertVisible(false);
                        window.location.reload();
                    }, 1000);
                }
            })
            .catch((error)=>{
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
    return (
        <div>
            <button className="btn btn-success" onClick={()=>document.getElementById('my_modal_20240310').showModal()} color={"#fff"}>Novo Registro</button>
            <dialog id="my_modal_20240310" className="modal">
                <div className="modal-box w-11/12 max-w-5xl alinharCamposModal">
                    {alertVisible && <Alertasucesso message="Item adicionado com sucesso"/>}
                    {alertaErro && <AlertaErro message={mensagemError}/>}
                    <br></br>
                    <h3 className="font-bold text-lg">Registro</h3>
                    <p className="py-4">Adicionar novo item</p>
                    <select id="tipo" onChange={capturaTipoDespesa} className="select select-ghost w-full max-w-xs">
                        <option disabled selected>Tipo Despesa</option>
                        <option value="Verão">Contas</option>
                        <option value="Inverno">Investimento</option>
                        <option value="Festa">Imposto</option>
                        <option value="Formal">Utilidades</option>
                        <option value="Peça intima">Outros</option>
                    </select>
                    <input id="Nome Despesa" type="text" placeholder="Descrição" onChange={capturaNomeDespesa}
                           class="input input-ghost w-full max-w-xs"/>
                    <input id="valorDespesa" type="Valor" onChange={capturaValorDespesa} placeholder="Valor Comprado"
                           class="input input-ghost w-full max-w-xs"/>
                    <input id="datacadastro" type="date" onChange={capturaDataDespesa} placeholder="Data Cadastro"
                           class="input input-ghost w-full max-w-xs"/>
                    <div className="modal-action">

                        <button className=" btn btn-success" onClick={() => salvar()}>Adicionar</button>
                        <form method="dialog">
                            <button className="btn" onClick={() => setAlertaErro(false)}>Fechar</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default ModalIncluir;