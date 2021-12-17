import React from 'react';
import {FaProductHunt} from 'react-icons/fa';
import '../Login/style.css';

// import { Container } from './styles';

function Cadastro() {
  return (
    <main>
          <FaProductHunt  style={{marginLeft: "670px", marginBottom: "20px"}} fontSize={"2rem"} />
          <form className="login-form card">
            <h1>Cadastrar</h1>
            <input type="text" placeholder="Nome de usuário" className="form-control form-control-lg" />
            <input type="email" placeholder="Email" className="form-control form-control-lg" />
            <input type="password" placeholder="Senha" className="form-control form-control-lg" />
            <button style={{width: "150px"}} class="btn btn-lg btn-dark" ><a style={{color: "white", textDecoration: "none"}} href="/">Cadastrar</a></button>
          </form>
      </main>
  );
}

export default Cadastro;