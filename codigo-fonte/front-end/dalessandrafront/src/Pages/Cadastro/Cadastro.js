import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../estilo/cadastro.css"; 
import config from "../../config/config";
import logo from "../../img/logo.png";

function Cadastro() {
  const [userData, setUserData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    dataNascimento: ""
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
    if (userData.senha !== userData.confirmarSenha) {
      setErrorMessage("As senhas não coincidem.");
      return;
    }
    try {

      const response = await axios.post(`${config.URL}cadastros/cadastrar?nomeCadastro=${userData.nome}&dataNascimento=${new Date(userData.dataNascimento).toLocaleDateString('pt-BR')}&emailCadastro=${userData.email}&senhaCadastro=${userData.senha}`);
      console.log (response)
    } catch (error) {
      setErrorMessage("Erro ao cadastrar. Por favor, tente novamente.");
      console.log (error)

    }
  };

  return (
    <div>
      <div className="background"></div>
      <div className="cadastro-container">
        <img src={logo} alt="Logo" className="logo" />
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
            type="date"
            name="dataNascimento"
            value={userData.dataNascimento}
            onChange={handleChange}
            placeholder="Data de Nascimento"
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
          <input
            type="password"
            name="confirmarSenha"
            value={userData.confirmarSenha}
            onChange={handleChange}
            placeholder="Confirmar Senha"
          />
          <button type="submit">Cadastrar</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <p>
          Já possui uma conta? <Link to="/login">Faça login</Link>
        </p>
      </div>
    </div>
  );
}

export default Cadastro;
