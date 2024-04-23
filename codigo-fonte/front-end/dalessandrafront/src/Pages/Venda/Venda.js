import axios from "axios";
import React, { useState, useEffect } from "react";
import "../../Pages/estilo/estoque.css";
import config from "../../config/config";
import { Input, Button, Card, Typography } from "@material-tailwind/react";
import Menu from "../../Componentes/Menu/Menu";
import LogoInvetario from "../../img/warehouse.png";
import ModalCliente from "../Cliente/components/listCliente";
import { cpf, cnpj } from 'cpf-cnpj-validator';
import AlertaSucesso from "../../Componentes/Alertas/AlertaSucesso";
import AlertaErro from "../../Componentes/Alertas/AlertaErro";

function Venda() {
    const [codCliente, setCodCliente] = useState(null);
    const [produto, setProduto] = useState("");
    const [cpfCnpj, setCpfCnpj] = useState("");
    const [formaPagamento, setFormaPagamento] = useState("");
    const [itensVenda, setItensVenda] = useState([]);
    const [totalVenda, setTotalVenda] = useState(0);
    const [novoItem, setNovoItem] = useState([]);
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertaErro, setAlertaErro] = useState(false);


    const atualizarTotalVenda = () => {
        const total = itensVenda.reduce((acc, item) => acc + item.vlTotal, 0);
        setTotalVenda(total);
    };

    const adicionaList = () => {
        try {
            if (novoItem !== "") {
                setItensVenda(prevItens => [...prevItens, {
                    descProduto: novoItem.descProduto,
                    codProduto: novoItem.codProduto,
                    valorUnit: novoItem.valorVenda,
                    quantidade: 1,
                    vlTotal: novoItem.valorVenda
                }]);
                atualizarTotalVenda();
                setProduto("");
            }
        } catch {
            AlertaErro("Erro ao adicionar item");
        }
    };

    const procuraCliente = async () => {
        if (codCliente === "") {
            return;
        }
        try {
            const response = await axios.get(config.URL + 'cliente/' + codCliente);
            const clienteEncontrado = response.data;
            setCpfCnpj(clienteEncontrado.cpfCnpj);
        } catch (error) {
            console.log(error);
        }
    };

    const procurarProduto = async () => {
        try {
            const response = await axios.get(config.URL + 'estoque/buscarCodigoProduto/' + produto);
            const produtoEncontrado = response.data;
            setProduto(produtoEncontrado.nomeProduto);
            setNovoItem({
                descProduto: produtoEncontrado.nomeProduto,
                codProduto: produtoEncontrado.codProduto,
                valorVenda: produtoEncontrado.valorVenda
            });
        } catch (error) {
            console.log(error);
        }
    };

    const cadastrarVenda = () => {
        const headers = { "Content-Type": "application/json" };
        const data = {
            "codCliente": parseInt(codCliente),
            "listaItens": itensVenda,
            "formaPagto": formaPagamento,
            "vlTotal": totalVenda
        };
        axios.post(config.URL + 'venda', data, { headers })
            .then((response) => {
                setAlertVisible(true); 
                setAlertaErro(false);
                setTimeout(() => {
                    setAlertVisible(false); 
                  }, 1000);
            
            }).catch((error) => {
                setAlertaErro(true);
            });
    };

    const resetFields = () => {
        setCodCliente("");
        setCpfCnpj("");
        setProduto("");
        setFormaPagamento("");
        setItensVenda([]);
        setTotalVenda(0);
    };

    const removerItem = (index) => {
        const novaLista = [...itensVenda];
        novaLista.splice(index, 1);
        setItensVenda(novaLista);
        atualizarTotalVenda();
    };

    const atualizarQuantidade = (index, quantidade) => {
        const novaLista = [...itensVenda];
        novaLista[index].quantidade = quantidade;
        novaLista[index].vlTotal = quantidade * novaLista[index].valorUnit;
        setItensVenda(novaLista);
        atualizarTotalVenda();
    };

    return (
        <main className="bg-base-100 drawer lg:drawer-open">
            <Menu />
            <div className="drawer-content">
                <section className="container mx-auto p-4 alinhamentoMenu2">
                    <img class="h-10 w-10" fill="none" viewBox="0 0 34 34" src={LogoInvetario} />
                    <h1 className="text-3xl font-bold">Vendas</h1>
                </section>

                <section className="container mx-auto p-4 shadow-xl overflow-x-auto">
                {alertVisible && <AlertaSucesso message="Venda cadastrada com sucesso" />}
                {alertaErro && <AlertaErro message="Ocorreu um erro ao cadastrar a venda" />}
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
                                <ModalCliente />
                            </div>

                        </div>
                        <div className="sm:col-span-2">
                            <div className="relative flex w-full max-w-[24rem] mt-2">
                                <Input
                                    type="text"
                                    label="CPF/CNPJ"
                                    value={cpfCnpj ? (cpfCnpj.length <= 12 ? cpf.format(cpfCnpj) : cnpj.format(cpfCnpj)) : ''}
                                    className="pr-20"
                                    containerProps={{
                                        className: "min-w-0",
                                    }}
                                />
                            </div>
                        </div>
                        <div />
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
                            <button className="btn btn-success mt-6" onClick={adicionaList}>Adicionar</button>
                        </div>
                        <div />
                        <div className="sm:col-span-6" />
                    </div>
                    <Card className={`h-full w-full ${itensVenda.length > 3 ? 'overflow-y-auto' : ''}`}>
                        <table className="w-full min-w-max table-auto text-left">
                            <thead>
                                <tr>
                                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            Nome do Produto
                                        </Typography>
                                    </th>
                                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            Código
                                        </Typography>
                                    </th>
                                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            Qtd
                                        </Typography>
                                    </th>
                                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            Preço Unitário
                                        </Typography>
                                    </th>
                                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            Valor Total
                                        </Typography>
                                    </th>
                                    <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            Remover
                                        </Typography>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {itensVenda.map(({ descProduto, codProduto, valorUnit, quantidade, vlTotal }, index) => (
                                    <tr key={index} className={index % 2 === 0 ? "even:bg-blue-gray-50/50" : ""}>
                                        <td className="p-4">
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {descProduto}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {codProduto}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <input type="number" defaultValue={quantidade ?? 1} onChange={(e) => atualizarQuantidade(index, e.target.value)} />
                                        </td>
                                        <td className="p-4">
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {"R$" + valorUnit}
                                            </Typography>
                                        </td>
                                        <td className="p-4">
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {"R$" + vlTotal ?? valorUnit}
                                            </Typography>
                                        </td>
                                        <td className="p-4 cursor-pointer" onClick={() => removerItem(index)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M15.172 6.828a1 1 0 0 1 0 1.414L11.414 11l3.758 3.758a1 1 0 0 1-1.414 1.414L10 12.414l-3.758 3.758a1 1 0 0 1-1.414-1.414L8.586 11 4.828 7.242a1 1 0 0 1 1.414-1.414L10 9.586l3.758-3.758a1 1 0 0 1 1.414 0z" clipRule="evenodd" />
                                            </svg>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Card>
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
                        <p className="sm:col-span-2 text-right text-2xl">Total Pedido: R$ {totalVenda} </p>
                    </div>
                    <br />
                    <button className="btn btn-success" onClick={cadastrarVenda}>Gravar</button>
                </section>
            </div>
        </main>
    );
}

export default Venda;
