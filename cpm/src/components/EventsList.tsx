import React from "react";
import {Form, Row, Col, Button} from "react-bootstrap"
import {SyntheticEvent, useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styling/EventsList.css"
import Activity from '../services/model'



const EventList = (props: {cpmEvent: Activity}) => {
    return( 
    <tr>
      <td>{props.cpmEvent.name.toString()}</td>
      <td>{props.cpmEvent.duration.toString()}</td>
      <td>{props.cpmEvent.es.toString()}</td>
      <td>{props.cpmEvent.ef.toString()}</td>
      <td>{props.cpmEvent.ls.toString()}</td>
      <td>{props.cpmEvent.lf.toString()}</td>
      <td>{props.cpmEvent.t_diff.toString()}</td>
      <td>{props.cpmEvent.is_critical.toString()}</td>
    </tr>
    )
}

export { EventList };

