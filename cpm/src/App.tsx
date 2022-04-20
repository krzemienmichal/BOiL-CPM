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
import {solveCPM } from "./services/cpmMetod";


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
  const [cpmEvent, setCPMEvents] = useState<Array<Activity>>([])
  const [calc, setCalc] = useState<number>(1)
  const [Data, setData] = useState<Array<Array<any>>>([])
  const [criticalTime, setCriticalTime] = useState<number>(0)
  const [crititalPath, setCriticalPath] = useState<Array<string>>([])
  var mockcpm = [{id:1, t_begin: 10, t_end:20, t_diff:10},{id:2, t_begin: 5, t_end:123, t_diff:10},{id:3, t_begin: 6, t_end:11, t_diff:5}]
  
  useEffect(() =>{
    let tempTasks: Array<Activity> = tasks
    var crTime = solveCPM(tempTasks)
    let temp: Array<string> = []
    tasks.forEach(task =>{
      if (task.is_critical==true){
        temp.push(task.name)
      }
    })
    setTasks(tempTasks)
    setCPMEvents(tempTasks)
    setCriticalTime(crTime);
    setCriticalPath(temp)
    

  },[calc]);

  return (
    <div className="App">
      <div className = "navbar-container">
        <NavbarCustom Data ={Data} />
        
      </div>
      <div className="content-container">
        <div className="tasks-container">
          <div className="tasksList">
          
              {tasks.map((tasK) => (<TaskList  key= {tasK.id} task={tasK} tasks ={tasks} setTasks={setTasks} />))}
          
          </div>
          
          <div className="taskInput">
          <hr className="taskline"/>
            <Inputs tasks = {tasks} setTasks={setTasks} setData = {setData} calc = {calc} setCalc= {setCalc}/> 
        
          </div>
        </div>

        <div className="result-container">


          <div className="eventsList">
            {cpmEvent.map((cpmEvenT) => (<EventList  key= {cpmEvenT.id} cpmEvent={cpmEvenT}/>))}
            <Results criticalTime = {criticalTime} criticalPath = {crititalPath} />
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
