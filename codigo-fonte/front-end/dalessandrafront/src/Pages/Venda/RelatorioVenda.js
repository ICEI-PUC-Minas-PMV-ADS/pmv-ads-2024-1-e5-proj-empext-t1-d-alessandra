import axios from "axios";
import React, { useEffect, useState } from "react";
import Menu from "../../Componentes/Menu/Menu";
import LogoVenda from "../../img/caixa-eletronico.png";
import Graphic from "./components/grafico";
import config from "../../config/config";
import Tabela from "./components/tabela";

function RelatorioVenda() {
    const [loading, setLoading] = React.useState(false);
    const [venda, setVenda] = useState([]);
    const [numerosPaginas, setNumerosPaginas] = useState(0);
    const [paginaAtual, setPaginaAtual] = useState(0);
    const [filtroDataVenda, setFiltroDataVenda] = useState(obterDataAtual());
    const [dadosVenda, setDadosVenda] = useState([]);

    function obterDataAtual() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); 
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    useEffect(() => {
        loadData();
    }, [paginaAtual, filtroDataVenda]);

    const changeDate = (e) => {
        setFiltroDataVenda(e.target.value);
        loadData();
    }

    async function loadData() {
        const headers = { "Content-Type": "application/json" };
        setLoading(true);
        try {
            const response = await axios.get(`${config.URL}venda/relatorio-dia?dtVenda=${filtroDataVenda}&page=${paginaAtual}&size=${10}`, { headers });
            setVenda(response.data.content);
            setNumerosPaginas(response.data.totalPages);
            setDadosVenda(response.data.content);
        } catch (error) {
            console.error(error);
        }
    }

    const nextPage = () => {
        const page = paginaAtual + 1;
        setPaginaAtual(page);
        loadData();
    }

    function backPage() {
        if (paginaAtual > 0) {
            const page = paginaAtual - 1;
            setPaginaAtual(page);
            loadData();
        }
    }

    return (
        <main className="bg-base-100 drawer lg:drawer-open">
            <Menu />
            <br />
            <div className="drawer-content">
                <section className="container mx-auto p-4 alinhamentoMenu2">
                    <img class="h-10 w-10" fill="none" viewBox="0 0 34 34" src={LogoVenda} alt="Logo Venda" />
                    <h1 className="text-3xl font-bold">Relatório Venda</h1>
                </section>
                <div>
                    <section className="container mx-auto p-4 overflow-x-auto" >
                        <Graphic dadosVenda={dadosVenda}/>
                    </section>
                </div>
                <br />
                <section className="container mx-auto p-4 shadow-xl overflow-x-auto" >
                    <div className="flex justify-between items-center">
                        <h3 className="text-2xl font-bold corTexto">Vendas do dia</h3>
                        <div className="drawer-content">
                            <input
                                type="date"
                                value={filtroDataVenda}
                                onChange={changeDate}
                                placeholder="Data da Compra"
                                className="input input-bordered input-success w-full max-w-xs"
                            />
                        </div>
                    </div>
                    <br />
                    <div className="join">
                        <button className="join-item btn" onClick={backPage}>«</button>
                        <button className="join-item btn">Página {paginaAtual + 1}</button>
                        <button className="join-item btn" onClick={nextPage}>»</button>
                    </div>
                    <br />
                    <Tabela dados={venda} />
                </section>
            </div>
        </main>
    )
}

export default RelatorioVenda;
