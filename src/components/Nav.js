import React from "react"

import { Link } from "react-router-dom";
import './Nav.css';

function Home() {
    return (
        /*
                <div style={{ position: "fixed", zIndex: "1", width: "100%" }}>
        
        
        
                    <nav className="navbar navbar-expand-md" >
                        <div className="container">
                            <a className="navbar-brand" href="#home">
                                <img id="logo" height="75px" width="75px" src={require('.././assets/AHLogo.png')} ></img>
                            </a>
        
                            <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item">
                                        <a class="nav-link" href="#about">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#projects">Projects</a>
                                    </li>
        
                                    <li class="nav-item">
                                        <a class="nav-link" href="#photography">Photography</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#contact">Contact</a>
                                    </li>
                                </ul>
                            </div>
        
                        </div>
                    </nav>
        
        
                    <nav className="navburger">
                        <div className="hamburger">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                        <ul className="nav-links">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Projects</a></li>
                            <li><a href="#">Photography</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>*/
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
                <li><a href="#contact">Contact</a></li>
            </ul>
            </div>
        </header>

    )
}

export default Home