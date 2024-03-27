import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../config/config';
import Alertasucesso from '../../Alertas/AlertaSucesso';
import AlertaErro from '../../Alertas/AlertaErro';

function ModalEditar({ id }) {
    console.log('ID recebido:', id);
    const [tipoDespesa, setTipoDespesa] = useState('');
    const [nomeDespesa, setNomeDespesa] = useState('');
    const [valorDespesa, setValorDespesa] = useState('');
    const [dataDespesa, setDataDespesa] = useState('');
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertaErro, setAlertaErro] = useState(false);
    const [mensagemError, setMensagemError] = useState('');

    useEffect(() => {
        const buscarDados = async () => {
            try {
                const response = await axios.get(config.URL + 'financeiro/' + id);
                const dados = response.data;
                setTipoDespesa(dados.tipoDespesa);
                setNomeDespesa(dados.nomeDespesa);
                setValorDespesa(dados.valorDespesa);
                setDataDespesa(dados.dataDespesa);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };

        buscarDados();
    }, [id]);

    const capturaTipoDespesa = (event) => {
        setTipoDespesa(event.target.value);
    };

    const capturaNomeDespesa = (event) => {
        setNomeDespesa(event.target.value);
    };

    const capturaValorDespesa = (event) => {
        setValorDespesa(event.target.value);
    };

    const capturaDataDespesa = (event) => {
        setDataDespesa(event.target.value);
    };

    function salvar() {
        const headers = {
            'accept': "*/*",
            'Content-Type': 'application/json'
        };

        const data = {
            "tipoDespesa": tipoDespesa,
            "nomeDespesa": nomeDespesa,
            "valorDespesa": valorDespesa,
            "dataDespesa": new Date(dataDespesa).toLocaleDateString('pt-BR')
        };

        axios.put(config.URL + 'financeiro/' + id, data, { headers })
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
                    setMensagemError("Erro: " + error.response.status + ". Verifique se todos os campos estão digitados de maneira correta");
                    setAlertaErro(true);
                } else {
                    setAlertaErro(true);
                    setMensagemError("Ops! Aconteceu algum erro interno");
                }
            });
    }

    return (
        <div>
            <button className="btn btn-success" onClick={() => document.getElementById('my_modal_editarFinanceiro' + id).showModal()}>
                Editar
            </button>
            <dialog id={"my_modal_editarFinanceiro" + id} className="modal">
                <div className="modal-box w-11/12 max-w-5xl alinharCamposModal">
                    {alertVisible && <Alertasucesso message="Item atualizado com sucesso" />}
                    {alertaErro && <AlertaErro message={mensagemError} />}
                    <br />
                    <h3 className="font-bold text-lg">Editar Despesa</h3>
                    <p className="py-4">Preencha os campos abaixo para editar a despesa.</p>
                    <select id="tipoDespesa" value={tipoDespesa} onChange={capturaTipoDespesa} className="select select-ghost w-full max-w-xs">
                        <option disabled selected>Tipo Despesa</option>
                        <option value="Contas">Contas</option>
                        <option value="Investimento">Investimento</option>
                        <option value="Imposto">Imposto</option>
                        <option value="Outros">Outros</option>
                        <option value="Utilidades">Utilidades</option>
                    </select>
                    <input id="nomeDespesa" type="text" value={nomeDespesa} onChange={capturaNomeDespesa} placeholder="Descrição" className="input input-ghost w-full max-w-xs" />
                    <input id="valorDespesa" type="number" value={valorDespesa} onChange={capturaValorDespesa} placeholder="Valor" className="input input-ghost w-full max-w-xs" />
                    <input id="dataDespesa" type="date" value={dataDespesa} onChange={capturaDataDespesa} placeholder="Data" className="input input-ghost w-full max-w-xs" />
                    <div className="modal-action">
                        <button className="btn btn-success" onClick={() => salvar()}>Salvar</button>
                        <button className="btn" onClick={() => document.getElementById('my_modal_editarFinanceiro' + id).close()}>Cancelar</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default ModalEditar;
