import React from 'react';
import '../css/Footer.css'
import { Col, Container, Row } from 'react-bootstrap'
function Footer (){
    return (
        <Container fluid>
        <Row className="footer">
            <Col xs={12}>
                <h7>GCIC © 2020 - Gold Crest Investment Club</h7>
            </Col>
        </Row>
        </Container>
    );
}

export default Footer;