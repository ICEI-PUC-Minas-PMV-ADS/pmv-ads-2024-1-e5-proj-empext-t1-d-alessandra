import React from 'react';
import ModalExcluirFin from "../Modal/ModaisFinanças/modalExcluirFin";
import SubMenuFinanceiro from '../Menu/subMenuFinanceiro';

function TabelaFinancas({ dados, filtroData }) {
    const filtrarDados = (item) => {
        if (!filtroData || (filtroData.dia === null && filtroData.mes === null && filtroData.ano === null)) return true;

        const dataDespesa = item.dataDespesa || '';
        const [dia, mes, ano] = dataDespesa.split('/');

        if (filtroData.ano && ano !== filtroData.ano) return false;
        if (filtroData.mes && mes !== filtroData.mes) return false;
        if (filtroData.dia && dia !== filtroData.dia) return false;

        return true;
    };

    return (
        <table className="table table-xs">
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Tipo</th>
                    <th>Nome</th>
                    <th>Valor</th>
                    <th>Data de Pagamento</th>
                    <th>Data de Vencimento</th>
                </tr>
            </thead>
            <tbody>
                {dados.filter(filtrarDados).map((item, index) => (
                    <tr key={index}>
                        <td>{item.idDespesa}</td>
                        <td>{item.tipoDespesa}</td>
                        <td>{item.nomeDespesa}</td>
                        <td>{'R$ ' + item.valorDespesa}</td>
                        <td>{item.dataDespesa}</td>
                        <td>{item.dataVencimento}</td>
                        <td><ModalExcluirFin id={item.idDespesa} /></td>
                        <td><SubMenuFinanceiro idDespesa={item.idDespesa}/></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TabelaFinancas;
