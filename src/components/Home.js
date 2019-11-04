import React from "react"
import './Home.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { Spring } from 'react-spring/renderprops';

function Home() {
    return (
        <Spring 
        from={{marginLeft: -1000}}
        to={{marginLeft: 0}}>

            {props => (
        <div style={props}>
        <div className="homecolor" id="home">
            <div className="container">
                <header className="overlay">
                    <h1 id="title">Hi, <br /> I'm Amy!</h1>

                </header>
                <a href="#about"><img height="100px" width="100px" src={require('.././assets/downbutton.gif')}></img></a>
            </div>
            </div>
        </div>
        )}
        </Spring>

    )
}

export default Home