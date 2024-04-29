
import React from 'react';
import axios from 'axios';
import { useState} from 'react';
import "../../../Pages/estilo/estoque.css"
import config from '../../../config/config';
import CardDadosPessoais from '../../Card/CardHistorico';
import CardInfromacoesCompra from '../../Card/CardInfromacoesCompra';
import { Avatar } from 'primereact/avatar';
import dayjs from 'dayjs';
function ExibirCompras({id}){
   const[dadosCliente,setDadosCliente] = useState([])   
   const [dadosComprasPendentes,setDadosComprasPendentes] = useState([])
   const [comprasRecentes,setComprasRecentes]=useState([])
   const [primeiraLetra,setPimeiraLetra]=useState()
    async function obterDadosCliente(){
        axios.get(`${config.URL}cliente/reuperarDadosCompletosClientes/${id}`)
        .then((response)=>{
            setDadosCliente(response.data)
            setPimeiraLetra(response.data.nomeCliente.substring(0, 2))
           
        })
        .catch((error)=>{
            console.log(error)
        })

    }
    function listarCompraDosDevedores(){
        axios.get(`${config.URL}cliente/listarHistoricoDeCompraClienteComFiltro/${id}/compras pendentes`)
        .then((response)=>{
            setDadosComprasPendentes(response.data)
           
        })
        .catch((error)=>{
            console.log(error)
        })

    }
    function listarComprasRecentes(){
        axios.get(`${config.URL}cliente/listarHistoricoDeCompraClienteComFiltro/${id}/compras recentes`)
        .then((response)=>{
            setComprasRecentes(response.data)           
        })
        .catch((error)=>{
            console.log(error)
        })

    }
     function chamarModal() {
        document.getElementById('my_modal_modalhistorico' + id).showModal();
        obterDadosCliente()
        listarCompraDosDevedores()
        listarComprasRecentes()
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
            <button className="" onClick={chamarModal}>Exibir Historico</button>
            <dialog id={"my_modal_modalhistorico"+id} className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <section className="container mx-auto p-4 perfil">
                        <Avatar className="avatarHistorico" icon="pi pi-user" size="xlarge" style={{ backgroundColor: '#00a96e', color: '#ffffff',left:"10rem",bottom:"0.5em",position:"relative" }} shape="circle" /> 
                        <h1 className="text-3xl font-bold">{dadosCliente.nomeCliente}</h1>
                        <p className="text-lg">Cliente há, {calcularDiferencaData(dadosCliente.dtCadastro)}</p>
                    </section>
                        <br></br>
                        <br></br>
                    <section className="container mx-auto p-4"> 
                        <CardDadosPessoais title={"Informações pessoais"} cpf={dadosCliente.cpfCnpj} email={dadosCliente.email} telefone={dadosCliente.telefone} endereco={dadosCliente.endereco}/>
                        <br></br>
                        <CardInfromacoesCompra id={id} comprasRecentes={comprasRecentes} compras={dadosComprasPendentes}  title={"Dados de compra"} qtdDeCompra={ dadosCliente.qtdDeCompra}  qtdComprasPendentesPagamento={ dadosCliente.qtdComprasPendentesPagamento}/>
                    </section>
                    <div className="modal-action">
                        <form method="dialog">
                             <button className="btn btn-success" >Fechar</button>
                        </form>
                    </div>
                </div>
            </dialog> 
        </div>
    )

} export default ExibirCompras;