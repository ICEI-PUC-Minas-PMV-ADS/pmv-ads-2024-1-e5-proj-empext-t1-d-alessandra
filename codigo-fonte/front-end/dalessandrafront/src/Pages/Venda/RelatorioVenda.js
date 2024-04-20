import axios from "axios";
import React from "react";
import Menu from "../../Componentes/Menu/Menu";
import LogoVenda from "../../img/caixa-eletronico.png";
import Graphic from "./componentes/grafico";
import config from "../../config/config";
import { useEffect, useState } from "react";

function RelatorioVenda() {
    const [loading, setLoading] = React.useState(false);

    async function loadData() {
        const headers = { "Content-Type": "application/json" };
        setLoading(true);
        try{
            const response = await axios.get(`${config.URL}venda/relatorio-dia`, { headers });
        } catch (error) {
            console.error(error);
        }


    }


    return(
        <main className="bg-base-100 drawer lg:drawer-open">
            <Menu/>
            <br></br>
            <div className="drawer-content">
                <section className="container mx-auto p-4 alinhamentoMenu2">
                    <img  class="h-10 w-10" fill="none" viewBox="0 0 34 34" src={LogoVenda}/>
                    <h1 className="text-3xl font-bold">Relatório Venda</h1>
                </section>
                <section className="container mx-auto p-4 alinhamentoCards">
                    <Graphic/>
                </section>
            </div>
        </main>
    )

}export default RelatorioVenda;