import React, { Component } from "react";
import { Card, Button, Col, Image, Row } from "react-bootstrap";
import profilePic from "./profilePic.jpg";


class RightPanel extends Component {
    render() {
        return (
            <div className="bg-white mt-2 border rounded-2">
                <Card className="border-0">
                    <Card.Body>
                        <h4 className="mb-0">Suggested</h4>
                    </Card.Body>
                </Card>
                <Card className="rounded-0">
                    <Card.Body>
                        <Row>
                            <Col sm={2}>
                                <Image src={profilePic} roundedCircle style={{ width: "50px", height: "50px" }} />
                            </Col>
                            <Col sm={10} className="d-flex flex-column">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <Card.Title>User1</Card.Title>
                                        <Card.Text>@user1</Card.Text>
                                    </div>
                                    <Button variant="outline-primary" style={{ minWidth: "auto" }}>Follow</Button>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className="rounded-0">
                    <Card.Body>
                        <Row>
                            <Col sm={2}>
                                <Image src={profilePic} roundedCircle style={{ width: "50px", height: "50px" }} />
                            </Col>
                            <Col sm={10} className="d-flex flex-column">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <Card.Title>User2</Card.Title>
                                        <Card.Text>@user2</Card.Text>
                                    </div>
                                    <Button variant="outline-primary" style={{ minWidth: "auto" }}>Follow</Button>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default RightPanel;
