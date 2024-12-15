import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import logo from "./logo.png";

function Log() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "rede" && password === "pescados2024@") {
      setError(""); // Limpa qualquer mensagem de erro

      // Abre a página View em uma nova aba
      window.open("/view", "_blank");

      // Redireciona para a página Operator
      navigate("/operator");
    } else {
      setError("Usuário ou senha incorretos. Tente novamente.");
    }
  };

  return (
    <div className="logsen">
      <div className="div1">
        <div className="container1">
          <h1>LOGIN</h1>

          <label className="Login">
            Usuário:<br />
            <input
              name="Login"
              placeholder="Nome de Usuário ou Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
          </label>

          <label className="Senha">
            Senha:<br />
            <input
              type="password"
              placeholder="Digite sua Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
          </label>

          {error && <p className="error-message">{error}</p>}

          <div className="buttondiv">
            <button className="buttonlogin" onClick={handleLogin}>
              Acessar
            </button>
          </div>
        </div>
      </div>

      <div className="div2">
        <img src={logo} className="imglogo" alt="Logo" />
      </div>
    </div>
  );
}

export default Log;
