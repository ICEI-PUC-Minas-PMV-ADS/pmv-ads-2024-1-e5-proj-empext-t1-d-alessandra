import React, { useState } from 'react';

function FiltrarData({ onFiltrarDataChange }) {
    const [filtroData, setFiltroData] = useState({
        dataInicio: '',
        dataFim: ''
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
        console.log("Valores do filtro ao submeter:", filtroData);
        onFiltrarDataChange(filtroData);
    };

    return (
        <form onSubmit={handleSubmit} className="flex space-x-5 items-center">
            <div className="flex flex-col">
                <label htmlFor="dataInicio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data Início</label>
                <input
                    type="date"
                    name="dataInicio"
                    value={filtroData.dataInicio}
                    onChange={handleInputChange}
                    className="input input-bordered input-success w-full max-w-60"
                />
            </div>
            <span className="self-end mb-4">a</span>
            <div className="flex flex-col">
                <label htmlFor="dataFim" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data Final</label>
                <input
                    type="date"
                    name="dataFim"
                    value={filtroData.dataFim}
                    onChange={handleInputChange}
                    className="input input-bordered input-success w-full max-w-60"
                />
            </div>
            <div className="flex items-end">
                <button type="submit" className="btn btn-success mt-6">Filtrar</button>
            </div>
        </form>
    );
}

export default FiltrarData;
