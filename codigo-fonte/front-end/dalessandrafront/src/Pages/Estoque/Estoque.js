
import axios from "axios";
import React from "react";
import config from "../../config/config";
import Menu from "../../Componentes/Menu/Menu";
import Card from "../../Componentes/Card/Card";
import Tabela from "../../Componentes/Tabela/Tabela";
import ModalAdicionar from "../../Componentes/Modal/ModiasEstoque/modalAdcionar";
import "../../Pages/estilo/estoque.css";
import Filtro from "../../Componentes/Tabela/Filtro";
import LogoInvetario from "../../img/warehouse.png";
import { useEffect, useState } from "react";



function Estoque(){

    const [estoque, setEstoque] = useState([])
    const [quantidadeEstoque, setQuantidadeEstoque] = useState(0)
    const [valorEstoque, setValorEstoque] = useState(0)
    const [filtro, setFiltro] = useState('');
    useEffect(() => {
        obeterEstoque()
        obterQuantidadeItemEstoque()
        obterValorEstoque()
       },[])
    
       const handleFiltroChange = (filtro) => {
        setFiltro(filtro);
        };
    function obeterEstoque(){
        const headers ={"Content-Type":"application/json"}
        axios.get(config.URL+'estoque',{headers})
             .then((response) => {
                setEstoque(response.data)
                })
            .catch((error) => {
                    console.log(error)
                })
     }
     function obterQuantidadeItemEstoque(){
        const headers ={"Content-Type":"application/json"}
        axios.get(config.URL+'estoque/quantidadeDeItemCadastrados',{headers})
             .then((response) => {
                setQuantidadeEstoque(response.data)
                })
            .catch((error) => {
                    console.log(error)
                })
     }
     function obterValorEstoque(){
        const headers ={"Content-Type":"application/json"}
        axios.get(config.URL+'estoque/valorEstoqueComprado',{headers})
             .then((response) => {
                setValorEstoque(response.data)
                })
            .catch((error) => {
                    console.log(error)
                })
     }
    return(
        <main >
            <Menu/>
            <br></br>
            <section className="container mx-auto p-4 alinhamentoMenu2">
            <img  class="h-10 w-10" fill="none" viewBox="0 0 34 34" src={LogoInvetario}/>
            <h1 className="text-3xl font-bold">Estoque</h1>
            </section>
            <section className="container mx-auto p-4 alinhamentoCards">
                <Card title="Total de Itens: " textoExibir={quantidadeEstoque}/>
                <Card title="Valor total do estoque:" textoExibir={"R$ "+valorEstoque}/>
            </section>
            <br></br>
            <br></br>
            <section className="container mx-auto p-4 shadow-xl alinhamentoMenu2">
                <ModalAdicionar/>
                <Filtro onFiltroChange={handleFiltroChange}/>
            </section>
            <br></br>
            <section className="container mx-auto p-4 shadow-xl overflow-x-auto" > 
                <h3 className="text-2xl font-bold corTexto">Itens do Estoque</h3>
                <br></br>
                <Tabela dados={estoque} filtro={filtro}/>
            </section>
        </main>
    )

}export default Estoque;