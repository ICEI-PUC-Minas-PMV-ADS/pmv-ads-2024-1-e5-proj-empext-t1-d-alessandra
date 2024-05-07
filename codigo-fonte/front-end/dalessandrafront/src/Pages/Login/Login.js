import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../estilo/login.css";
import config from "../../config/config";
import logo from "../../img/logo.png";
import dayjs from "dayjs";
import InputMask from "react-input-mask";
import { Alert } from "@material-tailwind/react";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [resetType, setResetType] = useState(""); 
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    dateOfBirth: "",
    cpfOrCnpj: "", 
    newEmail: "",
    newPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleResetPassword = (type) => {
    setResetType(type);
    setError(""); 
  };

  const handleSubmit = () => {
    console.log(credentials.cpfOrCnpj)
    const cpfCnpjMascarado = maskCpfCnpj(credentials.cpfOrCnpj)
    console.log(cpfCnpjMascarado)
    axios
      .put(
        `${config.URL}login/updateSenha/${cpfCnpjMascarado}/${credentials.newPassword}?dataNascimento=${dayjs(credentials.dateOfBirth).format("DD/MM/YYYY")}`)
      .then((response) => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validarLoging = () => {
    axios
      .get(
        `${config.URL}login/validar?email=${credentials.email}&senha=${credentials.password}`
      )
      .then((response) => {
        if (response.status === 200 && response.data === "ok") {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            navigate("/vendas");
          }, 1000);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const maskCpfCnpj = (e) => {
    const cleanedValue = e.replace(/\D/g, '');
  
    if (cleanedValue.length === 11) {
      return cleanedValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    } else if (cleanedValue.length === 14) {
      return cleanedValue.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    } else if(cleanedValue.length===10 || cleanedValue.length>14) {
      return alert("Cpf ou CNPJ Invalido");
    }

  };

  return (
    <div>
      <div className={`background ${loading ? "dark" : ""}`}></div>
      <div className="login-container">
        <img src={logo} alt="Logo da empresa" />
        <h2>Login</h2>
        {resetType ? (
          <div>
            <input
              type="date"
              name="dateOfBirth"
              value={credentials.dateOfBirth}
              onChange={handleChange}
              placeholder="Data de Nascimento (DD/MM/AAAA)"
              maxLength="10"
              required
            />
            <input
              type="text"
              name="cpfOrCnpj"
              value={maskCpfCnpj(credentials.cpfOrCnpj)}
              onChange={handleChange}
              placeholder="CPF ou CNPJ"
              required
            />
            <input
              type="password"
              name="newPassword"
              value={credentials.newPassword}
              onChange={handleChange}
              placeholder="Nova Senha"
              required
            />
            {error && <div className="error">{error}</div>}
            <button type="submit" disabled={loading} onClick={handleSubmit}>
              {loading ? "Aguarde..." : `Redefinir ${resetType === "email" ? "E-mail" : "Senha"}`}
            </button>
            <p>
              <Link to="#" onClick={() => setResetType("")}>
                Cancelar
              </Link>
            </p>
          </div>
        ) : (
          <div>
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
            <button type="submit" disabled={loading} onClick={validarLoging}>
              {loading ? "Carregando..." : "Entrar"}
            </button>
          </div>
        )}
        {!resetType && (
          <div>
            <p>
              <Link to="#" onClick={() => handleResetPassword("senha")} className="link-transition">
                Esqueceu sua Senha?
              </Link>
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
