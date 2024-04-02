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

  const handleSubmit = () => {
    if (userData.senha !== userData.confirmarSenha) {
      setErrorMessage("As senhas não coincidem.");
      return;
    }

    const headers = config.HEADERS
    const data = {
      "nomeCadastro": userData.nome,
      "emailCadastro": userData.email,
      "dataNascimento":new Date(userData.dataNascimento).toLocaleDateString('pt-BR'),
      "senhaCadastro": userData.senha

    }
    
    axios.post(`${config.URL}cadastros/cadastrar`, data, { headers })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        setErrorMessage("Erro ao cadastrar. Por favor, tente novamente.");
        console.log(error)
      })
  };


  return (
    <div>
      <div className="background"></div>
      <div className="cadastro-container">
        <img src={logo} alt="Logo" className="logo" />
        <h2>Cadastro</h2>
        <form>
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
            type="text"
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
          <button type="submit" onClick={() => handleSubmit()}>Cadastrar</button>
        </form>
        <p>
          Já possui uma conta? <Link to="/">Faça login</Link>
        </p>
      </div>
    </div>
  );
}

export default Cadastro;
