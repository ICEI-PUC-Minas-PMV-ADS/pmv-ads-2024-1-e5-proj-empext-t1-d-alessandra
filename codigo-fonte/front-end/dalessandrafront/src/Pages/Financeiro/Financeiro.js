import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../Pages/estilo/financeiro.css";
import TabelaFinancas from "../../Componentes/Tabela/TabelaFinanceiro/tabelaFinancas";
import config from "../../config/config";
import Card from "../../Componentes/Card/Card";
import Menu from "../../Componentes/Menu/Menu";
import Cash from "../../img/cash.png";
import ModalIncluir from "../../Componentes/Modal/ModaisFinanças/modalncluirDespesa";
import FiltrarData from "../../Componentes/Tabela/TabelaFinanceiro/FiltrarData";
import GraficoBarraEmpilhada from "../../Componentes/Grafico/graficoBarraEmpilhada";
import { formatarParaReal } from "../../Componentes/Utils/utils";
import TabelaAnaliseVendasVsSaidas from "../../Componentes/Tabela/TabelaFinanceiro/TabelaAnaliseVendasVsSaidas";
import GraficoBarraHorizontal from "../../Componentes/Grafico/graficoBarraHosrizonta";
import { MeterGroup } from 'primereact/metergroup';
function Financeiro() {
    const [financeiro, setFinanceiro] = useState([]);
    const [venda, setVenda] = useState([]);
    const [valorVendas, setValorVendas] = useState(0);
    const [valorFinanceiro, setValorFinanceiro] = useState(0);
    const [valorTotalVendasFiltradas, setValorTotalVendasFiltradas] = useState(0);
    const [filtroData, setFiltroData] = useState({ dataInicio: '', dataFim: '' });
    const [analiseVendaSaida,setAnaliseVendaSaida]=useState([])
    const [anoRelatorio,setAnoRelatorio]= useState(2024)
    const [relatorioMetodoVendidos,setMetodosVendidos]= useState([])
    const handleFiltroDataChange = (filtroData) => {
        setFiltroData(filtroData);
    };

    useEffect(() => {
        obterFinanceiro();
        obterVenda();
        obterValorTotal();
        obterValorVendas();
        obterAnaliseSaidaeEntradas();
        obterRelatorioMetodosMaisVendindos()
    }, [filtroData]);

    const obterRelatorioMetodosMaisVendindos = () => {
        const headers = { "Content-Type": "application/json" };
        axios.get(config.URL + 'analiseFinanceiro/relatorioMetodosPagamento/'+anoRelatorio, { headers })
            .then((response) => {
                setMetodosVendidos(response.data);
                console.log("test"+response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const obterAnaliseSaidaeEntradas = () => {
        const headers = { "Content-Type": "application/json" };
        axios.get(config.URL + 'analiseFinanceiro/relatorioDeEntradasVsSaidas/'+anoRelatorio, { headers })
            .then((response) => {
                console.log(response.data)
                setAnaliseVendaSaida(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

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
                const vendasComDataFormatada = response.data.map(item => ({
                    ...item,
                    dtVenda: new Date(item.dtVenda).toLocaleDateString('pt-BR', { timeZone: 'UTC' })
                }));
                const vendasSemAN = vendasComDataFormatada.filter(item => item.formaPagto !== "AN");
                setVenda(vendasSemAN);
                aplicarFiltroData(vendasSemAN);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const aplicarFiltroData = (vendas) => {
        const vendasFiltradas = vendas.filter(item => {
            if (!filtroData.dataInicio && !filtroData.dataFim) return true;
            const [dia, mes, ano] = item.dtVenda.split('/');
            const dataVenda = new Date(`${ano}-${mes}-${dia}`);
            const dataInicio = filtroData.dataInicio ? new Date(filtroData.dataInicio) : null;
            const dataFim = filtroData.dataFim ? new Date(filtroData.dataFim) : null;
            return (
                (!dataInicio || dataVenda >= dataInicio) &&
                (!dataFim || dataVenda <= dataFim)
            );
        });

        const totalVendasFiltradas = vendasFiltradas.reduce((acc, curr) => acc + parseFloat(curr.vlTotal), 0);
        setValorTotalVendasFiltradas(totalVendasFiltradas);
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
                const totalVendas = response.data
                    .filter(venda => venda.formaPagto !== "AN")
                    .reduce((acc, curr) => acc + parseFloat(curr.vlTotal), 0);
                setValorVendas(totalVendas);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const valorTotalDespesasFiltradas = financeiro.filter(item => {
        if (!filtroData.dataInicio && !filtroData.dataFim) return true;
        const [dia, mes, ano] = item.dataDespesa.split('/');
        const dataDespesa = new Date(`${ano}-${mes}-${dia}`);
        const dataInicio = filtroData.dataInicio ? new Date(filtroData.dataInicio) : null;
        const dataFim = filtroData.dataFim ? new Date(filtroData.dataFim) : null;
        return (
            (!dataInicio || dataDespesa >= dataInicio) &&
            (!dataFim || dataDespesa <= dataFim)
        );
    }).reduce((acc, curr) => acc + parseFloat(curr.valorDespesa), 0);

    useEffect(() => {
        aplicarFiltroData(venda);
    }, [filtroData, venda]);

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
                    <Card title="Valor Vendido: " textoExibir={formatarParaReal(valorTotalVendasFiltradas)} />
                    <Card title="Valor Despesas:" textoExibir={formatarParaReal(valorTotalDespesasFiltradas)} />
                    <Card title="Balanço Total:" textoExibir={formatarParaReal(valorTotalVendasFiltradas - valorTotalDespesasFiltradas)} />
                </section>
                <br />
                <br />
                <section className="container mx-auto p-4 shadow-xl alinhamentoMenu2">
                    <ModalIncluir />
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
            <section className="container mx-auto p-4 shadow-xl overflow-x-auto" >
                    <h3 className="text-2xl font-bold corTexto">Relatorio Vendas X Despesas</h3>
                    <br />
                    <GraficoBarraEmpilhada dados={analiseVendaSaida} />
                    <TabelaAnaliseVendasVsSaidas dados={analiseVendaSaida}/>
                   
            </section>
            <section className="container mx-auto p-4 shadow-xl overflow-x-auto" >
                    <h3 className="text-2xl font-bold corTexto">Analise de metodos de pagamentos mais utilizados</h3>
                    <br />
                    <GraficoBarraHorizontal dados={relatorioMetodoVendidos} />
                                     
            </section>
            </div>
            
        </main>
    );
}

export default Financeiro;
