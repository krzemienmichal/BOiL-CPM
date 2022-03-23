import React from "react";
import {Form, Row, Col, Button} from "react-bootstrap"
import {SyntheticEvent, useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styling/EventsList.css"
import CPMEvent from '../services/CPMEvent'

const EventList = (props: {cpmEvent: CPMEvent}) => {
    return( <Form id = "form-cpmevent-list" >
        <Row xs="auto">
            <Col id = "input-cpmevent-list" variant="light" >
                <Form.Control placeholder={props.cpmEvent.id.toString()} className="square border border-1"
                              disabled/>
            </Col>
            <Col id = "input-cpmevent-list" variant="light">
                <Form.Control placeholder={props.cpmEvent.t_begin.toString()} className="square border border-1"
                              disabled/>
            </Col>
            <Col id = "input-cpmevent-list" variant="light">
                <Form.Control placeholder={props.cpmEvent.t_end.toString()} className="square border border-1"
                              disabled/>
            </Col>
            <Col id = "input-cpmevent-list" variant="light">
                <Form.Control placeholder={props.cpmEvent.t_diff.toString()} className="square border border-1"
                              disabled/>
            </Col>
        </Row>
    </Form>)
}

export { EventList };

