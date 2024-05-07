import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../Pages/estilo/financeiro.css";
import TabelaFinancas from "../../Componentes/Tabela/TabelaFinanceiro/tabelaFinancas";
import config from "../../config/config";
import Card from "../../Componentes/Card/Card";
import Menu from "../../Componentes/Menu/Menu";
import Cash from "../../img/cash.png";
import ModalIncluir from "../../Componentes/Modal/ModaisFinanças/modalncluirDespesa";
import FiltrarData from "../../Componentes/Tabela/TabelaFinanceiro/FiltrarData";
import FiltroInput from "../../Componentes/Tabela/TabelaFinanceiro/FiltroInput";

function Financeiro() {
    const [financeiro, setFinanceiro] = useState([]);
    const [venda, setVenda] = useState([]);
    const [valorVendas, setValorVendas] = useState(0);
    const [valorFinanceiro, setValorFinanceiro] = useState(0);
    const [valorTotalVendasFiltradas, setValorTotalVendasFiltradas] = useState(0); // Adicionando estado para armazenar o valor total das vendas filtradas
    const [filtro, setFiltro] = useState(0);
    const [filtroData, setFiltroData] = useState({ dia: null, mes: null, ano: null });

    const handleFiltroDataChange = (filtroData) => {
        setFiltroData(filtroData);
    };

    const handleFiltroChange = (filtro) => {
        setFiltro(filtro);
        obterFinanceiro(filtro);
    };

    useEffect(() => {
        obterFinanceiro();
        obterVenda();
        obterValorTotal();
        obterValorVendas();
    }, [filtroData, filtro]);

    const obterFinanceiro = () => {
        const headers = { "Content-Type": "application/json" };
        axios.get(config.URL + 'financeiro/despesasOrdenadas', { headers })
            .then((response) => {
                setFinanceiro(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const obterVenda = () => {
        const headers = { "Content-Type": "application/json" };
        axios.get(config.URL + 'venda', { headers })
            .then((response) => {
                console.log("Dados brutos de vendas:", response.data);
                const vendasComDataFormatada = response.data.map(item => ({
                    ...item,
                    dtVenda: new Date(item.dtVenda).toLocaleDateString('pt-BR', { timeZone: 'UTC' })
                }));
                console.log("Dados de vendas com data formatada:", vendasComDataFormatada);
                const vendasFiltradas = vendasComDataFormatada.filter(item => {
                    if (!filtroData) return true;
                    const dtVenda = item.dtVenda.split('/');
                    return (
                        (!filtroData.dia || filtroData.dia === dtVenda[0]) &&
                        (!filtroData.mes || filtroData.mes === dtVenda[1]) &&
                        (!filtroData.ano || filtroData.ano === dtVenda[2])
                    );
                });
                console.log("Vendas filtradas:", vendasFiltradas);
                setVenda(vendasFiltradas);

                // Calcular e atualizar o valor total das vendas filtradas
                const totalVendas = vendasFiltradas.reduce((acc, curr) => acc + parseFloat(curr.vlTotal), 0);
                setValorTotalVendasFiltradas(totalVendas);
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
        axios.get(config.URL + 'venda/totalVendas', { headers })
            .then((response) => {
                setValorVendas(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    
    const valorTotalDespesasFiltradas = financeiro.filter(item => {
        if (!filtroData) return true;
        const dataDespesa = item.dataDespesa.split('/');
        return (
            (!filtroData.dia || filtroData.dia === dataDespesa[0]) &&
            (!filtroData.mes || filtroData.mes === dataDespesa[1]) &&
            (!filtroData.ano || filtroData.ano === dataDespesa[2])
        );
    }).reduce((acc, curr) => acc + parseFloat(curr.valorDespesa), 0);

    return (
        <main className="bg-base-100 drawer lg:drawer-open">
            <Menu />
            <br />
            <div className="drawer-content">
                <section className="container mx-auto p-4 alinhamentoMenu2">
                    <img className="h-10 w-10" fill="none" viewBox="0 0 34 34" src={Cash} />
                    <h1 className="text-3xl font-bold">Financeiro</h1>
                </section>
                <section className="container mx-auto p-4 alinhamentoCards">
                    <Card title="Valor Vendido: " textoExibir={"R$ " + (valorTotalVendasFiltradas).toFixed(2)} />
                    <Card title="Valor Despesas:" textoExibir={"R$ " + (valorTotalDespesasFiltradas).toFixed(2)} />
                    <Card title="Balanço Total:" textoExibir={"R$ " + (valorTotalVendasFiltradas - valorTotalDespesasFiltradas).toFixed(2)} />
                </section>
                <br />
                <br />
                <section className="container mx-auto p-4 shadow-xl alinhamentoMenu2">
                    <ModalIncluir />
                    <div className="flex space-x-4">
                        <FiltroInput onFiltroChange={handleFiltroChange}/>
                    </div>
                    <div className="flex space-x-4">
                        <FiltrarData onFiltrarDataChange={handleFiltroDataChange} />
                    </div>
                </section>
                <br />
                <section className="container mx-auto p-4 shadow-xl overflow-x-auto" >
                    <h3 className="text-2xl font-bold corTexto">Finanças</h3>
                    <br />
                    <TabelaFinancas dados={financeiro} filtroData={filtroData} />
                </section>
            </div>
        </main>
    );
}

export default Financeiro;
