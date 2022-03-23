import React from "react";
import {Form, Row, Col, Button} from "react-bootstrap"
import {SyntheticEvent, useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styling/Results.css"
import Activity from '../services/model'

const Results = (props: {  tasks: Array<Activity>, setTasks: (t:Array<Activity>) => void,}) => {
    
    var maxTime = 10;
    var minTime = 1;
    var criticalPath = ["a", "b", "c"]
    return (
        <span className = "results-span">
            <p className = "results-paragraph"> Max time = {maxTime}</p>
            <p className = "results-paragraph"> Min time = {minTime}</p>
            <p className = "results-paragraph"> Critical path = {criticalPath.join(", ")}</p>
        </span>
    );
  }
  export { Results };

