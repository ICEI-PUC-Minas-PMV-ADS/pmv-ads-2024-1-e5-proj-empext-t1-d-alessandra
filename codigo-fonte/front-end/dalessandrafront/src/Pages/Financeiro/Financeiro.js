import axios from "axios";
import React from "react";
import "../../Pages/estilo/financeiro.css";
import config from "../../config/config";
import { useEffect, useState } from "react";
import Card from "../../Componentes/Card/Card";
import Menu from "../../Componentes/Menu/Menu";
import Cash from "../../img/cash.png";
import Filtro from "../../Componentes/Tabela/Filtro";
import ModalIncluir from "../../Componentes/Modal/ModaisFinanças/modalncluirDespesa";
import TabelaFinancas from "../../Componentes/Tabela/tabelaFinancas";
function Financeiro(){

    const [financeiro, setFinanceiro] = useState([])
    const [vendas, setVendas] = useState(0)
    const [valorFinanceiro, setValorFinanceiro] = useState(0)
    const [filtro, setFiltro] = useState('');
    useEffect(() => {
        obterFinanceiro()
        obterVendas()
    },[])
    const handleFiltroChange = (filtro) => {
        setFiltro(filtro);
    };
    function obterFinanceiro(){
        const headers ={"Content-Type":"application/json"}
        axios.get(config.URL+'financeiro',{headers})
            .then((response) => {
                setFinanceiro(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function obterValorTotal(){
        const headers ={"Content-Type":"application/json"}
        axios.get(config.URL+'financeiro/valorTotalDespesas',{headers})
            .then((response) => {
                setValorFinanceiro(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    function obterVendas(){
        const headers ={"Content-Type":"application/json"}
        axios.get(config.URL+'vendas',{headers})
            .then((response) => {
                setVendas(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return(
        <main className="bg-base-100 drawer lg:drawer-open" >
            <Menu/>
            <br></br>
            <div className="drawer-content">
                <section className="container mx-auto p-4 alinhamentoMenu2">
                    <img  class="h-10 w-10" fill="none" viewBox="0 0 34 34" src={Cash}/>
                    <h1 className="text-3xl font-bold">Financeiro</h1>
                </section>
                <section className="container mx-auto p-4 alinhamentoCards">
                    <Card title="Valor Vendido: " textoExibir={"R$ "+vendas}/>
                    <Card title="Valor Despesas:" textoExibir={"R$ "+valorFinanceiro}/>
                    <Card title="Balanço Total:" textoExibir={"R$ "}/>
                </section>
                <br></br>
                <br></br>
                <section className="container mx-auto p-4 shadow-xl alinhamentoMenu2">
                    <ModalIncluir/>
                    <Filtro onFiltroChange={handleFiltroChange}/>
                </section>
                <br></br>
                <section className="container mx-auto p-4 shadow-xl overflow-x-auto" >
                    <h3 className="text-2xl font-bold corTexto">Finanças</h3>
                    <br></br>
                    <TabelaFinancas dados={financeiro} filtro={filtro}/>
                </section>
            </div>
        </main>
    )

}export default Financeiro;