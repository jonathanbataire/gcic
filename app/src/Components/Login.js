import React from 'react';
import '../css/Login.css'
import '../css/Header.css'
//import {Form,Button} from 'react-bootstrap'
//import { Form, Input, Button, Checkbox } from 'antd';
//import { UserOutlined,LockOutlined } from '@ant-design/icons';
import { Container,Col, Row,Form, Button, Card } from 'react-bootstrap';


function Login (){
    return (
        <Container fluid>
            <Row >
            <Col sm className="header">
                <h1>Gold Crest Investment Club</h1>
            </Col>
            </Row>
            <Row>
                <Col lg="4" style={{margin:'auto' }}>
                    <Card>
                        <Card.Header><h2>Login Here</h2></Card.Header>
                        <Card.Body>
                        <Form>
                            <Form.Group controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" />
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group>
                            <Button variant="primary" type="submit" block>
                                Sign-in
                            </Button><br/>
                            <p className="font-italic text-right">
                                <a href="#">forgot password?</a>
                            </p>
                        </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;