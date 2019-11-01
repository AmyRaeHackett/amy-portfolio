import React from "react"
import './Home.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="homecolor" id="home">
            <div className="container">
                <header className="overlay">
                    <h1 id="title">Hi, <br /> I'm Amy!</h1>

                </header>
                <a href="#about"><img height="100px" width="100px" src={require('.././assets/downbutton.gif')}></img></a>
            </div>
        </div>

    )
}

export default Home