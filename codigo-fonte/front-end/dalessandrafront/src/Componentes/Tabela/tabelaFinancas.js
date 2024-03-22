import React from 'react';
import ModalExcluirFin from "../Modal/ModaisFinanças/modalExcluirFin";

function tabelaFinancas({dados,filtro}){
    const filtrarDados = (item) => {
        const idDespesa = (item.idDespesa || '').toString();
        const tipoDespesa = (item.tipoDespesa || '').toString();
        const nomeDespesa = (item.nomeDespesa || '').toString();
        const valorDespesa = (item.valorDespesa || '').toString();
        const dataDespesa = (item.dataDespesa || '').toString();

        const mesAnoItem = new Date(dataDespesa).toLocaleDateString('en-US', { month: '2-digit', year: 'numeric' });

        return (
            idDespesa.toLowerCase().includes(filtro.toLowerCase()) ||
            nomeDespesa.toLowerCase().includes(filtro.toLowerCase()) ||
            tipoDespesa.toLowerCase().includes(filtro.toLowerCase())
        );
    };
    return (
        <table className="table table-xs">
            <thead>
            <tr>
                <th>Codigo</th>
                <th>Tipo</th>
                <th>Nome</th>
                <th>Valor</th>
                <th>Data</th>
            </tr>
            </thead>
            <tbody>
            {dados.filter(filtrarDados).map((item, index) => (
                <tr key={index}>
                    <td>{item.idDespesa}</td>
                    <td>{item.tipoDespesa}</td>
                    <td>{item.nomeDespesa}</td>
                    <td>{'R$ '+item.valorDespesa}</td>
                    <td>{item.dataDespesa}</td>
                    <td><ModalExcluirFin id={item.idDespesa}/></td>
                    {/*<td><SubMenuEstoque id={item.idDespesa}/></td>*/}
                </tr>
            ))}
            </tbody>
        </table>
    )
}

export default tabelaFinancas;