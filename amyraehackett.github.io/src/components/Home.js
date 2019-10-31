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
            </div>
        </div>

    )
}

export default Home