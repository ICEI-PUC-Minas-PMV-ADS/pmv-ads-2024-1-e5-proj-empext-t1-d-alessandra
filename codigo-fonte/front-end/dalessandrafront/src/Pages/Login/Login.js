// JS
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
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [transitioning, setTransitioning] = useState(false);
  const [zoomOut, setZoomOut] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${config.URL}login/validar/${credentials.email}/${credentials.password}`);
      if (response.status === 200 && response.data === "ok") {
        setLoading(false);
        setTransitioning(true);
        setZoomOut(true);
        setTimeout(() => {
          navigate("/vendas");
          setTransitioning(false);
        }, 1000);
      }
    } catch (error) {
      setError("Credenciais inválidas. Por favor, tente novamente.");
      setLoading(false);
    }
  };

  return (
    <div>
      <div className={`background ${loading ? 'dark' : ''}`}></div>
      <div className={`login-container ${transitioning ? 'transitioning' : ''}`}>
        <img src={logo} alt="Logo da empresa" className={zoomOut ? 'zoom-out' : ''} />
        <h2>Login</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
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
          {loading && <div className="loading"></div>}
        </form>
        <p>
          Não tem cadastro? <Link to="/Cadastro" className="link-transition">Cadastre-se</Link>
        </p>

      </div>
    </div>
  );
}

export default Login;
