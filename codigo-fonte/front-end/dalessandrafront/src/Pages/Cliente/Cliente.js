import config from "../../config/config";
import axios from "axios";
import React, { useState } from "react";
import "../estilo/estoque.css";
import Menu from "../../Componentes/Menu/Menu";
import LogoInvetario from "../../img/warehouse.png";

function Cliente(){

    const [clienteData, setClienteData] = useState({
        nomeCliente: "",
        email: "",
        telefone: "",
        cpfCnpj: "",
        rua: "",
        bairro: "",
        cidade: "",
        complemento: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClienteData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const cadastrarCliente = async () => {
        const headers ={"Content-Type":"application/json"}
        try{
            await axios.post(config.URL+'cliente', clienteData);
        } catch(error){
            console.log(error)
        }
    }

    return(
        <main className="bg-base-100 drawer lg:drawer-open" >
            <Menu/>
            <div className="drawer-content"> 
            <section className="container mx-auto p-4 alinhamentoMenu2">
                <img  class="h-10 w-10" fill="none" viewBox="0 0 34 34" src={LogoInvetario}/>
                <h1 className="text-3xl font-bold">Novo Cliente</h1>
            </section>
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
                            name="nomeCliente"
                            id="primeiroNome"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                name="cpfCnpj"
                                type="number"
                                autoComplete="number"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>
                <br/>
                <button className=" btn btn-success" onClick={cadastrarCliente} >Cadastrar</button>
            </section>
            </div>
            
        </main>
    )

}export default Cliente;

