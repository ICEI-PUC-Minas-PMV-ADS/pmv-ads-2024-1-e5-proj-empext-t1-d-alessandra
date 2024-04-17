
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
    const [statusFiltro,statusSet]= useState('Nivel Critico')
    const [paginaAtua,setPaginaAtual]= useState(0)
    const [numerosPaginas,setNumerosPaginas]=useState(0)
    const [nivelCriticoEbaixo,setNivel]=useState(false)
    useEffect(() => {
        obeterEstoque(paginaAtua,filtro)
        obterQuantidadeItemEstoque()
        obterValorEstoque()
      //  buscaNivelcritico()
    },[paginaAtua,filtro, nivelCriticoEbaixo])
    const handleFiltroChange = (filtro) => {
        setFiltro(filtro);
        obeterEstoque(paginaAtua,filtro,statusFiltro)
    };
    const handlestatus = (statusFiltro) => {
        statusSet(statusFiltro);
        obeterEstoque(paginaAtua,filtro,statusFiltro,statusFiltro)
    };
    async function obeterEstoque(paginaAtua,nomeProduto){
        const headers ={"Content-Type":"application/json"}
        if(nivelCriticoEbaixo==false ){
            axios.get(`${config.URL}estoque?pagina=${paginaAtua}&tamanhoPagina=10&nomeProdudo=${nomeProduto}`,{headers})
                 .then((response) => {
                    setEstoque(response.data.content)
                    setNumerosPaginas(response.data.totalPages)
                    })
                .catch((error) => {
                        console.log(error)
                    })
        }
        else{
            setNivel(true)
            let paginaMinha
            if(paginaAtua==undefined){
                paginaMinha=0
            }
            else{paginaMinha=paginaAtua}
            axios.get(`${config.URL}estoque/recuperarNivelCriticoESemEstoque?pagina=${paginaMinha}&tamanhoPagina=10`,{headers})
            .then((response) => {
               setEstoque(response.data.content)
               setNumerosPaginas(response.data.totalPages)
               setPaginaAtual(0)
              // setTimeout(() => {
                //setAlertVisible(false);
                //window.location.reload(); 
              //}, 1);
               })
           .catch((error) => {
                   console.log(error)
               })
        }
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
    function buscaNivelcritico (validador){
        //console.log(validador)
        console.log('Busca Nível Crítico:', validador);
        setNivel(validador)
        obeterEstoque(0, filtro, statusFiltro)
    }
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
                    <div class="label"><span class="label-text">Status:</span></div>
                    <select id="tipo" name="tipo" onChange={(e)=>{
                         console.log('Valor selecionado:', e.target.value);
                         if (e.target.value === "true") {
                             buscaNivelcritico(true);
                         } else if (e.target.value === "false") {
                             setNivel(false);
                             window.location.reload();
                         
                         }}}className="select select-bordered w-full max-w-xs">        
                            <option value="false">Todos</option>        
                            <option value="true">Nivel Critico/Em falta</option>
                    </select>  
                </label>
               
                <label class="form-control w-full max-w-xs">
                    <div class="label" color={"#fff"}><span class="label-text text-bg-neutral-content" ><br></br></span></div>
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