import React from 'react';
import ModalExcluir from "../Modal/modalExcluir";
import SubMenuEstoque from '../Menu/subMenuEstoque';
import ModalEditarQuantidade from '../Modal/modalEditarQuantidade';
function Tabela({dados}){
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Cod.Produto</th>
                    <th>Produto</th>
                    <th>Marca</th>
                    <th>Cor</th>
                    <th>Tamanho</th>
                    <th>Qtd</th>
                    <th>Valor unid</th>
                    <th>Valor venda unid</th>
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
                        <td>{'R$ '+item.valorComprado}</td>
                        <td>{'R$ '+item.valorVenda}</td>
                        <td>{item.status}</td>
                        <td>{item.dataCadastro}</td>
                        <td><ModalExcluir id={item.codProduto}/></td>
                        <td><ModalEditarQuantidade/></td>
                        <td><SubMenuEstoque/></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Tabela;