import React, { useState } from 'react';
import axios from 'axios';
import config from '../../../config/config';
import AlertaErro from '../../Alertas/AlertaErro';
import Alertasucesso from '../../Alertas/AlertaSucesso';

function ModalEditarTipoDespesa({id}) {
    const [tipoDespesa, setTipoDespesa] = useState();
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertaErro, setAlertaErro] = useState(false);
    const [mensagemError, setMensagemError] = useState();
    const handleTipoDespesaChange = (event) => { setTipoDespesa(event.target.value); }
    console.log(id)
    function salvar() {
        console.log(id)
        axios.put(config.URL+'financeiro/atualizarTipoDespesa/'+id+'/'+tipoDespesa)
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
            <button className="" onClick={() => document.getElementById('my_modal_editar_tipo_despesa_' + id).showModal()}>Editar Tipo de Despesa</button>
            <dialog id={"my_modal_editar_tipo_despesa_" + id} className="modal">
                    {alertVisible && <Alertasucesso message="Atualizado com sucesso" />}
                    {alertaErro && <AlertaErro message={mensagemError} />}
                <div className="modal-box w-11/12 max-w-5xl">
                    <br></br>
                    <h3 className="font-bold text-lg">Editar Tipo de Despesa</h3>
                    <select id="tipoDespesa" className="select select-bordered w-full max-w-xs mb-4 mr-7" placeholder="Tipo de Despesa" value={tipoDespesa} onChange={handleTipoDespesaChange}>
                    <option disabled selected>Tipo Despesa</option>
                        <option value="Contas">Contas</option>
                        <option value="Investimento">Investimento</option>
                        <option value="Imposto">Imposto</option>
                        <option value="Outros">Outros</option>
                        <option value="Utilidades">Utilidades</option>
                    </select>
                    <div className="modal-action">
                        <button className="btn btn-success" onClick={salvar}>Salvar</button>
                        <form method="dialog">
                            <button className="btn" onClick={() => setAlertaErro(false)}>Fechar</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default ModalEditarTipoDespesa;