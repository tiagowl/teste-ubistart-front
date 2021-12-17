import React from 'react';
import Navbar from '../../components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Dashboard from '../Dashboard';
import Concluidos from '../Concluidos';
import NaoConcluidos from '../Nao-concluidos';
import Vencidos from '../Vencidos';
import CadastroTarefa from '../CadastroTarefa';

// import { Container } from './styles';

function Tasks() {
  return (
      <>
        <Navbar/>
        <main>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Dashboard/>} />
                    <Route path="/concluidos" element={<Concluidos/>} />
                    <Route path="/nao-concluidos" element={<NaoConcluidos/>} />
                    <Route path="/vencidos" element={<Vencidos/>} />
                    <Route path="/cadastroTarefa" element={<CadastroTarefa/>} />
                </Routes>
            </div>
        </main>
      </>
  );
}

export default Tasks;