import React, { Component } from "react";
// import * as ReactBootstrap from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


class ProfileStats extends Component {
    render() {
        const { tweetsCount } = this.props; // Access the tweetsCount prop
        return (
            <div className="bg-white mt-1 align-items-center border">
                <Row className="justify-content-center">
                    <Col></Col>
                    <Col xs>
                        <Card className="text-center border-0">
                            <Card.Body>
                                <Card.Title>Tweets</Card.Title>
                                <Card.Text>{tweetsCount}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs>
                        <Card className="text-center border-0">
                            <Card.Body>
                                <Card.Title>Following</Card.Title>
                                <Card.Text>619</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs>
                        <Card className="text-center border-0">
                            <Card.Body>
                                <Card.Title>Followers</Card.Title>
                                <Card.Text>992</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs>
                        <Card className="text-center border-0">
                            <Card.Body>
                                <Card.Title>Likes</Card.Title>
                                <Card.Text>13k</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs></Col>
                </Row>
            </div>
        );
    }
}
export default ProfileStats;