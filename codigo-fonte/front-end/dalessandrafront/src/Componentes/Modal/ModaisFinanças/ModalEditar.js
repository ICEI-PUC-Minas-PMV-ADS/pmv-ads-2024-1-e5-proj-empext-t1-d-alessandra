import axios from "axios";
import React, { useState } from "react";
import config from "../../../config/config";
import AlertaErro from "../../Alertas/AlertaErro";
import Alertasucesso from "../../Alertas/AlertaSucesso";

function ModalEditar({ id, tipoDespesaInicial, nomeDespesaInicial, valorDespesaInicial, dataDespesaInicial, dataVencimentoInicial }) {
    console.log('ID recebido:', id);
    const [tipoDespesa, setTipoDespesa] = useState(tipoDespesaInicial);
    const [nomeDespesa, setNomeDespesa] = useState(nomeDespesaInicial);
    const [valorDespesa, setValorDespesa] = useState(valorDespesaInicial);
    const [dataDespesa, setDataDespesa] = useState(dataDespesaInicial);
    const [dataVencimento, setDataVencimento] = useState(dataVencimentoInicial);

    const [alertVisible, setAlertVisible] = useState(false);
    const [alertaErro, setAlertaErro] = useState(false);
    const [mensagemError, setMensagemError] = useState();

    function atualizar() {
        const headers = {
            'Content-Type': 'application/json'
        }

        const data = {
            "tipoDespesa": tipoDespesa,
            "nomeDespesa": nomeDespesa,
            "valorDespesa": valorDespesa,
            "dataDespesa": new Date(dataDespesa).toLocaleDateString('pt-BR'),
            "dataVencimento": new Date(dataVencimento).toLocaleDateString('pt-BR')
        }

        axios.put(
            config.URL + 'financeiro/' + id, data, { headers })
            .then((response) => {
                if (response.status === 200) {
                    setAlertVisible(true);
                    setAlertaErro(false);
                    setTimeout(() => {
                        setAlertVisible(false);
                        window.location.reload();
                    }, 1000);
                }
            })
            .catch((error) => {
                if (error.response.status === 400) {
                    setMensagemError("Erro: " + error.response.status + ". Verifique se todos os campos estão digitados corretamente.");
                    setAlertaErro(true);
                } else {
                    setAlertaErro(true);
                    setMensagemError("Ops! Ocorreu um erro interno.");
                }
            })
    }

    return (
        <div>
            <button className="" onClick={() => document.getElementById('my_modal_editar' + id).showModal()}>Editar</button>
            <dialog id={'my_modal_editar' + id} className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    {alertVisible && <Alertasucesso message="Despesa atualizada com sucesso!" />}
                    {alertaErro && <AlertaErro message={mensagemError} />}
                    <br></br>
                    <h3 className="font-bold text-lg">Editar Despesa</h3>
                    <select id="tipoDespesa" value={tipoDespesa} onChange={(e) => setTipoDespesa(e.target.value)} className="select select-ghost w-full max-w-xs">
                        <option disabled>Tipo Despesa</option>
                        <option value="Contas">Contas</option>
                        <option value="Investimento">Investimento</option>
                        <option value="Imposto">Imposto</option>
                        <option value="Outros">Outros</option>
                        <option value="Utilidades">Utilidades</option>
                    </select>
                    <input type="text" value={nomeDespesa} onChange={(e) => setNomeDespesa(e.target.value)} placeholder="Descrição" className="input input-ghost w-full max-w-xs" />
                    <input type="Valor" value={valorDespesa} onChange={(e) => setValorDespesa(e.target.value)} placeholder="Valor da Despesa" className="input input-ghost w-full max-w-xs" />
                    <input type="date" value={dataDespesa} onChange={(e) => setDataDespesa(e.target.value)} placeholder="Data do Pagamento" className="input input-ghost w-full max-w-xs" />
                    <input type="date" value={dataVencimento} onChange={(e) => setDataVencimento(e.target.value)} placeholder="Data de Vencimento" className="input input-ghost w-full max-w-xs" />
                    <div className="modal-action">
                        <button className="btn btn-success" onClick={atualizar}>Atualizar</button>
                        <form method="dialog">
                            <button className="btn" onClick={() => setAlertaErro(false)}>Fechar</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default ModalEditar;


