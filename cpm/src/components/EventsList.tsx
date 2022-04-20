import React from "react";
import {Form, Row, Col, Button} from "react-bootstrap"
import {SyntheticEvent, useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styling/EventsList.css"
import Activity from '../services/model'

const EventList = (props: {cpmEvent: Activity}) => {
    return( <Form id = "form-cpmevent-list" >
        <Row xs="auto">
            <Col id = "input-cpmevent-list" variant="light" >
                <Form.Control size="sm" placeholder={"Task = "  + props.cpmEvent.name.toString()} className="square border border-1"
                              disabled/>
            </Col>
            <Col id = "input-cpmevent-list" variant="light">
                <Form.Control size="sm" placeholder={"Duration = " + props.cpmEvent.duration.toString()} className="square border border-1"
                              disabled/>
            </Col>
            <Col id = "input-cpmevent-list" variant="light">
                <Form.Control size="sm"  placeholder={"ES = " + props.cpmEvent.es.toString()} className="square border border-1"
                              disabled/>
            </Col>
            <Col id = "input-cpmevent-list" variant="light">
                <Form.Control size="sm" placeholder={"EF = " + props.cpmEvent.ef.toString()} className="square border border-1"
                              disabled/>
            </Col>
        </Row>
        <Row xs="auto">
            <Col id = "input-cpmevent-list" variant="light" >
                <Form.Control size="sm" placeholder={"LS = "  + props.cpmEvent.ls.toString()} className="square border border-1"
                              disabled/>
            </Col>
            <Col id = "input-cpmevent-list" variant="light">
                <Form.Control size="sm" placeholder={"LF = " + props.cpmEvent.lf.toString()} className="square border border-1"
                              disabled/>
            </Col>
            <Col id = "input-cpmevent-list" variant="light">
                <Form.Control size="sm"  placeholder={"difference = " + props.cpmEvent.t_diff.toString()} className="square border border-1"
                              disabled/>
            </Col>
            <Col id = "input-cpmevent-list" variant="light">
                <Form.Control size="sm" placeholder={"critical = " + props.cpmEvent.is_critical.toString()} className="square border border-1"
                              disabled/>
            </Col>
        </Row>
    </Form>)
}

export { EventList };

