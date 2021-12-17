import React from 'react';
import './style.css';
import {FaProductHunt} from 'react-icons/fa';

// import { Container } from './styles';

function Login() {
  return (
      <main>
          <FaProductHunt  style={{marginLeft: "670px", marginBottom: "20px"}} fontSize={"2rem"} />
          <form className="login-form card">
            <h1>Entrar</h1>
            <input type="email" placeholder="Email" className="form-control form-control-lg" />
            <input type="password" placeholder="Senha" className="form-control form-control-lg" />
            <button class="btn btn-lg btn-dark" ><a style={{color: "white", textDecoration: "none"}} href="/tasks">Entrar</a></button>
            <a style={{color: "black", marginTop: "10px"}} href="/cadastro">Não possui cadastro? Cadastrar-se</a>
          </form>
      </main>
  );
}

export default Login;