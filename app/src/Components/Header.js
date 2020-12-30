import React from 'react';
import '../css/Header.css';
import Nav from '../Components/Nav'
import avatar from '../avatar.png';
import { Col, Container, Row, Image } from 'react-bootstrap';

function Header ({ logOut }){
    return (
        <Container fluid>
            <Row className="header">
                <Col className="logo" xs={5} md={4} sm={{ order: 'first' }}>
                    GCIC-Logo
                </Col>
                <Col className="bd" xs={7} md={4} sm={{ order: 'last' }}>
                    <Row className="right-sd">
                        <Col className="user bd" sm={8} md={8}>Doe, John</Col>
                        <Col className="bd" sm={4} md={2}>
                            <Image className="profile" src={avatar} onClick={() => logOut()} roundedCircle/>
                        </Col>
                    </Row>
                </Col>
                <Col className="menu" xs={12} md={4} sm>
                    <Row>
                        <Col>Home</Col>
                        <Col>Loans</Col>
                        <Col >Records</Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
export default Header;