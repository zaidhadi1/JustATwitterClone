import React, { Component } from "react";

import Nav from "react-bootstrap/Nav";
import NavigationBar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";


class Navbar extends Component {
    render() {
        return (
            <Container className="bg-white container-fluid">
                <NavigationBar expand="lg">
                    <Col className="col-1 m-auto"></Col>
                    <Col className="col-3">
                        <Nav>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#moments">Moments</Nav.Link>
                            <Nav.Link href="#notifications">Notifications</Nav.Link>
                            <Nav.Link href="#messages">Messages</Nav.Link>
                        </Nav>
                    </Col>
                    <Col className="col-4 m-auto"></Col>
                    <Col className="col-3 d-flex align-items-center">
                        <Form>
                            <FormControl type="text" placeholder="Search Twitter" />
                        </Form>
                        <Button variant="primary" >Tweet</Button>
                    </Col>
                    <Col className="col-1 m-auto"></Col>
                </NavigationBar>
            </Container>
        );
    }
}

export default Navbar;


