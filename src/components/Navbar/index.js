import React from 'react';
import { FaProductHunt, FaSearch } from 'react-icons/fa';
import './style.css';

// import { Container } from './styles';

function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" style={{marginRight: "40px", marginLeft: "20px"}} href="/"><FaProductHunt/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <form className="d-flex" style={{marginRight: "40px"}}>
                        <input style={{backgroundColor: "#E4ECEC ", border: "none", borderRadius: "4px", marginTop: "10px"}} className="form-control me-2" type="search" placeholder="Search Product" aria-label="Search" />
                        <button className="btn btn-dark" style={{height: "37px", marginTop: "10px", width: "50px"}} type="submit"><FaSearch/></button>
                    </form>

                    <li className="nav-item">
                        <a className="nav-link active" style={{marginTop: "10px"}} aria-current="page" href="/tasks">Dashboard</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" style={{marginTop: "10px"}} aria-current="page" href="/tasks/concluidos">Concluídos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" style={{marginTop: "10px"}} aria-current="page" href="/tasks/nao-concluidos">Não Concluídos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" style={{marginTop: "10px"}} aria-current="page" href="/tasks/vencidos">Vencidos</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  );
}

export default Navbar;