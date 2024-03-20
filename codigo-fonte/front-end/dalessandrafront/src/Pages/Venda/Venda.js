
import axios from "axios";
import React from "react";
import "../../Pages/estilo/estoque.css";
import config from "../../config/config";
import { useEffect, useState } from "react";
import Menu from "../../Componentes/Menu/Menu";
import LogoInvetario from "../../img/warehouse.png";

function Venda(){

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
        <main className="bg-base-100 drawer lg:drawer-open" >
            <Menu/>
            <br></br>
            <div className="drawer-content"> 
            <section className="container mx-auto p-4 alinhamentoMenu2">
                <img  class="h-10 w-10" fill="none" viewBox="0 0 34 34" src={LogoInvetario}/>
                <h1 className="text-3xl font-bold">Nova Venda</h1>
            </section>
            <br></br>
            <br></br>
            <br></br>
            <section className="container mx-auto p-4 shadow-xl overflow-x-auto" > 
                <h3 className="text-2xl font-bold corTexto">Cadastro</h3>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-2">
                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        Primeiro Nome
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
                        Ultimo nome
                        </label>
                        <div className="mt-2">
                        <input
                            type="text"
                            name="first-name"
                            id="ultimoNome"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>
                    <div/>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Email
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Telefone
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="telefone"
                                type="phone"
                                autoComplete="phone"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div/>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            CPF/CNPJ
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="cpf"
                                type="number"
                                autoComplete="number"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-4"/>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Rua
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="rua"
                                type="text"
                                autoComplete="text"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Bairro
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="bairro"
                                type="text"
                                autoComplete="text"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Cidade
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="cidade"
                                type="text"
                                autoComplete="text"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Complemento Endereço
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="complemento"
                                type="text"
                                autoComplete="text"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-900 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>
                <br/>
                <button className=" btn btn-success" >Gravar</button>
            </section>
            </div>
            
        </main>
    )

}export default Venda;

