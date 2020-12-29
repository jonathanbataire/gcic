import React, { useEffect, useState } from 'react';
import { getToken } from '../Services/authenticate'
import '../css/Login.css';
import { Container,Col, Row,Form, Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Login ({ setToken }){
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [remember, setRemember] = useState();
    const [validated, setValidated] = useState(false);


    /*useEffect(() => {
        let mounted = true;
        getToken({username, password})
          .then(token => {
            if(mounted) {
              setToken(token)
            }
          })
        return () => mounted = false;
      }, [])*/

  const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }else{
            const token = await getToken({
                username,
                password
              });
              setToken(token);
        }

        setValidated(true);
    };
    return (
        <div className="bg-img">
            <Container className="content" fluid>
            <Row >
            <Col sm className="header blur">
                <h1>Gold Crest Investment Club</h1>
            </Col>
            </Row>
            <Row className="login">
                <Col lg="4" style={{margin:'auto', height:'100 vh' }}>
                    <Card>
                        <Card.Header><h2>Login Here</h2></Card.Header>
                        <Card.Body>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group controlId="username">
                                <Form.Label>Username</Form.Label>
                                <Form.Control required type="text" placeholder="Enter username" 
                                    onChange={e => setUserName(e.target.value)} />
                                <Form.Control.Feedback type="invalid">
                                    Please enter username.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required type="password" placeholder="Enter password" 
                                    onChange={e => setPassword(e.target.value)} />
                                <Form.Control.Feedback type="invalid">
                                    Please enter password.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="remember">
                                <Form.Check type="checkbox" label="Remember me" onChange={e => setRemember(e.target.value)}/>
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
        </div>
    );
}


Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }

export default Login;