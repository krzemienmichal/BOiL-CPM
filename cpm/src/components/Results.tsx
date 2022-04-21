import React, { useEffect } from "react";
import {Form, Row, Col, Button} from "react-bootstrap"
import {SyntheticEvent, useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styling/Results.css"
import Activity from '../services/model'
import CPMEvent from "../services/CPMEvent";
import {solveCPM } from "../services/cpmMetod";
// import {calculateBeginTime, createEventList } from "../services/cpmMetod";

const Results = (props: {  criticalTime: number, criticalPath: Array<string>,} ) => {

    // props.tasks.forEach((item)=>{
    //     if(item.previous_activity.length == 0)
    //     let x = props.cpmEvents.find((t:CPMEvent)=> t.p)
    // })
    // var eventList = createEventList(props.tasks)
    // console.log(calculateBeginTime(eventList))
    // console.log(eventList)
    

    // useEffect(()=> props.setCPMEvents(eventList), props.cpmEvents)

    
    // props.setCPMEvents(eventArray)
    return (
        <span className = "results-span">
              
            <h1 className = "results-paragraph"> Final Results:</h1>
            <ul>
            <li className = "results-paragraph"> Critical time = {props.criticalTime}</li>
         
            <li className = "results-paragraph"> Critical path = {props.criticalPath.join(", ")}</li>
            </ul>
        </span>
    );
  }
  export { Results };

