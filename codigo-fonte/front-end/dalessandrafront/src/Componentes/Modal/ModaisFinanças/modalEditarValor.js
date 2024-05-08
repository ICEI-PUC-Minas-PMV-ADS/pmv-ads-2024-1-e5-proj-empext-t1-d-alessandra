import React, { useState } from 'react';
import axios from 'axios';
import config from '../../../config/config';
import AlertaErro from '../../Alertas/AlertaErro';
import Alertasucesso from '../../Alertas/AlertaSucesso';

function ModalEditarValorDespesa({id}) {
    const [valorDespesa, setValorDespesa] = useState();
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertaErro, setAlertaErro] = useState(false);
    const [mensagemError, setMensagemError] = useState();
    const handleValorDespesaChange = (event) => { setValorDespesa(event.target.value); }
    console.log(id)
    function salvar() {
        console.log(id)
        axios.put(config.URL+'financeiro/atualizarValorDespesa/'+id+'/'+valorDespesa)
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
            <button className="" onClick={() => document.getElementById('my_modal_editar_valor_despesa_' + id).showModal()}>Editar Valor da Despesa</button>
            <dialog id={"my_modal_editar_valor_despesa_" + id} className="modal">
                    {alertVisible && <Alertasucesso message="Atualizado com sucesso" />}
                    {alertaErro && <AlertaErro message={mensagemError} />}
                <div className="modal-box w-11/12 max-w-5xl">
                    <br></br>
                    <h3 className="font-bold text-lg">Editar Valor da Despesa</h3>
                    <input type="Valor" class="input input-bordered input-success w-full max-w-xs mb-4 mr-7" placeholder="Valor da Despesa" value={valorDespesa} onChange={handleValorDespesaChange} />
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

export default ModalEditarValorDespesa;