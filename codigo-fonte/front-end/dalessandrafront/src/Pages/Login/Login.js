import React, { useState } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import "../estilo/login.css";
import config from "../../config/config";
import logo from "../../img/logo.png";

function Login() {
  const navigate = useNavigate()
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  //const [errorMessage, setErrorMessage] = useState("");
  //const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };
  const teste = () =>{
      console.log("oi")
  }
  const handleSubmit =()=> {
    axios.get(`${config.URL}login/validar/${credentials.email}/${credentials.password}`)
    .then((response)=>{
      if(response.status == 200 && response.data =="ok"){
          console.log(response)
         
        return navigate("vendas")
      }
    })
    .catch((error)=>{
      console.log(error)
    })
  };

  return (
    <div>
      <div className="background"></div>
      <div className="login-container">
        <img src={logo} alt="Logo da empresa" />
        <h2>Login</h2>
        <form>
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
        
        </form>
        <button onClick={()=>handleSubmit()}>Entrar</button>
        <p>
          Não tem cadastro? <Link to="/Cadastro">Cadastre-se</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
