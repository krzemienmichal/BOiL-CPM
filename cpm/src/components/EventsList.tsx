import React from "react";
import {Form, Row, Col, Button} from "react-bootstrap"
import {SyntheticEvent, useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styling/EventsList.css"
import Activity from '../services/model'



const EventList = (props: {cpmEvent: Activity}) => {
    return( 
    <tr >
      <td style={{color: props.cpmEvent.is_critical === true ? "red" : "black"}}>{props.cpmEvent.name.toString()}</td>
      <td style={{color: props.cpmEvent.is_critical === true ? "red" : "black"}}>{props.cpmEvent.duration.toString()}</td>
      <td style={{color: props.cpmEvent.is_critical === true ? "red" : "black"}}>{props.cpmEvent.es.toString()}</td>
      <td style={{color: props.cpmEvent.is_critical === true ? "red" : "black"}}>{props.cpmEvent.ef.toString()}</td>
      <td style={{color: props.cpmEvent.is_critical === true ? "red" : "black"}}>{props.cpmEvent.ls.toString()}</td>
      <td style={{color: props.cpmEvent.is_critical === true ? "red" : "black"}}>{props.cpmEvent.lf.toString()}</td>
      <td style={{color: props.cpmEvent.is_critical === true ? "red" : "black"}}>{props.cpmEvent.t_diff.toString()}</td>
      <td style={{color: props.cpmEvent.is_critical === true ? "red" : "black"}}>{props.cpmEvent.is_critical.toString()}</td>
    </tr>
    )
}

export { EventList };

