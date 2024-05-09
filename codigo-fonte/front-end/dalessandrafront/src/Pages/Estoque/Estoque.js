
import axios from "axios";
import React from "react";
import "../../Pages/estilo/estoque.css";
import config from "../../config/config";
import { useEffect, useState } from "react";
import { Dropdown } from 'primereact/dropdown'
import Card from "../../Componentes/Card/Card";
import Menu from "../../Componentes/Menu/Menu";
import LogoInvetario from "../../img/warehouse.png";
import Tabela from "../../Componentes/Tabela/TabelaEstoque/Tabela";
import Filtro from "../../Componentes/Tabela/TabelaEstoque/Filtro";
import ModalAdicionar from "../../Componentes/Modal/ModiasEstoque/modalAdcionar";
import{formatarParaReal} from"../../Componentes/Utils/utils"; 

function Estoque(){

    const [estoque, setEstoque] = useState([])
    const [quantidadeEstoque, setQuantidadeEstoque] = useState(0)
    const [valorEstoque, setValorEstoque] = useState(0)
    const [filtro, setFiltro] = useState('');
    const [statusFiltro,statusSet]= useState('Nivel Critico')
    const [paginaAtua,setPaginaAtual]= useState(0)
    const [numerosPaginas,setNumerosPaginas]=useState(0)
    const [nivelCriticoEbaixo,setNivel]=useState(false)

    const options = [
        { label: 'Todos', value: false },
        { label: 'Nível Crítico', value: true }
    ];
    const [selectedOption, setSelectedOption] = useState(null);
   
    useEffect(() => {
        obeterEstoque(paginaAtua,filtro)
        obterQuantidadeItemEstoque()
        obterValorEstoque()
    },[paginaAtua,filtro, nivelCriticoEbaixo])
    
    const handleFiltroChange = (filtro) => {
        setFiltro(filtro);
        obeterEstoque(paginaAtua,filtro,statusFiltro)
    };
    
    async function obeterEstoque(paginaAtua,nomeProduto){
        const headers = { "Content-Type": "application/json" };
        try {
            if (!nivelCriticoEbaixo) {
                const response = await axios.get(`${config.URL}estoque?pagina=${paginaAtua}&tamanhoPagina=10&nomeProdudo=${nomeProduto}`, { headers });
                setEstoque(response.data.content);
                setNumerosPaginas(response.data.totalPages);
            } else {
                const paginaMinha = paginaAtua === undefined ? 0 : paginaAtua;
                const response = await axios.get(`${config.URL}estoque/recuperarNivelCriticoESemEstoque?pagina=${paginaMinha}&tamanhoPagina=10`, { headers });
                setEstoque(response.data.content);
                setNumerosPaginas(response.data.totalPages);
                setPaginaAtual(0);
            }
        } catch (error) {
            console.error(error);
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
    async function buscaNivelcritico (validador){
        console.log('Busca Nível Crítico:', validador);
        setNivel(validador)
        if(validador==true){
            await obeterEstoque(0, filtro, statusFiltro)
            setPaginaAtual(0)
        }
        else{
            setTimeout(() => {
                window.location.reload(); 
              }, 1000)
        }
    }

    const handleOptionChange = (e) => {
        setSelectedOption(e.value);
        buscaNivelcritico(e.value);
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
                <Card title="Valor total do estoque:" textoExibir={formatarParaReal(valorEstoque)}/>
            </section>
            <br></br>
            <br></br>
            <section className="container mx-auto p-4 shadow-xl alinhamentoMenu2">
                <label class="form-control w-full max-w-xs">
                        <div class="label"><span class="label-text">Nome produto:</span></div>
                        <Filtro onFiltroChange={handleFiltroChange}/>
                </label>
                <br></br>
                <label class="form-control w-full max-w-xs">
                    <div class="label"><span class="label-text">Filtro status:</span></div>
                    <Dropdown value={selectedOption} onChange={handleOptionChange} options={options} optionLabel="label" 
                        placeholder="Todos" className="w-full md:w-14rem mb-2 custom-dropdown"showClear 
                    />            
                </label>
        
                <label class="form-control w-full max-w-xs">
                    <div class="label" color={"#fff"}><span class="label-text text-bg-neutral-content" ><br></br></span></div>
                    <ModalAdicionar/>    
                </label>
            </section>
            <br></br>
            <section className="container mx-auto p-4 shadow-xl overflow-x-auto" > 
                <h3 className="text-2xl font-bold corTexto">Itens do Estoque</h3>
                <br></br>
                <Tabela dados={estoque} filtro={filtro}/>
                <div className="join">
                    <button className="join-item btn" onClick={handlePaginaAnterior}>«</button>
                    <button className="join-item btn">Pagina {paginaAtua} de {numerosPaginas}</button>
                    <button className="join-item btn" onClick={handleProximaPagina}>»</button>
                </div>
                <br></br>          
            </section>
            </div>
        </main>
    )

}export default Estoque;