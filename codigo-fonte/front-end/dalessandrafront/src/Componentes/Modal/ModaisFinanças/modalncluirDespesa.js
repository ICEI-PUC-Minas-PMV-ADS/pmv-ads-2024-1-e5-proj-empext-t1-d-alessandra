import axios from "axios";
import React, { useState } from "react";
import "../../../Pages/estilo/estoque.css";
import config from "../../../config/config";
import AlertaErro from "../../Alertas/AlertaErro";
import Alertasucesso from "../../Alertas/AlertaSucesso";
function ModalIncluir() {

    const [tipoDespesa, setTipoDespesa] = useState()
    const [nomeDespesa, setNomeDespesa] = useState()
    const [valorDespesa, setValorDespesa] = useState()
    const [dataDespesa, setDataDespesa] = useState()

    const capturaTipoDespesa = (event) => { setTipoDespesa(event.target.value); }
    const capturaNomeDespesa = (event) => { setNomeDespesa(event.target.value); }
    const capturaValorDespesa = (event) => { setValorDespesa(event.target.value); }
    const capturaDataDespesa = (event) => { setDataDespesa(event.target.value); }

    const [alertVisible, setAlertVisible] = useState(false);
    const [alertaErro, setAlertaErro] = useState(false);
    const [mensagemError, setMensagemError] = useState()
    function salvar() {
        const headers = {
            'accept ': "*/*",
            'Content-Type':'application/json'
        }

        const data = {
            "tipoDespesa": tipoDespesa,
            "nomeDespesa": nomeDespesa,
            "valorDespesa": valorDespesa,
            "dataDespesa": new Date(dataDespesa).toLocaleDateString('pt-BR'),
        }
    

        axios.post(
            config.URL+'financeiro', data, { headers })
            .then((response) => {
                console.log(response.status)
                if (response.status === 200) {
                    setAlertVisible(true);
                    setAlertaErro(false)
                    setTimeout(() => {
                        setAlertVisible(false);
                        window.location.reload();
                    }, 1000);
                }
            })
            .catch((error) => {
                console.log(error.response.status)
                if (error.response.status === 400) {
                    setMensagemError("Erro: " + error.response.status + ". Verifique se todos os campos estão digitados de maneira correta")
                    setAlertaErro(true)
                }
                else {
                    setAlertaErro(true)
                    setMensagemError("Ops ! Aconteceu algum erro interno")
                }
            })
    }
    return (
        <div>
            <button className="btn btn-success" onClick={() => document.getElementById('my_modal_20240310L').showModal()} color={"#fff"}>Novo Registro</button>
            <dialog id="my_modal_20240310L" className="modal">
                <div className="modal-box w-11/12 max-w-5xl alinharCamposModal">
                    {alertVisible && <Alertasucesso message="Item adicionado com sucesso" />}
                    {alertaErro && <AlertaErro message={mensagemError} />}
                    <br></br>
                    <h3 className="font-bold text-lg">Registro</h3>
                    <p className="py-4">Registrar Despesa</p>
                    <select id="tipoDespesa" onChange={capturaTipoDespesa} className="select select-ghost w-full max-w-xs">
                        <option disabled selected>Tipo Despesa</option>
                        <option value="Contas">Contas</option>
                        <option value="Investimento">Investimento</option>
                        <option value="Imposto">Imposto</option>
                        <option value="Outros">Outros</option>
                        <option value="Utilidades">Utilidades</option>
                    </select>
                    <input id="nomeDespesa" type="text" placeholder="Descrição" onChange={capturaNomeDespesa}
                        class="input input-ghost w-full max-w-xs" />
                    <input id="valorDespesa" type="Valor" onChange={capturaValorDespesa} placeholder="Valor da Despesa"
                        class="input input-ghost w-full max-w-xs" />
                    <input id="dataDespesa" type="date" onChange={capturaDataDespesa} placeholder="Data da Despesa"
                        class="input input-ghost w-full max-w-xs" />
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