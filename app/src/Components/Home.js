import React from 'react';
import '../css/Card.css'
import PaymentRegistration from './PaymentRegistration'
import Payments from './Payments'
import Loans from './Loans'

function Home (){
    return (
        <div className="main">
            <div className="left">
                <PaymentRegistration/>
            </div>
            <div className="stack">
                <div>
                    <Payments/>
                </div>
                <div>
                    <Loans/>
                </div>
            </div>
        </div>
    );
}

export default Home;