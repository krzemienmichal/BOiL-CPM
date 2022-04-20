import React from "react";
import {Form, Row, Col, Button} from "react-bootstrap"
import {SyntheticEvent, useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styling/Inputs.css"
import Activity from '../services/model'
import { createActivitiesArray } from "../utilities/utilities";

const Inputs = (props: {  tasks: Array<Activity>, setTasks: (t:Array<Activity>) => void,}) => {
    const [taskName, setTaskName] = useState("")
    const [duration, setDuration] = useState(0)
    const [predecessors, setPredecessors] = useState("")
  
    const submit = async (e: SyntheticEvent) => {
        let taskid = 0;
        if (props.tasks.length !==0){
          taskid = props.tasks[props.tasks.length-1].id+1
        }
        var splitted = predecessors.split(", ", );
        var pred_activities = createActivitiesArray(props.tasks, splitted);
        // console.log(pred_activities)
        e.preventDefault();
        props.setTasks( [...props.tasks, {id:taskid, name: taskName, duration: duration, previous_activity: pred_activities, next_activity: new Array<Activity>(0), es:0, ef:0, ls:0, lf:0, t_diff: 0, is_critical: false}])
        setTaskName("")
        setDuration(1)
        setPredecessors("")    
        // console.log(props.tasks)
      }
    const handleNameInput = (event: SyntheticEvent) => {
        //console.log("name input " +(event.target as HTMLInputElement).value )
        setTaskName((event.target as HTMLInputElement).value)
        
      }
    const handlePredecessorsInput = (event: SyntheticEvent) => {
       // console.log("Predecessor input " +(event.target as HTMLInputElement).value )
        setPredecessors((event.target as HTMLInputElement).value)
    
    }
    const handleDurationInput = (event: SyntheticEvent) => {
        //console.log("Duration input " +(event.target as HTMLInputElement).value )
         setDuration(parseInt((event.target as HTMLInputElement).value))
      }
    return (
        <Form id = "form-task" onSubmit={submit} >
        <Row xs="auto">

          <Col id = "input-task" variant="outline-secondary" onChange={e => handleNameInput(e)} >
            <Form.Control placeholder="Task name" value={taskName}  />
          </Col> 

          <Col id = "input-task" variant="outline-secondary"  onChange={e => handleDurationInput(e)}> 
            <Form.Control placeholder="Duration" value={duration || ""} />
          </Col>

          <Col id = "input-task" variant="outline-secondary"  onChange={e =>handlePredecessorsInput(e)}>
            <Form.Control placeholder="Predecessors" value={predecessors}/>
          </Col>
         <Col id = "input-task">
         <Button type="submit" variant="light">Add task</Button>
         </Col>
        </Row>
      </Form>
    );
  }
  export { Inputs };

