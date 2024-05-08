import React, { useState } from 'react';
import axios from 'axios';
import config from '../../../config/config';
import AlertaErro from '../../Alertas/AlertaErro';
import Alertasucesso from '../../Alertas/AlertaSucesso';
import dayjs from 'dayjs';

function ModalEditarDataVencimento({id}) {
    const [dataVencimento, setDataVencimento] = useState();
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertaErro, setAlertaErro] = useState(false);
    const [mensagemError, setMensagemError] = useState();
    const handleDataVencimentoChange = (event) => { setDataVencimento(event.target.value); }
    console.log(id)
    function salvar() {
        console.log(id)
        axios.put(config.URL+'financeiro/atualizarDataVencimento/'+id+'?dataVencimento='+dayjs(dataVencimento).format("DD/MM/YYYY"))
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
            <button className="" onClick={() => document.getElementById('my_modal_editar_data_vencimento_' + id).showModal()}>Editar Data Vencimento</button>
            <dialog id={"my_modal_editar_data_vencimento_" + id} className="modal">
                    {alertVisible && <Alertasucesso message="Atualizado com sucesso" />}
                    {alertaErro && <AlertaErro message={mensagemError} />}
                <div className="modal-box w-11/12 max-w-5xl">
                    <br></br>
                    <h3 className="font-bold text-lg">Editar Data de Vencimento</h3>
                    <input type="date" class="input input-bordered input-success w-full max-w-xs mb-4 mr-7" placeholder="Data de Vencimento" value={dataVencimento} onChange={handleDataVencimentoChange} />
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

export default ModalEditarDataVencimento;