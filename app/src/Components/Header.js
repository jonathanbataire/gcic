import React from 'react';
import '../css/Header.css';
import avatar from '../avatar.png';
import {getHome, getToken} from '../Services/authenticate.js'
import { Image,Nav, Navbar,Dropdown, DropdownButton  } from 'react-bootstrap';

function Header ({ logOut }){
    const alerter= async()=> {const x = await getHome(); alert(JSON.stringify(x));};
    const alerter2= async()=> {const x = await getToken(); alert(JSON.stringify(x));};
    return (
        
        <Navbar className="shadow" sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark">
            <Navbar.Brand href="#home">Gold Crest Investment Club</Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                 <Nav className="mr-auto" defaultActiveKey="#home">
                   <Nav.Link href="#home">Home</Nav.Link>
                   <Nav.Link href="#payments">Payments</Nav.Link>
                   <Nav.Link href="#loans">Loans</Nav.Link>
                   <Nav.Link href="#inquiry">Inquiry</Nav.Link>
                 </Nav>
                 <Nav>
                    <DropdownButton
                        menuAlign="right"
                        title={<Image src={avatar} className="profile" roundedCircle />}
                        id="dropdown-menu-align-right"
                        variant="dropdown"
                    >
                        <Dropdown.Header>Signed-in as: John Doe</Dropdown.Header>
                        <Dropdown.Item eventKey="1" onClick={()=>alerter2()}>View profile</Dropdown.Item>
                        <Dropdown.Item eventKey="2" onClick={()=>alerter()}>Another action</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4" onClick={logOut}>Sign out</Dropdown.Item>
                    </DropdownButton>
                 </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
export default Header;