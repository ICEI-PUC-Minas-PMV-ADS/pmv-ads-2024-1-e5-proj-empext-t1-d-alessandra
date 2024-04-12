
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
    const [codCliente, setCodCliente] = useState(null);
    const [produto, setProduto] = useState("");
    const [cpfCnpj, setCpfCnpj] = useState("");
    const [formaPagamento, setFormaPagamento] = React.useState("");
    const [itensVenda, setItensVenda] = useState([]);
    const [novoItem, setNovoItem] = useState([{nome: "", codigo: "", preco: ""}]);
    const [totalVenda, setTotalVenda] = useState(0);

    const atualizarTotalVenda = (total) => {
        setTotalVenda(total);
    };

    const atualizarItensVenda = (novaListaItens) => {
        setItensVenda(novaListaItens);
    };

    const adicionaList = () => {
        setItensVenda([]);
        try{
            if (produto !== "") {
                setItensVenda(prevItens => [...prevItens, novoItem]);
                setProduto("");
            }
        } catch{
            alert("Erro ao adicionar item");
        } finally {
        }
    }

    const procuraCliente = async() => {
        if(codCliente === ""){
            return;
        }
        try{
            const response = await axios.get(config.URL + 'cliente/' + codCliente);
            const clienteEncontrado = response.data;
            setCpfCnpj(clienteEncontrado.cpfCnpj);
        }catch(error){
            console.log(error);
        }
    }

    const procurarProduto = async() => {
        try{
            const response = await axios.get(config.URL + 'estoque/buscarCodigoProduto/' + produto);
            const produtoEncontrado = response.data;
            setNovoItem({
                nome: produtoEncontrado.nomeProduto,
                codigo: produtoEncontrado.codProduto,
                preco: produtoEncontrado.valorVenda
            });
        } catch(error){
            console.log(error);
        }
    }

    const cadastrarVenda = async () => {
        const headers ={"Content-Type":"application/json"}

        try{
            const data = {
                "codCliente": parseInt(codCliente),
                "listaItens": itensVenda,
                "formaPagto": formaPagamento,
                "vlTotal": totalVenda
            }
            axios.post(config.URL + 'venda', data, {headers});
            alert("Venda cadastrada com sucesso");
            resetFields();
        } catch(error){
            alert("Erro ao cadastrar venda");
        }
    }

    const resetFields = () => {
            setCodCliente("");
            setCpfCnpj("");
            setProduto("");
            setFormaPagamento("");
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
                                type="number"
                                label="Cliente"
                                value={codCliente}
                                onBlur={procuraCliente}
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
                                onBlur={procurarProduto}
                                className="pr-20"
                                containerProps={{
                                    className: "min-w-0",
                                }}
                            />
                        </div>
                        <button className=" btn btn-success mt-6" onClick={adicionaList} >Adicionar</button>
                    </div>
                    <div/>
                    <div className="sm:col-span-6"/>
                </div>
                <TabelaVenda itens={itensVenda}  onUpdateTotal={atualizarTotalVenda}/>
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
                    <p className="sm:col-span-2 text-right text-2xl">Total Pedido: {totalVenda} </p>
                </div>
                <br/>
                <button className=" btn btn-success " onClick={cadastrarVenda}>Gravar</button>
            </section>
            </div>

        </main>
    )

}

export default Venda;

