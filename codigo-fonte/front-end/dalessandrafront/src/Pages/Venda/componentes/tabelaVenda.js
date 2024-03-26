import React from "react";

function TabelaVenda({ itens }) {

    const validaDigito = (event) => {
        const tecla = event.key;
        if (!(tecla >= '0' && tecla <= '9') && tecla !== 'Backspace') {
            event.preventDefault();
        }
    }

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
                        <td><input type="number" onKeyDown={validaDigito} defaultValue={1} /></td>
                        <td>{item.preco}</td>
                        <td>{item.preco}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default TabelaVenda;
