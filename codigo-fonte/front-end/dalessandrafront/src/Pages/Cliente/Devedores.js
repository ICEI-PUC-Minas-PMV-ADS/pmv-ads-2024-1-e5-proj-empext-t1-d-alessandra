
import axios from "axios"
import config from "../../config/config"
import { useEffect, useState } from "react"
import Menu from "../../Componentes/Menu/Menu"
import LogoDevedor from "../../img/perceber.png"
import TabelaDevedores from "../../Componentes/Tabela/TabelaDevedores/TabelaDevedores"
function Devedores(){
     
    const [clientesDevedores,setClientesDevedores]= useState([])
    const [filtroCliente, setFiltroCliente] = useState('');
    const [filtroNome, setFiltroNome] = useState('');
    const [filtroDataVenda, setFiltroDataVenda] = useState('');

    useEffect(()=>{
        obeterDevedores()
    },[])
    function obeterDevedores(){
        axios.get(`${config.URL}devedores/listarClientesDevedores`)
        .then((response)=>{
            setClientesDevedores(response.data)
           
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    return(
        <main className="bg-base-100 drawer lg:drawer-open" >
            <Menu/>
            <br></br>
            <div className="drawer-content">
                <section className="container mx-auto p-4 alinhamentoMenu2"> 
                    <img  class="h-10 w-10" fill="none" viewBox="0 0 34 34" src={LogoDevedor}/>
                    <h1 className="text-3xl font-bold">Clientes inadiplentes</h1>
                </section>
                <section className="container mx-auto p-4 shadow-xl alinhamentoMenu2">
                    <label class="form-control w-full max-w-xs">
                        <div class="label"><span class="label-text">Nome do cliente:</span></div>
                        <input
                            type="text"
                            value={filtroNome}
                            onChange={(e) => setFiltroNome(e.target.value)}
                            placeholder="Digite..."
                            className="input input-bordered input-success w-full max-w-xs"
                        />
                    </label>
                    <label class="form-control w-full max-w-xs">
                        <div class="label"><span class="label-text">Cod.Venda:</span></div> 
                        <input
                            type="text"
                            value={filtroCliente}
                            onChange={(e) => setFiltroCliente(e.target.value)}
                            placeholder="Digite..."
                            className="input input-bordered input-success w-full max-w-xs"
                        />
                    </label>
                    <label class="form-control w-full max-w-xs">
                        <div class="label"><span class="label-text">Data da compra:</span></div>
                        <input
                            type="date"
                            value={filtroDataVenda}
                            onChange={(e) => setFiltroDataVenda(e.target.value)}
                            placeholder="Data da Compra"
                            className="input input-bordered input-success w-full max-w-xs"
                        />
                    </label>
                </section>
                <section className="container mx-auto p-4 shadow-xl overflow-x-auto" > 
                    <h3 className="text-2xl font-bold corTexto">Listagem de clientes</h3>
                    <br></br>
                    <TabelaDevedores dados={clientesDevedores} filtroNome={filtroNome} filtroCodVenda={filtroCliente} filtroDataVenda={filtroDataVenda}/>
                </section>
            </div>
        </main>
    )

}export default Devedores