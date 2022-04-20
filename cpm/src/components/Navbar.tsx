import React from "react";
import {Form, Navbar, Container, Nav, Offcanvas, NavDropdown, FormControl, Row, Col, Button} from "react-bootstrap"
import {SyntheticEvent, useState, useEffect} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styling/Navbar.css"
import Activity from '../services/model'
import { Chart } from "react-google-charts";

const NavbarCustom = (props: { Data: Array<Array<any>>, }) => {

    const columns = [
        { type: "string", label: "Task ID" },
        { type: "string", label: "Task Name" },
        { type: "string", label: "Resource" },
        { type: "date", label: "Start Date" },
        { type: "date", label: "End Date" },
        { type: "number", label: "Duration" },
        { type: "number", label: "Percent Complete" },
        { type: "string", label: "Dependencies" },
      ];
    const Data =[columns, ...props.Data]
    
  
    const options = {
            height: props.Data.length *55,
            gantt: {
              defaultStartDateMillis: new Date(2021, 3, 18),
            },
          };
    
    
    return (
            <Navbar bg="dark" variant="dark"  expand={false}  fixed = "top" className = "main-nav">
            <Container fluid > 
                <Navbar.Brand href="#">Critical Path Method</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas className="navbar-side"
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                bg="dark"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel" className ="ChartTitle">Gantt Chart:</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body >
                <Chart
                chartType="Gantt"
                width="100%"
                height="50%"
                data={Data}
                options={options}
                />
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
    );
  }
  export { NavbarCustom };

