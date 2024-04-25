import React, { useState } from 'react';

function TabelaMaisVendidos({ dados }) {
    return (
        <div>
            <table className="table table-xs">
                <thead>
                    <tr>
                        <th>Codigo Produto</th>
                        <th>Descrição Produto</th>
                        <th>Categoria</th>
                        <th>Quantidade Estoque</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dados.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.codProduto}</td>
                                    <td>{item.descProduto}</td>
                                    <td>{item.tipo}</td>
                                    <td>{item.qtdAtual}</td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </div>
    )
}

export default TabelaMaisVendidos;