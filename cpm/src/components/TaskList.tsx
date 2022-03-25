import React from "react";
import {Form, Row, Col, Button} from "react-bootstrap"
import {SyntheticEvent, useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styling/TaskList.css"
import Activity from '../services/model'

const TaskList = (props: { task: Activity , tasks: Array<Activity> , setTasks: (t:Array<Activity>) => void,}) => {
  const [taskName, setTaskName] = useState(props.task.name)
  const [duration, setDuration] = useState(props.task.duration)
  // const name_array =
  const [predecessors, setPredecessors] = useState(props.task.previous_activity.join(", "))
  //  przejsc po tablicy previous activities, dodac nazwy do tablicy stringow i joinac z useState(name_array.join(", "))
  console.log(props.tasks)
  const submitDelete = async (e: SyntheticEvent) => {
   props.setTasks(props.tasks.filter((t:Activity) =>t.id !== props.task.id))
    e.preventDefault();
   
  }
  const submitUpdate = async (e: SyntheticEvent) => {
    var splitted = predecessors.split(", ", ); //tablica obiektow zamiast nazw
   props.setTasks( props.tasks.map((tasK) => {
      if(tasK.id === props.task.id){
        return {... tasK, name: taskName, duration : duration, previous_activity: splitted}
      }
      return tasK
    })
   );
    e.preventDefault();
  }

  //console.log( "new task " + props.task)
  const handleNameInput = (event: SyntheticEvent) => {
  //  console.log("name input " +(event.target as HTMLInputElement).value )
    setTaskName((event.target as HTMLInputElement).value)
    
  }
  const handlePredecessorsInput = (event: SyntheticEvent) => {
    //  console.log("Predecessor input " +(event.target as HTMLInputElement).value )
      setPredecessors((event.target as HTMLInputElement).value)

  }
  const handleDurationInput = (event: SyntheticEvent) => {
     // console.log("Duration input " +(event.target as HTMLInputElement).value )
       setDuration(parseInt((event.target as HTMLInputElement).value))
    }

  return( <Form id = "form-task-list" >
  <Row xs="auto">

    <Col id = "input-task-list" variant="light" onChange={e => handleNameInput(e)} >
      <Form.Control size="sm" placeholder={props.task.name} value={taskName} className="square border border-1" />
    </Col> 
 
    <Col id = "input-task-list" variant="light"  onChange={e => handleDurationInput(e)}> 
      <Form.Control size="sm" placeholder={props.task.duration.toString()} value={duration} className="square border border-1" />
    </Col>

    <Col id = "input-task-list" variant="light"   onChange={e =>handlePredecessorsInput(e)}>
      <Form.Control  size="sm" placeholder={props.task.name}  value={predecessors} className="square border border-1"/>
    </Col>
   <Col id = "input-task-list" >
   <Button size="sm" variant="light" className="square border border-1"  onClick={submitUpdate}> change</Button>
   </Col>
   <Col id = "input-task-list" >
   <Button size="sm"  variant="light" className="square border border-1 " onClick={submitDelete}> remove</Button>
   </Col>
  </Row>
</Form>)
  }
  
  export { TaskList };

