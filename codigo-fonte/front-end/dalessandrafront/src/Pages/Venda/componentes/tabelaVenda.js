import { Card, Typography } from "@material-tailwind/react";
import React, { useState } from "react";

function TabelaVenda({ itens }) {
    const [listaItens, setListaItens] = useState(itens); // Usar um estado local para armazenar a lista de itens

    const removerItem = (index) => {
        const novaLista = [...listaItens]; // Fazer uma cópia da lista de itens
        novaLista.splice(index, 1); // Remover o item correspondente ao índice
        setListaItens(novaLista); // Atualizar o estado com a nova lista de itens
    };

    const showScroll = listaItens.length > 3; // Verifica se há mais de 3 itens para decidir se deve mostrar o scroll

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
                {listaItens.map(({ nome, codigo, preco }, index) => (
                    <tr key={index} className={index % 2 === 0 ? "even:bg-blue-gray-50/50" : ""}>
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {nome}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {codigo}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <input type="number" defaultValue={1} />
                        </td>
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {preco}
                            </Typography>
                        </td>
                        <td className="p-4">
                            <Typography variant="small" color="blue-gray" className="font-normal">
                                {preco}
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
