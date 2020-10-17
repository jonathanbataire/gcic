import React from 'react';
import '../css/Header.css';
import avatar from '../avatar.png';

function Header (){
    return (
        <div className="header">
            <div className="header-left">
                <a href="#default" className="logo">GroupLogo</a>
            </div>
            <div className="header-right">
                <text>Doe, John owl philly</text>
                <img className="profile" src={avatar} alt="avatar"/>
            </div>
            <div className="header-center">
                <a className="active" href="#home">Home</a>
                <a href="#contact">Loans</a>
                <a href="#about">Records</a>
            </div>
        </div>
    );
}
export default Header;