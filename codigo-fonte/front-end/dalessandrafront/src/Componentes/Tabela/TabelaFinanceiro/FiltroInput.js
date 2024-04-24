import React from 'react';

function FiltroInput({ onFiltroChange }) {
    const handleChange = (e) => {
        onFiltroChange(e.target.value);
    };

    return (
        <input
            type="search"
            placeholder="Pesquisar..."
            onChange={handleChange}
            className="input input-bordered input-success w-full max-w-60"
            postion={"relative"}
        />
    );
}

export default FiltroInput;