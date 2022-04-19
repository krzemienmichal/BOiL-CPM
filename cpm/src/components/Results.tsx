import React, { useEffect } from "react";
import {Form, Row, Col, Button} from "react-bootstrap"
import {SyntheticEvent, useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styling/Results.css"
import Activity from '../services/model'
import CPMEvent from "../services/CPMEvent";
// import {calculateBeginTime, createEventList } from "../services/cpmMetod";

const Results = (props: {  tasks: Array<Activity>,
    cpmEvents: Array<CPMEvent>, setCPMEvents:(t:Array<CPMEvent>) => void}) => {

    // props.tasks.forEach((item)=>{
    //     if(item.previous_activity.length == 0)
    //     let x = props.cpmEvents.find((t:CPMEvent)=> t.p)
    // })
    // var eventList = createEventList(props.tasks)
    // console.log(calculateBeginTime(eventList))
    // console.log(eventList)

    // useEffect(()=> props.setCPMEvents(eventList), props.cpmEvents)

    // console.log(eventList)
    var maxTime = 10;
    var minTime = 1;
    var criticalPath = ["a", "b", "c"]

    // props.setCPMEvents(eventArray)
    return (
        <span className = "results-span">
            <p className = "results-paragraph"> Max time = {maxTime}</p>
            <p className = "results-paragraph"> Min time = {minTime}</p>
            <p className = "results-paragraph"> Critical path = {criticalPath.join(", ")}</p>
        </span>
    );
  }
  export { Results };

