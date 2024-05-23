import axios from "axios";
import React, { useEffect, useState } from "react";
import config from "../../config/config";
import Menu from "../../Componentes/Menu/Menu";
import LogoVenda from "../../img/caixa-eletronico.png";
import TabelaMaisVendidos from "./components/tabelaMaisVendidos";
import { Paginator } from 'primereact/paginator';

function MaisVendidos() {
    const [itens, setItens] = useState([]);
    const [first, setFirst] = useState(0);
    const [totalItens, setTotalItens] = useState(0);

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        const headers = { "Content-Type": "application/json" };
        try {
            const response = await axios.get(`${config.URL}item/mais-vendidos`, { headers });
            setItens(response.data.content);
        } catch (error) {
            console.error(error);
        }
    }

    const onPageChange = async (event) => {
        setFirst(event.first);
        const headers ={"Content-Type":"application/json"}
        try{
            const response = await axios.get(`${config.URL}venda/mais-vendidos?page=${event.page}&size=${5}`, { headers });
            setItens(response.data?.content);
            setTotalItens(response.data?.totalElements);
        } catch(error){
            console.log(error)
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
                <br />
                <section className="container mx-auto p-4 shadow-xl overflow-x-auto" >
                    <Paginator 
                        first={first} 
                        rows={5} 
                        totalRecords={totalItens} 
                        onPageChange={onPageChange} 
                        template={{ layout: 'PrevPageLink CurrentPageReport NextPageLink' }} 
                    />
                    <br />
                    { <TabelaMaisVendidos dados={itens} /> }
                </section>
            </div>
    </main>
    )
}

export default MaisVendidos;