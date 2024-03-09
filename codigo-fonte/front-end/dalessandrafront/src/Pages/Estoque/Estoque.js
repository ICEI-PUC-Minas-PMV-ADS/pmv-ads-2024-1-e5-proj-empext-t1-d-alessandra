
import axios from "axios";
import React from "react";
import config from "../../config/config";
import Menu from "../../Componentes/Menu/Menu";
import Card from "../../Componentes/Card/Card";
//import "../../estilo/estilo.css";
import "./estoque.css";
import { useEffect, useState } from "react";



function Estoque(){

    const [estoque, setEstoque] = useState([])
    const [quantidadeEstoque, setQuantidadeEstoque] = useState(0)
    const [valorEstoque, setValorEstoque] = useState(0)
    useEffect(() => {
        obeterEstoque()
        obterQuantidadeItemEstoque()
        obterValorEstoque()
       },[])
    
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
        <main>
            <Menu/>
            <section className="container mx-auto p-4 alinhamentoCards">
                <Card title="Quantidade de itens cadastrados: " textoExibir={quantidadeEstoque}/>
                <Card title="Valor total do estoque:" textoExibir={"R$ "+valorEstoque}/>
            </section>
        </main>
    )

}export default Estoque;