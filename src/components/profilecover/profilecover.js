import banner from './profilecover.png';
import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";

class ProfileCover extends Component {
    render() {
        return (
            <Container className="bg-primary text-white d-flex align-items-center justify-content-center">
                <Image src={banner} alt="Profile Cover" fluid className="center-image" />
            </Container>
        );
    }
}

export default ProfileCover;
