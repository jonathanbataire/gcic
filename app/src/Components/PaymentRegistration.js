import React from 'react';
import Card from './Card';
import {Form,Button,Col} from 'react-bootstrap'

function PaymentRegistration (){
    const RegForm = (
        <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Reason for Payment</Form.Label>
                <Form.Control as="select">
                    <option>select reason ...</option>
                    <option>Monthly Payment</option>
                    <option>Loan Payment</option>
                </Form.Control>
            </Form.Group>
            <Form.Row>
                <Col xs={12} xl={7}>
                    <Form.Group controlId="monthpayment">
                        <Form.Label>Month paid for</Form.Label>
                        <Form.Control as="select" defaultValue="Select month...">
                            <option>select month ...</option>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group>
                        <Form.File id="exampleFormControlFile1" label="Upload receipt" />
                    </Form.Group>
                </Col>
            </Form.Row>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Other comments</Form.Label>
                <Form.Control as="textarea" rows={4} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
    return (
        <Card content = {RegForm} title= {<h2>Payment Registration</h2>} width={"95%"}/>
    );
}

export default PaymentRegistration;