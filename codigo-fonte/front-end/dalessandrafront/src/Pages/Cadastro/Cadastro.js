import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
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
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  const checkExistingEmail = async () => {
    try {
      const response = await axios.get(`${config.URL}cadastros/verificar-email/${userData.email}`);
      return response.data.exists;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      if (!userData.nome || !userData.email || !userData.senha || !userData.confirmarSenha || !userData.dataNascimento) {
        throw new Error("Por favor, preencha todos os campos.");
      }

      if (userData.senha !== userData.confirmarSenha) {
        throw new Error("As senhas não coincidem.");
      }

      const emailExists = await checkExistingEmail();
      if (emailExists) {
        setErrorMessage("Este email já está cadastrado.");
        setLoading(false);
        return; 
      }

      const headers = config.HEADERS;
      const data = {
        nomeCadastro: userData.nome,
        emailCadastro: userData.email,
        dataNascimento: new Date(userData.dataNascimento).toLocaleDateString("pt-BR"),
        senhaCadastro: userData.senha
      };

      const response = await axios.post(`${config.URL}cadastros/cadastrar`, data, { headers });
      console.log(response);
      setLoading(false);

      setTimeout(() => {
        navigate("/");
      }, );

    } catch (error) {
      setErrorMessage("Email já cadastrado");
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <div>
      <div className={`background ${loading ? "dark" : ""}`}></div>
      <div className={`cadastro-container ${loading ? "loading" : ""}`}>
        <img src={logo} alt="Logo" className="logo" />
        <h2>Cadastro</h2>
        <form>
          <input
            type="text"
            name="nome"
            value={userData.nome}
            onChange={handleChange}
            placeholder="Nome"
            className={!userData.nome && errorMessage ? "error" : ""}
            onFocus={() => setErrorMessage('')}
          />
          <input
            type="date"
            name="dataNascimento"
            value={userData.dataNascimento}
            onChange={handleChange}
            placeholder="Data de Nascimento"
            className={!userData.dataNascimento && errorMessage ? "error" : ""}
            onFocus={() => setErrorMessage('')}
          />
          <input
            type="text"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="Email"
            className={!userData.email && errorMessage ? "error" : ""}
            onFocus={() => setErrorMessage('')}
          />
          <input
            type="password"
            name="senha"
            value={userData.senha}
            onChange={handleChange}
            placeholder="Senha"
            className={!userData.senha && errorMessage ? "error" : ""}
            onFocus={() => setErrorMessage('')}
          />
          <input
            type="password"
            name="confirmarSenha"
            value={userData.confirmarSenha}
            onChange={handleChange}
            placeholder="Confirmar Senha"
            className={!userData.confirmarSenha && errorMessage ? "error" : ""}
            onFocus={() => setErrorMessage('')}
          />
          <button type="button" onClick={handleSubmit} disabled={loading}>
            {loading ? "Carregando..." : "Cadastrar"}
          </button>
        </form>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <p>
          Já possui uma conta? <Link to="/">Faça login</Link>
        </p>
      </div>
    </div>
  );
}

export default Cadastro;
