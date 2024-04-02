
import axios from "axios";
import React from "react";
import "../../Pages/estilo/estoque.css";
import config from "../../config/config";
import { useEffect, useState } from "react";
import Menu from "../../Componentes/Menu/Menu";
import LogoInvetario from "../../img/warehouse.png";
import TabelaVenda from "./componentes/tabelaVenda";

function Venda(){
    const [produto, setProduto] = useState("");
    const [itensVenda, setItensVenda] = useState([]);

    const adicionaItem = () => {
        if (produto.trim() !== "") {
            const novoItem = {
                nome: produto,
                codigo: "0001",
                preco: "10"
            };
            setItensVenda([...itensVenda, novoItem]);
            setProduto("");
        }
    }

    return(
        <main className="bg-base-100 drawer lg:drawer-open" >
            <Menu/>

            <div className="drawer-content"> 
            <section className="container mx-auto p-4 alinhamentoMenu2">
                <img  class="h-10 w-10" fill="none" viewBox="0 0 34 34" src={LogoInvetario}/>
                <h1 className="text-3xl font-bold">Vendas</h1>
            </section>

            <section className="container mx-auto p-4 shadow-xl overflow-x-auto" > 
                <h3 className="text-2xl font-bold corTexto">Criar venda</h3>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-2">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Cliente
                        </label>
                        <div className="mt-2">
                        <input
                            type="text"
                            name="first-name"
                            id="primeiroNome"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        CPF
                        </label>
                        <div className="mt-2">
                        <input
                            type="text"
                            name="first-name"
                            id="cpf"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>
                    <div/>
                    <div className="sm:col-span-2">
                        <label htmlFor="produto" className="block text-sm font-medium leading-6 text-gray-900">
                            Produto
                        </label>
                        <div className="mt-2">
                            <input
                                id="produto"
                                name="produto"
                                type="text"
                                onChange={(e) => setProduto(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <button className=" btn btn-success mt-6" onClick={adicionaItem}>Adicionar</button>
                    </div>
                    <div/>
                    <div className="sm:col-span-6"/>
                </div>
                <TabelaVenda itens={itensVenda}/>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Forma Pagamento
                        </label>
                        <div className="mt-2">
                            <input
                                id="formaPagto"
                                name="formaPagto"
                                type="text"
                                autoComplete="text"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-900 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <p className="sm:col-span-2 text-right text-2xl">Total Pedido: </p>
                </div>
                <br/>
                <button className=" btn btn-success " >Gravar</button>
            </section>
            </div>
            
        </main>
    )

}export default Venda;

