import React, { Component } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import profilePic from "./profilePic.jpg";

class ProfileInfo extends Component {
    render() {
        return (
            <Container className="bg-white mt-2 border rounded-2">
                <Row className="align-items-center">
                    <Col className="text-center mt-3">
                        <Image src={profilePic} alt="Profile Picture" roundedCircle style={{ width: "150px", height: "150px" }} />
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col className="text-center">
                        <h2 className="font-weight-bold">Kronk</h2>
                        <p className="text-muted">@Kronk</p>
                        <p>
                            <a href="https://www.youtube.com/watch?v=QyrDgEz3DR0" target="_blank" rel="noopener noreferrer" className="text-muted">twitter.com/Kronk</a>
                        </p>
                        <p className="blue-text">Perth, WA</p>
                        <p className="blue-text">Joined Twitter - November 2020</p>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default ProfileInfo; 