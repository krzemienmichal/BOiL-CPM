import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {Inputs} from './components/Inputs';
import {TaskList} from './components/TaskList'
import {EventList} from './components/EventsList'
import {Results} from './components/Results'
import { NavbarCustom } from './components/Navbar';
import {useState} from  'react'
import Activity from "./services/model"
import CPMEvent from './services/CPMEvent';



function App() {
  const defaultActivity: Activity = {
    id: 0,
    name: "",
    duration: 1,
    previous_activity: [],
    next_activity: [],
    es: 0,
    ef: 0,
    ls: 0,
    lf: 0,
    t_diff: 0,
    is_critical: false,

  };
  const [tasks, setTasks] = useState<Array<Activity>>([])
  const [cpmEvent, setCPMEvents] = useState<Array<CPMEvent>>([])
  // var firstEvent = [{id:1, t_begin: 0, t_end:0, t_diff:0, prev_activities: new Array<Activity>(0)}]

  // useEffect(() => setCPMEvents(firstEvent);

  return (
    <div className="App">
      <div className = "navbar-container">
        <NavbarCustom/>
        
      </div>
      <div className="content-container">
        <div className="tasks-container">
          <div className="tasksList">
          
              {tasks.map((tasK) => (<TaskList  key= {tasK.id} task={tasK} tasks ={tasks} setTasks={setTasks} />))}
          
          </div>
          
          <div className="taskInput">
          <hr className="taskline"/>
            <Inputs tasks = {tasks} setTasks={setTasks} /> 
        
          </div>
        </div>

        <div className="result-container">


          <div className="eventsList">
            {cpmEvent.map((cpmEvenT) => (<EventList  key= {cpmEvenT.id} cpmEvent={cpmEvenT}/>))}
            <Results tasks = {tasks} cpmEvents={cpmEvent} setCPMEvents={setCPMEvents}/>
          </div>
          {/*<div className="resultsList">*/}
          {/*  <span></span>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
}

export default App;
