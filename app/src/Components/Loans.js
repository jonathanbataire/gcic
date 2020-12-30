import React from 'react';
import '../css/PaymentRegistration.css'
import Card from './Card'

function Loans (){
    const loans =(
        <blockquote className="blockquote mb-0">
      <p>
        {' '}No available loan records found.
        Pending loans will appear here.
        {' '}
      </p>
      <footer className="blockquote-footer">
        lastest loan payment <cite title="Source Title">dd/mm/yyyy</cite>
      </footer>
    </blockquote>
    );
    return (
        <Card title={<h4>Loans</h4>} content={loans} width={"95%"}/> 
    );
}

export default Loans;