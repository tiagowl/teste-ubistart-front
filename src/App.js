import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Tasks from './pages/Tasks';
import Cadastro from './pages/Cadastro';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="tasks/*" element={<Tasks/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
