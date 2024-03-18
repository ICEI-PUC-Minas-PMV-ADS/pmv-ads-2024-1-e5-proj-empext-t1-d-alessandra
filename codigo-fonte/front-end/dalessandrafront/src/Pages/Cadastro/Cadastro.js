import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../estilo/cadastro.css"; 
import config from "../../config/config";

function Cadastro() {
  const [userData, setUserData] = useState({
    nome: "",
    email: "",
    senha: ""
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.URL}/cadastro`, userData);
      // Lógica para lidar com a resposta do servidor após o cadastro
    } catch (error) {
      setErrorMessage("Erro ao cadastrar. Por favor, tente novamente.");
    }
  };

  return (
    <div className="cadastro-container">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nome"
          value={userData.nome}
          onChange={handleChange}
          placeholder="Nome"
        />
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="senha"
          value={userData.senha}
          onChange={handleChange}
          placeholder="Senha"
        />
        <button type="submit">Cadastrar</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <p>
        Já possui uma conta? <Link to="/login">Faça login</Link>
      </p>
    </div>
  );
}

export default Cadastro;
