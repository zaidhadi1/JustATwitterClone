import React, { Component } from "react";
import { Card, Button, Image, Form, Col, Row } from "react-bootstrap";
import profilePic from "./profilePic.jpg";

class NewTweet extends Component {
    constructor() {
        super();
        this.state = {
            tweetDesc: "" // Initialize tweet description state
        };
    }

    /*Different solution to the provided one,
    since I didn't want to change my HTML design
    Also validates that tweet desc has something in it before posting
    */

    handleTweetDescChange = (e) => {
        e.preventDefault();
        const tweetDesc = e.target.value;
        this.setState({ tweetDesc }); // Update tweet description state
    }

    handleTweetButtonClick = (e) => {
        e.preventDefault();
        if (this.state.tweetDesc.length > 0) { // Check if tweet description has a length greater than 0
            this.props.onNewTweet(this.state.tweetDesc); // Call onNewTweet event with tweet description from state
        } else {
            // Optionally, you can show a message or perform any other action when the tweet description is empty
            console.log('Tweet description is empty.');
        }
    }

    render() {
        return (
            <Card className="bg-white mt-2">
                <Card.Body>
                    <Row>
                        <Col xs={2}>
                            <div className="d-flex align-items-center mb-3 mt-1">
                                <Image src={profilePic} roundedCircle style={{ width: "50px", height: "50px" }} />
                            </div>
                        </Col>
                        <Col lg={10}>
                            <Form.Group controlId="tweetText">
                                <Form.Control as="textarea" rows={4} placeholder="What's happening?" onChange={this.handleTweetDescChange} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-right">
                        <Col lg={10}></Col>
                        <Col xs={2}>
                            <Button className='mt-2 d-flex' variant="primary" onClick={this.handleTweetButtonClick}>Tweet</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}

export default NewTweet;
