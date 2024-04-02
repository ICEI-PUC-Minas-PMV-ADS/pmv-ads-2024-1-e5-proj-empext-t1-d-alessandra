import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../Pages/estilo/financeiro.css";
import config from "../../config/config";
import Card from "../../Componentes/Card/Card";
import Menu from "../../Componentes/Menu/Menu";
import Cash from "../../img/cash.png";
import ModalIncluir from "../../Componentes/Modal/ModaisFinanças/modalncluirDespesa";
import TabelaFinancas from "../../Componentes/Tabela/tabelaFinancas";
import Filtro from "../../Componentes/Tabela/Filtro";
import FiltroData from "../../Componentes/Tabela/FiltroData";

function Financeiro() {

    const [financeiro, setFinanceiro] = useState([]);
    const [vendas, setVendas] = useState([]);
    const [valorVendas, setValorVendas] = useState(0);
    const [valorFinanceiro, setValorFinanceiro] = useState(0);
    const [filtro, setFiltro] = useState('');

    const handleFiltroChange = (filtro) => {
        setFiltro(filtro);
    };

    useEffect(() => {
        obterFinanceiro();
        obterValorTotal();
        obterVendas();
        obterValorVendas();
    }, [])

    const obterFinanceiro = () => {
        const headers = { "Content-Type": "application/json" };
        axios.get(config.URL + 'financeiro', { headers })
            .then((response) => {
                setFinanceiro(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };


    function obterValorTotal() {
        const headers = { "Content-Type": "application/json" };
        axios.get(config.URL + 'financeiro/totalDespesas', { headers })
            .then((response) => {
                setValorFinanceiro(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function obterValorVendas() {
        const headers = { "Content-Type": "application/json" };
        axios.get(config.URL + 'vendas/totalVendas', { headers })
            .then((response) => {
                setValorVendas(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    function obterVendas() {
        const headers = { "Content-Type": "application/json" }
        axios.get(config.URL + 'vendas', { headers })
            .then((response) => {
                setVendas(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <main className="bg-base-100 drawer lg:drawer-open" >
            <Menu />
            <br></br>
            <div className="drawer-content">
                <section className="container mx-auto p-4 alinhamentoMenu2">
                    <img class="h-10 w-10" fill="none" viewBox="0 0 34 34" src={Cash} />
                    <h1 className="text-3xl font-bold">Financeiro</h1>
                </section>
                <section className="container mx-auto p-4 alinhamentoCards">
                    <Card title="Valor Vendido: " textoExibir={"R$ " + (valorVendas)} />
                    <Card title="Valor Despesas:" textoExibir={"R$ " + (valorFinanceiro)} />
                    <Card title="Balanço Total:" textoExibir={"R$ " + (valorVendas - valorFinanceiro)} />
                </section>
                <br></br>
                <br></br>
                <section className="container mx-auto p-4 shadow-xl alinhamentoMenu2">
                    <ModalIncluir />
                    <div className="flex space-x-4">
                        <Filtro onFiltroChange={handleFiltroChange} />
                    </div>
                </section>
                <br></br>
                <section className="container mx-auto p-4 shadow-xl overflow-x-auto" >
                    <h3 className="text-2xl font-bold corTexto">Finanças</h3>
                    <br></br>
                        <TabelaFinancas dados={financeiro} filtro={filtro} />
                </section>
            </div>
        </main>
    )
}

export default Financeiro;
