import React from "react"

import { Link } from "react-router-dom";
import './Nav.css';

function Nav() {
    return (
        
    
        <header className="header">
            <div className="container">
            <a className="navbar-brand" href="#home">
                <img id="logo" height="75px" width="75px" src={require('.././assets/AHLogo.png')} ></img>
            </a>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#photography">Photography</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            </div>
        </header>

    )
}

export default Nav