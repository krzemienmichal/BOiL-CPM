import React from "react";
import {Form, Row, Col, Button} from "react-bootstrap"
import {SyntheticEvent, useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styling/Inputs.css"
import Activity from '../services/model'

import { createActivitiesArray, createNamesArray } from "../utilities/utilities";

const Inputs = (props: {  tasks: Array<Activity>, setTasks: (t:Array<Activity>) => void, setData: (t:Array<Array<any>>) => void,  calc: number, setCalc: (t:number) => void,}) => {
    const [errMsg, setErrMsg] = useState("")
    const [taskName, setTaskName] = useState("")
    const [duration, setDuration] = useState(0)
    const [predecessors, setPredecessors] = useState("")
    function daysToMilliseconds(days: number) {
      return days * 24 * 60 * 60 * 1000;
    }
    let data : Array<Activity>
    const handleData = () => {
      let handledData = []
        for (let i=0;i<data.length ;i++){
            let prev = null
            let prevArr = createNamesArray(data[i].previous_activity)
            if(prevArr.join(",") !==""){
              prev =prevArr.join(",")
            }
            let temp = []
            temp.push(data[i].name)
            temp.push(data[i].name)
            temp.push(null)
            temp.push(null)
            temp.push(null)
            temp.push(daysToMilliseconds(data[i].duration))
            temp.push(null)
            temp.push(prev)
            handledData.push(temp)
        }
       props.setData(handledData)
        
      }
    const submit = async (e: SyntheticEvent) => {
        let taskid = 0;
        if (props.tasks.length !==0){
          taskid = props.tasks[props.tasks.length-1].id+1
        }
        var splitted = predecessors.split(", ", );
        var pred_activities = createActivitiesArray(props.tasks, splitted);
        var __splitted = splitted;
        if(__splitted[0]===""){__splitted.pop()}
        if(__splitted.length === pred_activities.length)
        {
            // console.log(pred_activities)

            setErrMsg("")
            props.setTasks( [...props.tasks, {id:taskid, name: taskName, duration: duration, previous_activity: pred_activities, next_activity: new Array<Activity>(0), es:0, ef:0, ls:0, lf:0, t_diff: 0, is_critical: false}])

        }
        else{
            setErrMsg("Invalid predecessors")
        }
        data = [ ...props.tasks, {id:taskid, name: taskName, duration: duration, previous_activity: pred_activities, next_activity: new Array<Activity>(0), es:0, ef:0, ls:0, lf:0, t_diff: 0, is_critical: false}]
        handleData()
        e.preventDefault();
        setTaskName("")
        setDuration(0)
        setPredecessors("")

      }
    const calculate = async (e: SyntheticEvent) => {
        
      
        e.preventDefault();
        props.setCalc(props.calc*-1)
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
            <Form.Control required placeholder="Task name" value={taskName}  />
          </Col> 

          <Col id = "input-task" variant="outline-secondary"  onChange={e => handleDurationInput(e)}> 
            <Form.Control required placeholder="Duration" value={duration || ""} />
          </Col>

          <Col id = "input-task" variant="outline-secondary"  onChange={e =>handlePredecessorsInput(e)}>
            <Form.Control placeholder="Predecessors" value={predecessors}/>
          </Col>
         <Col id = "input-task">
         <Button type="submit" variant="light">Add task</Button>
         </Col>
        </Row>
        <Row xs="auto">
        <Button onClick={calculate} variant="light">Calculate </Button>
            <p style={{color:'red'}}>{errMsg}</p>
        </Row>
      </Form>
    );
  }
  export { Inputs };

