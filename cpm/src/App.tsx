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
  };
  const [tasks, setTasks] = useState<Array<Activity>>([])
  const [cpmEvent, setCPMEvents] = useState<Array<CPMEvent>>([])
  var mockcpm = [{id:1, t_begin: 10, t_end:20, t_diff:10},{id:2, t_begin: 5, t_end:123, t_diff:10},{id:3, t_begin: 6, t_end:11, t_diff:5}]

  useEffect(() => setCPMEvents(mockcpm),[]);

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
