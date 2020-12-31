import React from 'react';
import '../css/Home.css'
import PaymentRegistration from './PaymentRegistration'
import Payments from './Payments'
import Loans from './Loans'
import { Col, Container, Row } from 'react-bootstrap';

function Home (){
    return (
        <Container className="" >
            <Row>
                <Col className="" xs={12} md={7}> <PaymentRegistration /> </Col>
                <Col xs={12} md={5}>
                    <Row>
                        <Col className="" sm={12}> <Payments /> </Col>
                        <Col className="" sm={12}> <Loans /> </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;