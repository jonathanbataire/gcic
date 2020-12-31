import React, { useState } from 'react';
import '../css/Home.css';
import PaymentRegistration from './PaymentRegistration';
import Payments from './Payments';
import Loans from './Loans';
import useWindowDimensions from '../Hooks/useWindowDimensions';

import { Button, Col, Collapse, Container, Row } from 'react-bootstrap';

function Home (){
    const [openPay, setOpenPay] = useState(false);
    const [openLoan, setOpenLoan] = useState(false);
    const { width} = useWindowDimensions();
    
    const summaries = ()=>{
        if (width <= 576) {
            return (
                <div>
                <Collapse in={openPay}>
                    <Col className="" sm={12}> <Payments /> </Col>
                </Collapse>
                <Collapse in={openLoan}>
                <Col className="" sm={12}> <Loans /> </Col>
                </Collapse>
                </div>
            );        
        }
        return (
            <div>
                <Col className="" sm={12}> <Payments /> </Col>
                <Col className="" sm={12}> <Loans /> </Col>
            </div>
        );
    }
    
    return (
        <Container className="" >
            <Row>
                <Col sm={{ order: '12' }} xs={12} md={5}>
                    <Row>
                        <Col className="mobile">
                            <a
                            href='#' style={{padding:'10px'}}
                            onClick={() => {setOpenPay(!openPay); setOpenLoan(false); }}
                            aria-controls="collapse-payments"
                            aria-expanded={openPay}
                            >
                                payments
                            </a> 
                            <a
                                href='#' style={{padding:'10px'}}
                                onClick={() => {setOpenLoan(!openLoan); setOpenPay(false); }}
                                aria-controls="collapse-loans"
                                aria-expanded={openLoan}
                            >
                                Loans
                            </a>
                        </Col>
                        {summaries()}     
                    </Row>
                </Col>
                <Col className="" sm={{ order: '1' }} xs={12} md={7}> <PaymentRegistration /> </Col>
            </Row>
        </Container>
    );
}

export default Home;