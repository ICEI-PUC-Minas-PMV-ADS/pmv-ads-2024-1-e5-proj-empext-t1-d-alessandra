import axios from "axios";
import React, { useEffect, useState } from "react";
import config from "../../config/config";
import Menu from "../../Componentes/Menu/Menu";
import LogoVenda from "../../img/caixa-eletronico.png";
import TabelaMaisVendidos from "./components/tabelaMaisVendidos";

function MaisVendidos() {
    const [itens, setItens] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        const headers = { "Content-Type": "application/json" };
        try {
            const response = await axios.get(`${config.URL}item/mais-vendidos`, { headers });
            setItens(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    
    return (
        <main className="bg-base-100 drawer lg:drawer-open">
        <Menu />
            <br />
            <div className="drawer-content">
                <section className="container mx-auto p-4 alinhamentoMenu2">
                    <img class="h-10 w-10" fill="none" viewBox="0 0 34 34" src={LogoVenda} alt="Logo Venda" />
                    <h1 className="text-3xl font-bold">Itens Mais Vendidos</h1>
                </section>
                <section className="container mx-auto p-4 shadow-xl overflow-x-auto" >
                    <div className="drawer-content">
                        <div >
                            <input
                                type="date"
                                //value={filtroDataVenda}
                                //onChange={changeDate}
                                placeholder="Data da Compra"
                                className="input input-bordered input-success w-full max-w-xs"
                            />
                        </div>
                        <div></div>
                    </div>
                </section>
                <br />
                <section className="container mx-auto p-4 shadow-xl overflow-x-auto" >
                    {/* <div className="flex justify-between items-center">
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
                    </div> */}
                    <br />
                    {/* <div className="join">
                        <button className="join-item btn" onClick={backPage}>«</button>
                        <button className="join-item btn">Página {paginaAtual + 1}</button>
                        <button className="join-item btn" onClick={nextPage}>»</button>
                    </div> */}
                    <br />
                    { <TabelaMaisVendidos dados={itens} /> }
                </section>
            </div>
    </main>
    )
}

export default MaisVendidos;