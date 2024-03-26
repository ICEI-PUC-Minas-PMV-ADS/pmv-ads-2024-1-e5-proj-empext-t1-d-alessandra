import React from "react";

function TabelaVenda({ itens }) {
    return (
        <div className="overflow-y-auto max-h-80">
            <table className="table table-xs table-pin-rows table-pin-cols">
                <thead>
                <tr>
                    <th>Nº</th>
                    <th>Nome do Produto</th>
                    <th>Código</th>
                    <th>Qtd</th>
                    <th>Preço Unitário</th>
                    <th>Valor Total</th>
                </tr>
                </thead>
                <tbody>
                {itens.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.nome}</td>
                        <td>{item.codigo}</td>
                        <td><input type="number" defaultValue={1} /></td>
                        <td>{item.preco}</td>
                        <td>{item.preco}</td> {/* aqui você pode calcular o valor total se desejar */}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default TabelaVenda;
