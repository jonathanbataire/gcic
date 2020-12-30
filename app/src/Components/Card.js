import React from 'react';
import {Form,Button, Card,Col} from 'react-bootstrap'
import '../css/Card.css'

function CardCustom ({title,content,width}){
    return (
        <div className="wrapper">
        <Card className="" style={{ width: width }}>
                <Card.Header>{ title }</Card.Header>
                <Card.Body>
                    { content }
                </Card.Body>
        </Card>
        </div>
        
    );
}

export default CardCustom;