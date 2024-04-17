
import axios from "axios";
import React from "react";
import "../../Pages/estilo/estoque.css";
import config from "../../config/config";
import { useEffect, useState } from "react";
import Card from "../../Componentes/Card/Card";
import Menu from "../../Componentes/Menu/Menu";
import LogoInvetario from "../../img/warehouse.png";
import Tabela from "../../Componentes/Tabela/TabelaEstoque/Tabela";
import Filtro from "../../Componentes/Tabela/TabelaEstoque/Filtro";
import ModalAdicionar from "../../Componentes/Modal/ModiasEstoque/modalAdcionar";
function Estoque(){

    const [estoque, setEstoque] = useState([])
    const [quantidadeEstoque, setQuantidadeEstoque] = useState(0)
    const [valorEstoque, setValorEstoque] = useState(0)
    const [filtro, setFiltro] = useState('');
    const [statusFiltro,statusSet]= useState('')
    const [paginaAtua,setPaginaAtual]= useState(0)
    const [numerosPaginas,setNumerosPaginas]=useState(0)
    useEffect(() => {
        obeterEstoque(paginaAtua,filtro,statusFiltro)
        obterQuantidadeItemEstoque()
        obterValorEstoque()
    },[paginaAtua])
    const handleFiltroChange = (filtro) => {
        setFiltro(filtro);
        obeterEstoque(paginaAtua,filtro,statusFiltro)
    };
    const handlestatus = (statusFiltro) => {
        statusSet(statusFiltro);
        obeterEstoque(paginaAtua,filtro,statusFiltro,statusFiltro)
    };
    async function obeterEstoque(paginaAtua,nomeProduto,status){
        const headers ={"Content-Type":"application/json"}
        axios.get(`${config.URL}estoque?pagina=${paginaAtua}&tamanhoPagina=10&nomeProdudo=${nomeProduto}&status=${status}`,{headers})
             .then((response) => {
                setEstoque(response.data.content)
                setNumerosPaginas(response.data.totalPages)
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
     const handlePaginaAnterior = () => {
        if (paginaAtua > 0) {
            setPaginaAtual(paginaAtua - 1);
        }
    };

    const handleProximaPagina = () => {
        if (paginaAtua < numerosPaginas - 1) {
            setPaginaAtual(paginaAtua + 1);
        }
    };
    return(
        <main className="bg-base-100 drawer lg:drawer-open" >
            <Menu/>
            <br></br>
            <div className="drawer-content"> 
            <section className="container mx-auto p-4 alinhamentoMenu2">
                <img  class="h-10 w-10" fill="none" viewBox="0 0 34 34" src={LogoInvetario}/>
                <h1 className="text-3xl font-bold">Estoque</h1>
            </section>
            <section className="container mx-auto p-4 alinhamentoCards">
                <Card title="Total de Itens: " textoExibir={quantidadeEstoque}/>
                <Card title="Valor total do estoque:" textoExibir={"R$ "+parseFloat(valorEstoque)}/>
            </section>
            <br></br>
            <br></br>
            <section className="container mx-auto p-4 shadow-xl alinhamentoMenu2">
                <label class="form-control w-full max-w-xs">
                        <div class="label"><span class="label-text">Nome produto:</span></div>
                        <Filtro onFiltroChange={handleFiltroChange}/>
                </label>
                <label class="form-control w-full max-w-xs">
                        <div class="label"><span class="label-text">Nome produto:</span></div>
                        <Filtro onFiltroChange={handlestatus}/>
                </label>
                
               
                <label class="form-control w-full max-w-xs">
                    <div class="label"><span class="label-text">Data da compra:</span></div>
                    <ModalAdicionar/>    
                </label>
            </section>
            <br></br>
            <section className="container mx-auto p-4 shadow-xl overflow-x-auto" > 
                <h3 className="text-2xl font-bold corTexto">Itens do Estoque</h3>
                <div className="join">
                    <button className="join-item btn" onClick={handlePaginaAnterior}>«</button>
                    <button className="join-item btn">Pagina { paginaAtua}</button>
                    <button className="join-item btn" onClick={handleProximaPagina}>»</button>
                </div>
                <br></br>
                <Tabela dados={estoque} filtro={filtro}/>
               
            </section>
            </div>
        </main>
    )

}export default Estoque;