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
    cpf: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isResettingPassword, setIsResettingPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === "dateOfBirth") {
      // Formatando a data de nascimento (DD/MM/AAAA)
      if (value.length <= 10) {
        formattedValue = value
          .replace(/\D/g, "") // Remove caracteres não numéricos
          .replace(/(\d{2})(\d)/, "$1/$2") // Adiciona a primeira barra
          .replace(/(\d{2})\/(\d{2})(\d{4})/, "$1/$2/$3"); // Garante o formato completo
      }
    } else if (name === "cpf") {
      // Formatando o CPF ou CNPJ
      const cleanValue = value.replace(/\D/g, ""); // Remove caracteres não numéricos
      if (cleanValue.length <= 11) {
        // Formatação para CPF
        formattedValue = cleanValue
          .replace(/(\d{3})(\d)/, "$1.$2") // Adiciona o primeiro ponto
          .replace(/(\d{3})(\d)/, "$1.$2") // Adiciona o segundo ponto
          .replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // Adiciona o hífen
      } else {
        // Formatação para CNPJ
        formattedValue = cleanValue
          .replace(/(\d{2})(\d)/, "$1.$2") // Adiciona o primeiro ponto
          .replace(/(\d{3})(\d)/, "$1.$2") // Adiciona o segundo ponto
          .replace(/(\d{3})(\d)/, "$1/$2") // Adiciona a barra
          .replace(/(\d{4})(\d)/, "$1-$2"); // Adiciona o hífen
      }
    }

    setCredentials({
      ...credentials,
      [name]: formattedValue
    });
  };

  const handleResetPassword = () => {
    setIsResettingPassword(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(`${config.URL}login/validar/${credentials.email}/${credentials.password}`);
      if (response.status === 200 && response.data === "ok") {
        setLoading(false);
        setTimeout(() => {
          navigate("/vendas");
        }, 1000);
      } else {
        setError("Usuário não cadastrado. Por favor, realize o cadastro antes de fazer o login.");
        setLoading(false);
      }
    } catch (error) {
      setError("Ocorreu um erro. Por favor, tente novamente mais tarde.");
      setLoading(false);
    }
  };

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    // Implementar lógica para resetar a senha com os dados fornecidos
    setError("");
    setIsResettingPassword(false);
  };

  return (
    <div>
      <div className={`background ${loading ? 'dark' : ''}`}></div>
      <div className="login-container">
        <img src={logo} alt="Logo da empresa" />
        <h2>Login</h2>
        {isResettingPassword ? (
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
            {error && <div className="error">{error}</div>}
            <button type="submit" disabled={loading}>
              {loading ? "Resetando..." : "Resetar Senha"}
            </button>
            <p>
              <Link to="#" onClick={() => setIsResettingPassword(false)}>Voltar para o Login</Link>
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
        <p>
          <Link to="#" onClick={handleResetPassword} className="link-transition">Esqueceu sua senha?</Link>
        </p>
        <p>
          Não tem cadastro? <Link to="/Cadastro" className="link-transition">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
