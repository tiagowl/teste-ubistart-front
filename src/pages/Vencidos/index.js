import React from 'react';
import {AiOutlineClockCircle} from 'react-icons/ai';
import {BiUserCircle} from "react-icons/bi";
import '../Dashboard/style.css';

// import { Container } from './styles';

function Vencidos() {
  return (
    <>
    <div className="row">
        <div className="col-md-12" style={{marginBottom: "20px"}}>
            <h1 className="title">Vencidos</h1>
        </div>
    </div>
    <div className="row">
        <div className="task">
            <h1 className="task-title">Benchmark Mobile Legend on Learning Diamond</h1>
            <div className="task-informations">
                <span class="badge bg-danger"><AiOutlineClockCircle style={{marginRight: "5px"}} />Mar 25</span>
                <BiUserCircle fontSize={"1.5rem"} />
            </div>
        </div>
        
    </div>
  </>
  );
}

export default Vencidos;