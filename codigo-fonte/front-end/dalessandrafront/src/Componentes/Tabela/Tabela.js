import React from 'react';
import ModalExcluir from "../Modal/ModiasEstoque/modalExcluir";
import SubMenuEstoque from '../Menu/subMenuEstoque';
import ModalEditarQuantidade from '../Modal/ModiasEstoque/modalEditarQuantidade';
function Tabela({dados,filtro}){
    const filtrarDados = (item) => {
        const codProduto = (item.codProduto || '').toString();
        const nomeProduto = (item.nomeProduto || '').toString();
        const marca = (item.marca || '').toString();
        const cor = (item.cor || '').toString();
        const tamanho = (item.tamanho || '').toString();
        const qtdAtual = (item.qtdAtual || '').toString();
        const valorComprado = (item.valorComprado || '').toString();
        const valorVenda = (item.valorVenda || '').toString();
        const status = (item.status || '').toString();
        const dataCadastro = (item.dataCadastro || '').toString();

        return (
            codProduto.toLowerCase().includes(filtro.toLowerCase()) ||
            nomeProduto.toLowerCase().includes(filtro.toLowerCase()) ||
            tamanho.toLowerCase().includes(filtro.toLowerCase()) ||
            status.toLowerCase().includes(filtro.toLowerCase()) 
        );
    };
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Cod.Produto</th>
                    <th>Produto</th>
                    <th>Marca</th>
                    <th>Cor</th>
                    <th>Tamanho</th>
                    <th>Tipo</th>
                    <th>Qtd</th>
                    <th>Preço Compra</th>
                    <th>Preço Venda</th>
                    <th>Preço total compra</th>
                    <th>Status</th>
                    <th>Data Cadastro</th>
                </tr>
            </thead>
            <tbody>
                {dados.filter(filtrarDados).map((item, index) => (
                    <tr key={index}>
                        <td>{item.codProduto}</td>
                        <td>{item.nomeProduto}</td>
                        <td>{item.marca}</td>
                        <td>{item.cor}</td>
                        <td>{item.tamanho}</td>
                        <td>{item.tipo}</td>
                        <td>{item.qtdAtual}</td>
                        <td>{'R$ '+item.valorComprado}</td>
                        <td>{'R$ '+item.valorVenda}</td>
                        <td>{'R$ '+item.valorTotalEmEstoque}</td>
                        <td>{item.status}</td>
                        <td>{item.dataCadastro}</td>
                        <td><ModalExcluir id={item.codProduto}/></td>
                        <td><ModalEditarQuantidade id={item.codProduto}/></td>
                        <td><SubMenuEstoque/></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Tabela;