import React from 'react';

function Filtro({ onFiltroChange }) {
    const handleChange = (e) => {
        onFiltroChange(e.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Pesquisar..."
            onChange={handleChange}
            className="input input-bordered input-success w-full max-w-xs"
            postion={"relative"}
        />
    );
}

export default Filtro;