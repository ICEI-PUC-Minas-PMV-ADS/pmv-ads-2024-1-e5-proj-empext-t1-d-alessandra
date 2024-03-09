import React from 'react';
import ModalExcluir from "./modalExcluir";
function Tabela({dados}){
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Codigo do Produto</th>
                    <th>Nome do Produto</th>
                    <th>Marca</th>
                    <th>Cor</th>
                    <th>Tamanho</th>
                    <th>Quantidade em estoque</th>
                    <th>Valor comprado</th>
                    <th>Valor de venda</th>
                    <th>Status</th>
                    <th>Data Cadastro</th>
                </tr>
            </thead>
            <tbody>
                {dados.map((item, index) => (
                    <tr key={index}>
                        <td>{item.codProduto}</td>
                        <td>{item.nomeProduto}</td>
                        <td>{item.marca}</td>
                        <td>{item.cor}</td>
                        <td>{item.tamanho}</td>
                        <td>{item.qtdAtual}</td>
                        <td>{item.valorComprado}</td>
                        <td>{item.valorVenda}</td>
                        <td>{item.status}</td>
                        <td>{item.dataCadastro}</td>
                        <td><ModalExcluir id={item.codProduto}/></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Tabela;