import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../estilo/cadastro.css";
import config from "../../config/config";
import logo from "../../img/logo.png";
import dayjs from "dayjs";
function Cadastro() {
  const [userData, setUserData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    dataNascimento: "",
    cpfCnpj: ""
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "email") {
      formattedValue = value.replace(/[^\w.\-@]/g, "");
    }

    if (name === "cpfCnpj") {
      const onlyNumbers = value.replace(/\D/g, "");
      if (onlyNumbers.length > 14) {
        return;
      }
      if (onlyNumbers.length <= 11) {
        formattedValue = onlyNumbers
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      } else {
        formattedValue = onlyNumbers
          .replace(/(\d{2})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d)/, "$1/$2")
          .replace(/(\d{4})(\d{1,2})$/, "$1-$2");
      }
    }

    setUserData({
      ...userData,
      [name]: formattedValue
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
      if (!userData.nome || !userData.email || !userData.senha || !userData.confirmarSenha || !userData.dataNascimento || !userData.cpfCnpj) {
        throw new Error("Por favor, preencha todos os campos.");
      }

      if (userData.senha !== userData.confirmarSenha) {
        throw new Error("As senhas não coincidem.");
      }

      if (!userData.email.includes("@")) {
        throw new Error("Por favor, insira um email válido.");
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
        dataNascimento: dayjs(userData.dataNascimento).format("DD/MM/YYYY"),
        senhaCadastro: userData.senha,
        cpfCnpj: userData.cpfCnpj
      };

      const response = await axios.post(`${config.URL}cadastros/cadastrar`, data, { headers });
      console.log(response);
      setLoading(false);

      setTimeout(() => {
        navigate("/");
      }, 2000);

    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <div>
      <div className={`background ${loading ? "dark" : ""}`}></div>
      <div className={`cadastro-container ${loading ? "loading" : ""}`}>
        <img src={logo} alt="Logo" className="logo" />
        <h2><i className="fas fa-user-plus"></i> Cadastro</h2>
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
            type="text"
            name="cpfCnpj"
            value={userData.cpfCnpj}
            onChange={handleChange}
            placeholder="CPF ou CNPJ"
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
