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

function Financeiro() {

    const [financeiro, setFinanceiro] = useState([]);
    const [vendas, setVendas] = useState([]);
    const [valorVendas, setValorVendas] = useState(0);
    const [valorFinanceiro, setValorFinanceiro] = useState(0);
    const [filtro, setFiltro] = useState('');
    const [mes, setMes] = useState('');
    const [ano, setAno] = useState('');
    const mesesDoAno = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];


    useEffect(() => {
        const dataAtual = new Date();
        const mesAtual = dataAtual.getMonth() + 1;
        const anoAtual = dataAtual.getFullYear();
        setMes(mesAtual);
        setAno(anoAtual);
        obterFinanceiroPorMesEAno(mesAtual, anoAtual);
        obterVendas();
    }, []);

    useEffect(() => {
        obterValorTotal();
        obterValorVendas();
    }, [financeiro, vendas]);

    const handleFiltroChange = (filtro) => {
        setFiltro(filtro);
    };

    const handleFiltrar = () => {
        if (mes && ano) {
            obterFinanceiroPorMesEAno(mes, ano);
        } else {
            alert("Por favor, selecione o mês e o ano.");
        }
    };

    function obterFinanceiroPorMesEAno(mes, ano) {
        const headers = { "Content-Type": "application/json" };
        axios.get(`${config.URL}financeiro/filtro?mes=${mes}&ano=${ano}`, { headers })
            .then((response) => {
                console.log("Dados brutos:", response.data);
                const financeiroOrdenado = response.data.sort((a, b) => new Date(b.dataDespesa) - new Date(a.dataDespesa));
                console.log("Financeiro Ordenado:", financeiroOrdenado);
                setFinanceiro(financeiroOrdenado);
                calcularValorDespesasMensais(financeiroOrdenado);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function calcularValorDespesasMensais(financeiroFiltrado) {
        const despesasMensais = financeiroFiltrado.reduce((total, despesa) => {
            const dataDespesa = new Date(despesa.dataDespesa);
            const mesDespesa = dataDespesa.getMonth() + 1; // Adiciona 1 porque os meses vão de 0 a 11
            if (mesDespesa === parseInt(mes, 10)) {
                return total + despesa.valorDespesa;
            } else {
                return total;
            }
        }, 0);
        setValorFinanceiro(despesasMensais);
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
                    <Card title="Valor Vendido: " textoExibir={"R$ " + (valorVendas)} />
                    <Card title="Valor Despesas:" textoExibir={"R$ " + (valorFinanceiro)} />
                    <Card title="Balanço Total:" textoExibir={"R$ " + (valorVendas - valorFinanceiro)} />
                </section>
                <br></br>
                <br></br>
                <section className="container mx-auto p-4 shadow-xl alinhamentoMenu2">
                    <ModalIncluir />
                    <div className="flex space-x-4">
                        <select className="select select-ghost w-full max-w-xs" value={mes} onChange={(e) => setMes(e.target.value)}>
                            <option value="">Selecione o mês</option>
                            <option value="Todos">Todos</option>
                            {mesesDoAno.map((month, index) => (
                                <option key={index} value={index + 1}>{month}</option>
                            ))}
                        </select>
                        <select className="select select-ghost w-full max-w-xs" value={ano} onChange={(e) => setAno(e.target.value)}>
                            <option value="">Selecione o ano</option>
                            <option value="Todos">Todos</option>
                            {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                                <option key={year} value={year}>{year}</option>
                            ))}
                        </select>
                        <button className="btn btn-success" onClick={handleFiltrar}>Filtrar</button>
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
