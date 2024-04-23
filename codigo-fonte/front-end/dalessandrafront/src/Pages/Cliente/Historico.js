import axios from "axios";
import config from "../../config/config";
import { useEffect,useState } from "react";
import Menu from "../../Componentes/Menu/Menu";
import ListaHistorico from "../../Componentes/Lista/ListaHistorico/ListaHistorico";


function Historico(){
    const[dados,setDados]= useState([])
    useEffect(()=>{
        obterClientes()
    },[])
    function obterClientes(){
        axios.get(`${config.URL}cliente/listaDeClientesComNomeEmail`)
        .then((response)=>{
            setDados(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    return(
        <main className="bg-base-100 drawer lg:drawer-open" >
            <Menu/>
            <br></br>
            <div className="drawer-content">
                <section className="container mx-auto p-4 alinhamentoMenu2"> 
                    
                    <h1 className="text-3xl font-bold">Clientes inadiplentes</h1>
                </section>
            
                
                <section className="container mx-auto p-4 shadow-xl overflow-x-auto" > 
                    <h3 className="text-2xl font-bold corTexto">Listagem de clientes</h3>
                    <br></br>
                    <ListaHistorico dados={dados}/>
                </section>
            </div>
        </main>
    )
}export default Historico;