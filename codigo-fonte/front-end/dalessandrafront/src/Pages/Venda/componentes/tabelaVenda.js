import { Card, Typography } from "@material-tailwind/react";
import React, { useState, useEffect } from "react";

function TabelaVenda({ itens, onUpdateTotal, enviaLista }) {
    const [listaItens, setListaItens] = useState([]);
    const [valorTotalVenda, setValorTotalVenda] = useState(0);

    useEffect(() => {
        onUpdateTotal(valorTotalVenda);
        const total = listaItens.reduce((acc, item) => acc + item.valorTotal, 0);
        setValorTotalVenda(total);
        onUpdateTotal(total); 
    }, [listaItens, onUpdateTotal]);

    useEffect(() => {
        setListaItens(prevItens => [...prevItens, ...itens]);
    }, [itens]);

    const removerItem = (index) => {
        const novaLista = [...listaItens];
        novaLista.splice(index, 1);
        setListaItens(novaLista);
        enviaListaHandler(novaLista);
    };

    const atualizarQuantidade = (index, quantidade) => {
        const novaLista = [...listaItens];
        novaLista[index].quantidade = quantidade;
        novaLista[index].valorTotal = quantidade * novaLista[index].valorUnit; 
        setListaItens(novaLista);
    };

    const enviaListaHandler = (novaLista) => {
        enviaLista(novaLista);
    };

    const showScroll = listaItens.length > 3;

    return (
        <Card className={`h-full w-full ${showScroll ? 'overflow-y-auto' : ''}`}>
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
                    {listaItens.map(({ nome, codProduto, valorUnit, quantidade, valorTotal }, index) => (
                        <tr key={index} className={index % 2 === 0 ? "even:bg-blue-gray-50/50" : ""}>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {nome}
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
                                    {valorUnit}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography variant="small" color="blue-gray" className="font-normal">
                                    {valorTotal ?? valorUnit}
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
    );
}

export default TabelaVenda;
