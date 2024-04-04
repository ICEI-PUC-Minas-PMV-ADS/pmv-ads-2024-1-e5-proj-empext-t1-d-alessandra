import React, { useState, useEffect } from 'react';

function FiltrarData({ onFiltrarDataChange }) {
    const [filtroData, setFiltroData] = useState({
        dia: '',
        mes: '',
        ano: ''
    });

    useEffect(() => {
        // Obtém a data atual
        const dataAtual = new Date();
        const dia = dataAtual.getDate().toString().padStart(2, '0');
        const mes = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
        const ano = dataAtual.getFullYear().toString();

        // Define os valores iniciais dos campos do filtro
        setFiltroData({
            dia,
            mes,
            ano
        });
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFiltroData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onFiltrarDataChange(filtroData);
    };

    const meses = [
        { numero: '01', nome: 'Janeiro' },
        { numero: '02', nome: 'Fevereiro' },
        { numero: '03', nome: 'Março' },
        { numero: '04', nome: 'Abril' },
        { numero: '05', nome: 'Maio' },
        { numero: '06', nome: 'Junho' },
        { numero: '07', nome: 'Julho' },
        { numero: '08', nome: 'Agosto' },
        { numero: '09', nome: 'Setembro' },
        { numero: '10', nome: 'Outubro' },
        { numero: '11', nome: 'Novembro' },
        { numero: '12', nome: 'Dezembro' }
    ];

    return (
        <form onSubmit={handleSubmit} className="flex space-x-4 items-center">
            <select name="dia" value={filtroData.dia} onChange={handleInputChange} className="input input-sm">
                <option value="">Dia</option>
                {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                    <option key={day} value={day.toString().padStart(2, '0')}>{day.toString().padStart(2, '0')}</option>
                ))}
            </select>
            <select name="mes" value={filtroData.mes} onChange={handleInputChange} className="input input-sm">
                <option value="">Mês</option>
                {meses.map(month => (
                    <option key={month.numero} value={month.numero}>{month.nome}</option>
                ))}
            </select>
            <select name="ano" value={filtroData.ano} onChange={handleInputChange} className="input input-sm">
                <option value="">Ano</option>
                {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map(year => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>
            <button type="submit" className="btn btn-success">Filtrar</button>
        </form>
    );
}

export default FiltrarData;
