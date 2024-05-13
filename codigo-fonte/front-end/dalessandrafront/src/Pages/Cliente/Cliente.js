import config from "../../config/config";
import axios from "axios";
import React, { useState } from "react";
import "../estilo/estoque.css";
import Menu from "../../Componentes/Menu/Menu";
import LogoInvetario from "../../img/warehouse.png";
import ModalCliente from "./components/listCliente";
import { cpf, cnpj } from 'cpf-cnpj-validator'; 
import AlertaSucesso from "../../Componentes/Alertas/AlertaSucesso";
import AlertaErro from "../../Componentes/Alertas/AlertaErro";

function Cliente(){

    const [codigoDisabled, setCodigoDisabled] = useState(false);
    const [codigoCliente, setCodigoCliente] = useState("");
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertaErro, setAlertaErro] = useState(false);

    const [clienteData, setClienteData] = useState({
        codigo: 0,
        nomeCliente: "",
        email: "",
        telefone: "",
        cpfCnpj: "",
        rua: "",
        bairro: "",
        cidade: "",
        complemento: ""
    });

    const handleCodigoBlur = async (e) => {
        const codigo = e;
        await buscarCliente(codigo);
    };

    const buscarCliente = async (codigo) => {
        try {
            const response = await axios.get(config.URL + 'cliente/' + codigo);
            const clienteEncontrado = response.data;
            setClienteData({
                codigo: clienteEncontrado.codCliente,
                nomeCliente: clienteEncontrado.nomeCliente,
                email: clienteEncontrado.email,
                telefone: clienteEncontrado.telefone,
                cpfCnpj: clienteEncontrado.cpfCnpj,
                rua: clienteEncontrado.rua,
                bairro: clienteEncontrado.bairro,
                cidade: clienteEncontrado.cidade,
                complemento: clienteEncontrado.complemento
            });
            setCodigoCliente(codigo);
            setCodigoDisabled(true);
        } catch(error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setClienteData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const formatarTelefone = (telefone) => {
        // Remove caracteres não numéricos
        const numerosApenas = telefone.replace(/[^\d]/g, '');
      
        // Verifica se o número tem 11 dígitos, incluindo o DDD
        if (numerosApenas.length === 11) {
          return `(${numerosApenas.slice(0, 2)}) ${numerosApenas.slice(2, 7)}-${numerosApenas.slice(7)}`;
        } else if (numerosApenas.length === 10) { // Verifica se o número tem 10 dígitos
          return `(${numerosApenas.slice(0, 2)}) ${numerosApenas.slice(2, 6)}-${numerosApenas.slice(6)}`;
        } else {
          // Se não for possível formatar, retorna o número original
          return telefone;
        }
      };

    const cadastrarCliente = () => {
        const headers ={"Content-Type":"application/json"}

        const data = {
            "nomeCliente": clienteData.nomeCliente,
            "email": clienteData.email,
            "telefone": clienteData.telefone,
            "cpfCnpj": clienteData.cpfCnpj,
            "rua": clienteData.rua,
            "bairro": clienteData.bairro,
            "cidade": clienteData.cidade,
            "complemento": clienteData.complemento
        }
        axios.post(config.URL+'cliente', data, {headers})
       .then((response)=>{
        setAlertVisible(true); 
                setAlertaErro(false);
                setTimeout(() => {
                    setAlertVisible(false); 
                  }, 1500);
                  resetFields();
       }).catch((error)=>{
        console.log(error);
        setTimeout(() => {
            setAlertVisible(false); 
          }, 1500);
       })
    }

    const atualizarCliente = async () => {
        const headers ={"Content-Type":"application/json"}
        try{
            await axios.put(config.URL+'cliente/'+ codigoCliente, clienteData, {headers});
            alert("Cliente atualizado com sucesso!");
        } catch(error){
            alert("Error ao atualizar cliente!");
        }
    }

    const gravar = (codigo) => {
        if(codigoDisabled == false) {
             cadastrarCliente()
        } else {
            atualizarCliente(codigo)
        }
    }

    const resetFields = () => {
        setClienteData({
            codCliente: "",
            nomeCliente: "",
            email: "",
            telefone: "",
            cpfCnpj: "",
            rua: "",
            bairro: "",
            cidade: "",
            complemento: ""
        });
        setCodigoCliente("");
        setCodigoDisabled(false);
    }
    

    return(
        <main className="bg-base-100 drawer lg:drawer-open" >
            <Menu/>
            <div className="drawer-content"> 
            <section className="container mx-auto p-4 alinhamentoMenu2">
                <img  class="h-10 w-10" fill="none" viewBox="0 0 34 34" src={LogoInvetario}/>
                <h1 className="text-3xl font-bold">Novo Cliente</h1>
            </section>
                <section className="container mx-auto p-4 shadow-xl overflow-x-auto">
                {alertVisible && <AlertaSucesso message="Cliente cadastrado com sucesso!" />}
                {alertaErro && <AlertaErro message="Ocorreu um erro ao cadastrar o cliente! Verifique as informações." />}
                    <div style={{display: 'flex'}}>
                        <h3 className="text-2xl font-bold corTexto my-2">Cadastro</h3>
                        <button className="btn ml-5"
                                onClick={() => document.getElementById('modalListCliente').showModal()}>
                            Lista de Cliente
                        </button>
                        <ModalCliente onItemSelected={handleCodigoBlur}/>
                    </div>
                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-1">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-2 text-gray-900">
                                Codigo
                            </label>
                            <div className="mt-2">
                                <input
                                    type="number"
                                    name="codigo"
                                    id="codigo"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    disabled
                                    value={clienteData.codCliente}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-5 text-gray-900">
                                Primeiro Nome
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="nomeCliente"
                                    id="nomeCliente"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handleChange}
                                    value={clienteData.nomeCliente}
                                />
                            </div>
                        </div>
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
                                    value={clienteData.email}
                                />
                            </div>
                        </div>
                        <div/>
                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Telefone
                            </label>
                            <div className="mt-2">
                                <input
                                    id="telefone"
                                    name="telefone"
                                    type="phone"
                                    autoComplete="phone"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handleChange}
                                    value={formatarTelefone(clienteData.telefone)}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                CPF/CNPJ
                            </label>
                            <div className="mt-2">
                                <input
                                    id="cpfCnpj"
                                    name="cpfCnpj"
                                    type="text"
                                    maxLength={16}
                                    autoComplete="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handleChange}
                                    value={clienteData.cpfCnpj.length <= 12 
                                        ? cpf.format(clienteData.cpfCnpj)
                                        : cnpj.format(clienteData.cpfCnpj)}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Rua
                            </label>
                            <div className="mt-2">
                                <input
                                    id="rua"
                                    name="rua"
                                    type="text"
                                    autoComplete="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handleChange}
                                    value={clienteData.rua}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Bairro
                            </label>
                            <div className="mt-2">
                                <input
                                    id="bairro"
                                    name="bairro"
                                    type="text"
                                    autoComplete="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handleChange}
                                    value={clienteData.bairro}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Cidade
                            </label>
                            <div className="mt-2">
                                <input
                                    id="cidade"
                                    name="cidade"
                                    type="text"
                                    autoComplete="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    onChange={handleChange}
                                    value={clienteData.cidade}
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                Complemento Endereço
                            </label>
                            <div className="mt-2">
                                <input
                                    id="complemento"
                                    name="complemento"
                                    type="text"
                                    autoComplete="text"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-900 sm:text-sm sm:leading-6"
                                    onChange={handleChange}
                                    value={clienteData.complemento}
                                />
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div style={{display: 'flex'}}>
                        <button className=" btn btn-success" onClick={gravar}>Cadastrar</button>
                        <button className=" btn ml-5" onClick={resetFields}>Limpar Campos</button>
                    </div>
                </section>
            </div>

        </main>
    )

}

export default Cliente;

