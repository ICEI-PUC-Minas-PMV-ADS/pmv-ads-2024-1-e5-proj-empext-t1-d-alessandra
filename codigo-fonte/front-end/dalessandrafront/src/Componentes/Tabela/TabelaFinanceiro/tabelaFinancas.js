
import React from 'react';
import ModalExcluirFin from "../../Modal/ModaisFinanças/modalExcluirFin";
import SubMenuFinanceiro from '../../SubMenu/subMenuFinanceiro';
import { formatarParaReal } from '../../Utils/utils';

{/*import React from 'react';
import ModalExcluirFin from "../../Modal/ModaisFinanças/modalExcluirFin";
import SubMenuFinanceiro from '../../SubMenu/subMenuFinanceiro';
import { formatarParaReal } from '../../Utils/utils';

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
                        <td>{formatarParaReal(item.valorDespesa)}</td>
                        <td>{item.dataDespesa}</td>
                        <td>{item.dataVencimento}</td>
                        <td><ModalExcluirFin id={item.idDespesa} /></td>
                        <td><SubMenuFinanceiro id={item.idDespesa}/></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TabelaFinancas;*/}

function TabelaFinancas({ dados, filtroData }) {
    const filtrarDados = (item) => {
        if (!filtroData.dataInicio && !filtroData.dataFim) return true;

        const [dia, mes, ano] = item.dataDespesa.split('/');
        const dataDespesa = new Date(`${ano}-${mes}-${dia}`);

        const dataInicio = filtroData.dataInicio ? new Date(filtroData.dataInicio) : null;
        const dataFim = filtroData.dataFim ? new Date(filtroData.dataFim) : null;

        if (dataInicio && dataDespesa < dataInicio) return false;
        if (dataFim && dataDespesa > dataFim) return false;

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
                        <td>{formatarParaReal(item.valorDespesa)}</td>
                        <td>{item.dataDespesa}</td>
                        <td>{item.dataVencimento}</td>
                        <td><ModalExcluirFin id={item.idDespesa} /></td>
                        <td><SubMenuFinanceiro id={item.idDespesa}/></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default TabelaFinancas;

