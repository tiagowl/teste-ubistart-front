import React from 'react';
import {AiOutlineClockCircle} from 'react-icons/ai';
import {BiUserCircle} from "react-icons/bi";
import '../Dashboard/style.css';

// import { Container } from './styles';

function Concluidos() {
  return (
    <>
    <div className="row">
        <div className="col-md-12" style={{marginBottom: "20px"}}>
            <h1 className="title">Concluídos</h1>
        </div>
    </div>
    <div className="row">
        
        <div className="task">
            <h1 className="task-title">Learn SVGator for Creating OWWW Animation Part 1</h1>
            <div className="task-informations">
                <span class="badge bg-light text-dark"><AiOutlineClockCircle style={{marginRight: "5px"}} />Mar 26</span>
                <BiUserCircle fontSize={"1.5rem"} />
            </div>
        </div>
        
    </div>
  </>
  );
}

export default Concluidos;