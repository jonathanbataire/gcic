import React from 'react';
import '../css/PaymentRegistration.css'
import Card from './Card'

function Payments (){
    const latestPayments =(
        <blockquote className="blockquote mb-0">
      <p>
        {' '}No available payment records found.
        Payments will appear here once approved.
        {' '}
      </p>
      <footer className="blockquote-footer">
        lastest approval <cite title="Source Title">dd/mm/yyyy</cite>
      </footer>
    </blockquote>
    );
    return (
        <Card title={<h4>Latests payments</h4>} content={latestPayments} width={"95%"}/>
    );
}

export default Payments;