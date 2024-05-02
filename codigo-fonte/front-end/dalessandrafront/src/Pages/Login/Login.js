import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../estilo/login.css";
import config from "../../config/config";
import logo from "../../img/logo.png";

function Login() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    dateOfBirth: "",
    cpf: "",
    newEmail: "",
    newPassword: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resetType, setResetType] = useState(""); // "email" ou "senha"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleResetPassword = (type) => {
    setResetType(type);
    setError(""); // Limpar mensagens de erro ao iniciar a redefinição
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Lógica para validar e efetuar login
      setLoading(false); // Simulação de sucesso para demonstração
      setTimeout(() => {
        navigate("/vendas");
      }, 1000);
    } catch (error) {
      setError("Ocorreu um erro. Por favor, tente novamente mais tarde.");
      setLoading(false);
    }
  };

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      let endpoint = "";
      let requestData = {};

      if (resetType === "email") {
        // Redefinir e-mail
        endpoint = `${config.URL}login/resetar-email`;
        requestData = {
          dateOfBirth: credentials.dateOfBirth,
          cpf: credentials.cpf,
          newEmail: credentials.newEmail
        };
      } else if (resetType === "senha") {
        // Redefinir senha
        endpoint = `${config.URL}login/resetar-senha`;
        requestData = {
          dateOfBirth: credentials.dateOfBirth,
          cpf: credentials.cpf,
          newPassword: credentials.newPassword
        };
      }

      const response = await axios.post(endpoint, requestData);

      if (response.status === 200 && response.data.success) {
        setError(`Sucesso! ${resetType === "email" ? "E-mail" : "Senha"} redefinido(a).`);
      } else {
        setError(`Falha ao redefinir ${resetType === "email" ? "e-mail" : "senha"}. Verifique os dados e tente novamente.`);
      }

      setLoading(false);
    } catch (error) {
      setError("Ocorreu um erro ao redefinir. Tente novamente mais tarde.");
      setLoading(false);
    }
  };

  return (
    <div>
      <div className={`background ${loading ? 'dark' : ''}`}></div>
      <div className="login-container">
        <img src={logo} alt="Logo da empresa" />
        <h2>Login</h2>
        {resetType ? (
          <form onSubmit={handleResetSubmit}>
            <input
              type="text"
              name="dateOfBirth"
              value={credentials.dateOfBirth}
              onChange={handleChange}
              placeholder="Data de Nascimento (DD/MM/AAAA)"
              maxLength="10"
              required
            />
            <input
              type="text"
              name="cpf"
              value={credentials.cpf}
              onChange={handleChange}
              placeholder="CPF ou CNPJ"
              maxLength="18"
              required
            />
            {resetType === "email" ? (
              <input
                type="email"
                name="newEmail"
                value={credentials.newEmail}
                onChange={handleChange}
                placeholder="Novo E-mail"
                required
              />
            ) : (
              <input
                type="password"
                name="newPassword"
                value={credentials.newPassword}
                onChange={handleChange}
                placeholder="Nova Senha"
                required
              />
            )}
            {error && <div className="error">{error}</div>}
            <button type="submit" disabled={loading}>
              {loading ? "Aguarde..." : `Redefinir ${resetType === "email" ? "E-mail" : "Senha"}`}
            </button>
            <p>
              <Link to="#" onClick={() => setResetType("")}>Cancelar</Link>
            </p>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Senha"
              required
            />
            {error && <div className="error">{error}</div>}
            <button type="submit" disabled={loading}>
              {loading ? "Carregando..." : "Entrar"}
            </button>
          </form>
        )}
        {!resetType && (
          <div>
            <p>
              <Link to="#" onClick={() => handleResetPassword("email")} className="link-transition">Esqueceu seu E-mail?</Link>
            </p>
            <p>
              <Link to="#" onClick={() => handleResetPassword("senha")} className="link-transition">Esqueceu sua Senha?</Link>
            </p>
            <p>
              Não tem cadastro? <Link to="/Cadastro" className="link-transition">Cadastre-se</Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
