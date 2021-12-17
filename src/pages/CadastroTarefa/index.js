import React from 'react';

// import { Container } from './styles';
import "./style.css";

function CadastroTarefa() {
  return (
      <>
        <div className="row">
            <div className="col-md-12">
                <h1 style={{fontSize: "1.9rem"}} >Cadastrar</h1>
            </div>
        </div>
        <div className="row" >
            <form className="cadastroTarefa card">
                <input type="text" placeholder="Titulo" className="form-control form-control-lg" />
                <textarea className="form-control" cols="30" rows="10">Descrição</textarea>
                <input type="date" className=" form-control form-control-lg" />
                <button className="btn btn-dark"><a style={{color: "white", textDecoration: "none"}} href="/tasks">Cadastrar</a></button>
            </form>
        </div>
      </>
  );
}

export default CadastroTarefa;