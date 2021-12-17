import React from 'react';
import './style.css';
import {AiOutlineClockCircle} from 'react-icons/ai';
import {BiUserCircle} from "react-icons/bi";

// import { Container } from './styles';

function Dashboard() {
  return (
      <>
        <div className="row">
            <div className="col-md-12">
                <h1 className="title">Tasks</h1>
            </div>
        </div>
        <div className="row" style={{marginBottom: "20px"}}>
            <div className="col-md-12">
                <button className="btn btn-dark" ><a style={{textDecoration: "none", color: "white"}} href="/tasks/cadastroTarefa">Cadastrar</a></button>
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
                <h1 className="task-title">Learn SVGator for Creating OWWW Animation Part 1</h1>
                <div className="task-informations">
                    <span class="badge bg-light text-dark"><AiOutlineClockCircle style={{marginRight: "5px"}} />Mar 26</span>
                    <BiUserCircle fontSize={"1.5rem"} />
                </div>
            </div>

            <div className="task">
                <h1 className="task-title">Draw and animate illustration for OWWW 4th anniversary</h1>
                <div className="task-informations">
                    <span class="badge bg-success"><AiOutlineClockCircle style={{marginRight: "5px"}} />Mar 30</span>
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

            <div className="task">
                <h1 className="task-title">Benchmark Mobile Legend on Learning Diamond</h1>
                <div className="task-informations">
                    <span class="badge bg-danger"><AiOutlineClockCircle style={{marginRight: "5px"}} />Mar 25</span>
                    <BiUserCircle fontSize={"1.5rem"} />
                </div>
            </div>

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

export default Dashboard;