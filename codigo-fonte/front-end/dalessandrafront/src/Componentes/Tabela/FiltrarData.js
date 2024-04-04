import React, { useState } from 'react';

function FiltrarData({ onFiltrarDataChange }) {
    const [filtroData, setFiltroData] = useState({
        dia: '',
        mes: '',
        ano: ''
    });

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

    return (
        <form onSubmit={handleSubmit} className="flex space-x-4 items-center">
            <select name="dia" value={filtroData.dia} onChange={handleInputChange} className="input input-sm">
                <option value="">Todos</option>
                {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                    <option key={day} value={day}>{day}</option>
                ))}
            </select>
            <select name="mes" value={filtroData.mes} onChange={handleInputChange} className="input input-sm">
                <option value="">Todos</option>
                <option value="01">Janeiro</option>
                <option value="02">Fevereiro</option>
                <option value="03">Março</option>
                <option value="04">Abril</option>
                <option value="05">Maio</option>
                <option value="06">Junho</option>
                <option value="07">Julho</option>
                <option value="08">Agosto</option>
                <option value="09">Setembro</option>
                <option value="10">Outubro</option>
                <option value="11">Novembro</option>
                <option value="12">Dezembro</option>
            </select>
            <select name="ano" value={filtroData.ano} onChange={handleInputChange} className="input input-sm">
                <option value="">Todos</option>
                {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map(year => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>
            <button type="submit" className="btn btn-success">Filtrar</button>
        </form>
    );
}

export default FiltrarData;
