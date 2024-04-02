import React, { useState } from 'react';

function FiltroData({ onFiltroDataChange }) {
  const [dia, setDia] = useState('');
  const [mes, setMes] = useState('');
  const [ano, setAno] = useState('');

  const handleFiltrarClick = () => {
    onFiltroDataChange({ dia, mes, ano });
  };

  return (
    <div>
      <input type="number" placeholder="Dia" value={dia} onChange={(e) => setDia(e.target.value)} />
      <input type="number" placeholder="Mês" value={mes} onChange={(e) => setMes(e.target.value)} />
      <input type="number" placeholder="Ano" value={ano} onChange={(e) => setAno(e.target.value)} />
      <button onClick={handleFiltrarClick}>Filtrar</button>
    </div>
  );
}

export default FiltroData;

