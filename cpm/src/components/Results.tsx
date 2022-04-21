import React, { useEffect } from "react";
import {Form, Row, Col, Button} from "react-bootstrap"
import {SyntheticEvent, useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styling/Results.css"
import Activity from '../services/model'
import {solveCPM } from "../services/cpmMetod";

const Results = (props: {  criticalTime: number, criticalPath: Array<string>,} ) => {
    return (
        <span className = "results-span" >
              
            <h1 className = "results-paragraph"> Final Results:</h1>
            <ul>
            <li className = "results-paragraph"> Critical time = {props.criticalTime}</li>
         
            <li className = "results-paragraph"> Critical path = {props.criticalPath.join(", ")}</li>
            </ul>
        </span>
    );
  }
  export { Results };

