import React from 'react';
import {AiOutlineClockCircle} from 'react-icons/ai';
import {BiUserCircle} from "react-icons/bi";
import '../Dashboard/style.css';

// import { Container } from './styles';

function NaoConcluidos() {
  return (
    <>
    <div className="row">
        <div className="col-md-12" style={{marginBottom: "20px"}}>
            <h1 className="title">Não-concluídos</h1>
        </div>
    </div>
    <div className="row">
        <div className="task">
            <h1 className="task-title">Create Prototype Mobile for Get Notification in Principie</h1>
            <div className="task-informations">
                <span class="badge bg-warning"><AiOutlineClockCircle style={{marginRight: "5px"}} />Mar 26</span>
                <BiUserCircle fontSize={"1.5rem"} />
            </div>
        </div>

        <div className="task">
            <h1 className="task-title">Learn SVGator for creating OWWW Animation Part 2</h1>
            <div className="task-informations">
                <span class="badge bg-warning"><AiOutlineClockCircle style={{marginRight: "5px"}} />Mar 26</span>
                <BiUserCircle fontSize={"1.5rem"} />
            </div>
        </div>
    </div>
  </>
  );
}

export default NaoConcluidos;