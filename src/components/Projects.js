import React from "react"
import { Link } from "react-router-dom";
import './Projects.css';
import ProjectsDetails from './ProjectsDetails';
//import { Spring } from 'react-spring';

function Projects(props) {
    return (

        <div className="projects" style={{ paddingTop: "6em", color: "white" }} id="projects">
            <div className="container ">
                <h1 style={{ fontSize: "3em", fontWeight: "bold" }}>PROJECTS</h1>
                <div className="row">

                    <ProjectsDetails
                        imgUrl={require('.././assets/planet_destination.png')}
                        name="Cosmic Computing"
                        gameLink="https://amyraehackett.github.io/Cosmic-Computing/"
                        textGame="View game"
                        codeLink="https://github.com/AmyRaeHackett/Cosmic-Computing"
                        textCode="View code"

                    />

                    <ProjectsDetails
                        imgUrl={require('.././assets/illustrate.png')}
                        name="illustrate"
                        gameLink=""
                        textGame=""
                        codeLink="https://github.com/AmyRaeHackett/Image-Sharing-App"
                        textCode="View code"

                    />

                    <ProjectsDetails
                        imgUrl={require('.././assets/d7tree.PNG')}
                        name="D7 Educate Together"
                        gameLink=""
                        textGame=""
                        codeLink="https://d7educatetogether.com/"
                        textCode="View website"

                    />

                </div>

                <div className="row">

                    <ProjectsDetails
                        imgUrl={require('.././assets/ballymunfplogo.png')}
                        name="Ballymun Family Practice"
                        gameLink=""
                        textGame=""
                        codeLink="https://github.com/AmyRaeHackett/Ballymun-Family-Practice"
                        textCode="View code"

                    />

                    <ProjectsDetails
                        imgUrl={require('.././assets/painticon.PNG')}
                        name="Paint Program"
                        gameLink=""
                        textGame=""
                        codeLink="https://github.com/AmyRaeHackett/Paint-Program"
                        textCode="View code"

                    />

                </div>
            </div >
        </div>
       

    )
}

export default Projects