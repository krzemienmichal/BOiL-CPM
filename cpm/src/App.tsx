import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Inputs} from './components/Inputs';
import {TaskList} from './components/TaskList'
import {Results} from './components/Results'
import {useState} from  'react'
import Activity from "./services/model"


function App() {
  const defaultActivity: Activity = {
    id: 0,
    name: "",
    duration: 1,
    previous_activity: [],
  };
  const [tasks, setTasks] = useState<Array<Activity>>([])
  return (
    <div className="App">
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

          <Results tasks = {tasks} setTasks={setTasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
