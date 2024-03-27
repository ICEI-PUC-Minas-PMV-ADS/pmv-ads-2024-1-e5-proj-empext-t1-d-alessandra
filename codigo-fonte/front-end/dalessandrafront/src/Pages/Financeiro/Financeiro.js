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
function Financeiro() {

    const [financeiro, setFinanceiro] = useState([])
    const [vendas, setVendas] = useState([])
    const [valorVendas, setValorVendas] = useState(0)
    const [valorFinanceiro, setValorFinanceiro] = useState(0)
    const [filtro, setFiltro] = useState('');
    const [mes, setMes] = useState('');
    const [ano, setAno] = useState('');

    useEffect(() => {
        const dataAtual = new Date();
        const mesAtual = dataAtual.toLocaleString('default', { month: 'long' });
        const anoAtual = dataAtual.getFullYear();
        setMes(mesAtual);
        setAno(anoAtual);
        obterFinanceiroPorMesEAno(mesAtual, anoAtual);
        obterFinanceiro()
        obterVendas()
    }, [])

    useEffect(() => {
        obterValorTotal();
        obterValorVendas();
    }, [financeiro, vendas]);


    const handleFiltroChange = (filtro) => {
        setFiltro(filtro);
    };

    const handleFiltrar = () => {
        if (mes && ano) {
            if (mes === "Todos" && ano === "Todos") {
                obterFinanceiro();
            } else {
                obterFinanceiroPorMesEAno(mes, ano);
            }
        } else {
            alert("Por favor, selecione o mês e o ano.");
        }
    };

    function obterFinanceiroPorMesEAno(mes, ano) {
        const headers = { "Content-Type": "application/json" };
        axios.get(`${config.URL}financeiro/filtro?mes=${mes}&ano=${ano}`, { headers })
            .then((response) => {
                const financeiroOrdenado = response.data.sort((a, b) => new Date(b.data) - new Date(a.data));
                setFinanceiro(financeiroOrdenado);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    function obterFinanceiro() {
        const headers = { "Content-Type": "application/json" }
        axios.get(config.URL + 'financeiro', { headers })
            .then((response) => {
                const financeiroOrdenado = response.data.sort((a, b) => new Date(b.data) - new Date(a.data));
                setFinanceiro(financeiroOrdenado);
            })
            .catch((error) => {
                console.log(error)
            })
    }

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
                    <Card title="Valor Vendido: " textoExibir={"R$ " + (valorVendas || 'Carregando...')} />
                    <Card title="Valor Despesas:" textoExibir={"R$ " + (valorFinanceiro || 'Carregando...')} />
                    <Card title="Balanço Total:" textoExibir={"R$ " + (valorVendas - valorFinanceiro || 'Carregando...')} />

                </section>
                <br></br>
                <br></br>
                <section className="container mx-auto p-4 shadow-xl alinhamentoMenu2">
                    <ModalIncluir />
                    <div className="flex space-x-4">
                        <select className="select select-ghost w-full max-w-xs" value={mes} onChange={(e) => setMes(e.target.value)}>
                            <option value="Todos">Todos</option>
                            <option value={1}>Janeiro</option>
                            <option value={2}>Fevereiro</option>
                            <option value={3}>Março</option>
                            <option value={4}>Abril</option>
                            <option value={5}>Maio</option>
                            <option value={6}>Junho</option>
                            <option value={7}>Julho</option>
                            <option value={8}>Agosto</option>
                            <option value={9}>Setembro</option>
                            <option value={10}>Outubro</option>
                            <option value={11}>Novembro</option>
                            <option value={12}>Dezembro</option>
                        </select>
                        <select className="select select-ghost w-full max-w-xs" value={ano} onChange={(e) => setAno(e.target.value)}>
                            <option value="">Selecione o ano</option>
                            <option value="Todos">Todos</option>
                            {Array.from({ length: 10 }, (v, i) => new Date().getFullYear() - i).map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                        <button className=" btn btn-success" onClick={handleFiltrar}>Filtrar</button>
                    </div>
                    <Filtro onFiltroChange={handleFiltroChange} />
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

} export default Financeiro;