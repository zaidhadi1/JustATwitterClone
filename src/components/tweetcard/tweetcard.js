import React, { Component } from "react";
import { Card, Image, Col, Row, Button } from "react-bootstrap";
import profilePic from "./profilePic.jpg"; // Import your profile picture

class TweetCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            username: this.props.username,
            date: this.props.date,
            tweetDesc: this.props.tweetDesc
        };
    }

    render() {
        return (
            <Card className="mt-2">
                <Card.Body>
                    {/* Row for name, Twitter handle, dash, and date posted */}
                    <Row>
                        <Col xs={2}>
                            <div className="d-flex align-items-center mt-1">
                                <Image src={profilePic} roundedCircle style={{ width: "50px", height: "50px" }} />
                            </div>
                        </Col>
                        <Col md={8}><p><strong>{this.state.name}</strong> {this.state.username} - {this.state.date}</p></Col>
                        <Col xs={2}><span><Button onClick={() => this.props.onDelete(this.props.id)}
                            variant="link" className="float-right">x</Button></span></Col>
                    </Row>
                    {/* Row for tweet content */}
                    <Row>
                        <Col xs={2}></Col>
                        <Col xs={10}>
                            <p>{this.state.tweetDesc}</p>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}

export default TweetCard;
