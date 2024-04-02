import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import "../estilo/login.css";
import config from "../../config/config";
import logo from "../../img/logo.png";

function Login() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.URL}/login`, credentials);
      // Lógica para lidar com a resposta do servidor após o login
      history.push("/vendas"); // Redirecionar após o login bem-sucedido
    } catch (error) {
      setErrorMessage("Email ou senha incorretos.");
    }
  };

  return (
    <div>
      <div className="background"></div>
      <div className="login-container">
        <img src={logo} alt="Logo da empresa" />
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Senha"
          />
          <button type="submit">Entrar</button>
        </form>
        <p className="error-message">{errorMessage}</p>
        <p>
          Não tem cadastro? <Link to="/Cadastro">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
