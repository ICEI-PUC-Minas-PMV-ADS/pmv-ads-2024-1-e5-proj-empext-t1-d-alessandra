
import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import CardDadosPessoais from '../../Card/CardHistorico';
import CardInfromacoesCompra from '../../Card/CardInfromacoesCompra';
import config from '../../../config/config';
import logoOlho from'../../../img/open-eye-icon.png' 
import CardAlertaItemNaoEncontrado from '../../Card/CardAlertaItemNaoEncontrado';
import dayjs from 'dayjs';
function ExibirCompras({id}){
   const[dadosCliente,setDadosCliente] = useState([])   
   const [dadosComprasPendentes,setDadosComprasPendentes] = useState([])
    function obterDadosCliente(){
        axios.get(`${config.URL}cliente/reuperarDadosCompletosClientes/${id}`)
        .then((response)=>{
            setDadosCliente(response.data)
           
        })
        .catch((error)=>{
            console.log(error)
        })

    }
    function listarCompraDosDevedores(){
        axios.get(`${config.URL}devedores/obetrProdutosDevidos/${id}`)
        .then((response)=>{
            setDadosComprasPendentes(response.data)
           
        })
        .catch((error)=>{
            console.log(error)
        })

    }
    function chamarModal() {
        document.getElementById('my_modal_modalhistorico' + id).showModal();
        obterDadosCliente()
        listarCompraDosDevedores()
    }

    function calcularDiferencaData(cadastro) {
        const dataCadastro = dayjs(cadastro, 'DD/MM/YYYY');
        const dataAtual = dayjs();
        const diferencaAnos = dataAtual.diff(dataCadastro, 'year');
        const diferencaMeses = dataAtual.diff(dataCadastro, 'month');
        const diferencaDias = dataAtual.diff(dataCadastro, 'day');
    
        if (diferencaAnos > 0) {
            return `${diferencaAnos} ano${diferencaAnos > 1 ? 's' : ''}`;
        } else if (diferencaMeses > 0) {
            return `${diferencaMeses} mês${diferencaMeses > 1 ? 'es' : ''}`;
        } else if (diferencaDias > 0) {
            return `${diferencaDias} dia${diferencaDias > 1 ? 's' : ''}`;
        } else {
            return 'Hoje';
        }
    }
    return(
        <div>
            <button className="" onClick={chamarModal}>Historico</button>
            <dialog id={"my_modal_modalhistorico"+id} className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <section className="container mx-auto p-4"> 
                        <div class="avatar">
                            <div class="w-24 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold">{dadosCliente.nomeCliente}</h1>
                        <p className="text-lg">Cliente há, {calcularDiferencaData(dadosCliente.dtCadastro)}</p>
                    </section>
                        <br></br>
                    <section className="container mx-auto p-4"> 
                        <CardDadosPessoais title={"Informacoes pessoais"} cpf={dadosCliente.cpfCnpj} email={dadosCliente.email} telefone={dadosCliente.telefone} endereco={dadosCliente.endereco}/>
                        <br></br>
                        <CardInfromacoesCompra  compras={dadosComprasPendentes} id ={id} title={"Dados de compra"} qtdDeCompra={ dadosCliente.qtdDeCompra}  qtdComprasPendentesPagamento={ dadosCliente.qtdComprasPendentesPagamento}/>
                    </section>
                    <div className="modal-action">
                        <form method="dialog">
                             <button className="btn" >Fechar</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )

} export default ExibirCompras;