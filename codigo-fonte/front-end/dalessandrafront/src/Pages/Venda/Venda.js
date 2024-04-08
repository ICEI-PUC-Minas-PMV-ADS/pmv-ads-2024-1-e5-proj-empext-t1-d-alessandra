
import axios from "axios";
import React from "react";
import "../../Pages/estilo/estoque.css";
import config from "../../config/config";
import { useEffect, useState } from "react";
import Menu from "../../Componentes/Menu/Menu";
import LogoInvetario from "../../img/warehouse.png";
import TabelaVenda from "./componentes/tabelaVenda";
import { Input, Button } from "@material-tailwind/react";
import ModalCliente from "../Cliente/components/listCliente";

function Venda(){
    const [codCliente, setCodCliente] = React.useState("");
    const [produto, setProduto] = useState("");
    const [cpfCnpj, setCpfCnpj] = useState("");
    const [formaPagamento, setFormaPagamento] = React.useState("");
    const [itensVenda, setItensVenda] = useState([]);

    const adicionaItem = () => {
        try{
            if (produto !== "") {
                const novoItem = {
                    nome: produto,
                    codigo: "0001",
                    preco: "10"
                };
                setItensVenda([...itensVenda, novoItem]);
                setProduto("");
            }
        } catch{
            alert("Erro ao adicionar item");
        } finally {
        }
    }

    const limparLista = () => {
        setItensVenda([]);
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
                        <div className="relative flex w-full max-w-[24rem] mt-2">
                            <Input
                                type="text"
                                label="Cliente"
                                value={codCliente}
                                onChange={(e) => setCodCliente(e.target.value)}
                                className="pr-20"
                                containerProps={{
                                    className: "min-w-0",
                                }}
                            />
                            <Button
                                size="sm"
                                color="gray"
                                className="!absolute right-1 top-1 rounded"
                                onClick={() => document.getElementById('modalListCliente').showModal()}
                            >
                                Procurar
                            </Button>
                            <ModalCliente/>
                        </div>

                    </div>
                    <div className="sm:col-span-2">
                            <div className="relative flex w-full max-w-[24rem] mt-2">
                                <Input
                                    type="text"
                                    label="CPF/CNPJ"
                                    value={cpfCnpj}
                                    onChange={(e) => setCpfCnpj(e.target.value)}
                                    className="pr-20"
                                    containerProps={{
                                        className: "min-w-0",
                                    }}
                                />
                            </div>
                    </div>
                    <div/>
                    <div className="sm:col-span-2">
                        <div className="relative flex w-full max-w-[24rem] mt-2">
                            <Input
                                type="text"
                                label="Produto"
                                value={produto}
                                onChange={(e) => setProduto(e.target.value)}
                                className="pr-20"
                                containerProps={{
                                    className: "min-w-0",
                                }}
                            />
                        </div>
                        <button className=" btn btn-success mt-6" onKeyDown={adicionaItem} onKeyUp={limparLista}>Adicionar</button>
                    </div>
                    <div/>
                    <div className="sm:col-span-6"/>
                </div>
                <TabelaVenda itens={itensVenda}/>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-2">
                        <div className="relative flex w-full max-w-[24rem] mt-2">
                            <Input
                                type="text"
                                label="Forma Pagamento"
                                value={formaPagamento}
                                onChange={(e) => setFormaPagamento(e.target.value)}
                                className="pr-20"
                                containerProps={{
                                    className: "min-w-0",
                                }}
                            />
                        </div>
                    </div>
                    <p className="sm:col-span-2 text-right text-2xl">Total Pedido: </p>
                </div>
                <br/>
                <button className=" btn btn-success ">Gravar</button>
            </section>
            </div>

        </main>
    )

}

export default Venda;

