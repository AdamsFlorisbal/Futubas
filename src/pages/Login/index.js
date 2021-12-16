import React from "react";
import "./login.css";
import { MdEmail, MdLock } from "react-icons/md";

const Login = () => {
  return (
    <div className="login">
      <div className="login-logo">
        <img
          src="https://dbdzm869oupei.cloudfront.net/img/sticker/preview/10855.png"
          alt="Login App"
        />
      </div>
      <div className="login-form">
        <h1>Acessar a conta</h1>
        <div className="login-email">
          <MdEmail />
          <input type="text" placeholder="Digite seu email" />
        </div>
        <div className="login-senha">
        <MdLock />
          <input type="text" placeholder="Digite sua senha" />
        </div>

        <button type="submit">Entrar</button>

        <h4>Não tenho conta!</h4>

        <button type="submit">Cadastrar</button>
      </div>
    </div>
  );
};

export default Login;
