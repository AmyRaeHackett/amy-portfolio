import React from "react"
import './Home.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import './Nav.css';

function Home() {
    return (

        <div style={{position:"fixed", zIndex: "1", width:"100%"}}>
            <nav className="navbar navbar-expand" >
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

            
            
        </div >

    )
}

export default Home