import React from 'react';

function Tabela({dados,filtro}){

    return (
        <table className="table table-xs">
            <thead>
                <tr>
                    <th>Codigo Venda</th>
                    <th>Codigo Cliente</th>
                    <th>Forma Pagamento</th>
                    <th>Data Venda</th>
                    <th>Valor Total</th>
                </tr>
            </thead>
            <tbody>
                {
                dados.map((item, index) => {
                    return(
                   <tr key={index}>
                        <td>{item.codVenda}</td>
                        <td>{item.codCliente}</td>
                        <td>{item.formaPagto}</td>
                        <td>{item.dtVenda}</td>
                        <td>{'R$ '+item.vlTotal}</td>
                    </tr>
)})}
            </tbody>
        </table>
    )
}

export default Tabela;