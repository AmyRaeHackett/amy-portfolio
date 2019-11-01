import React from "react"
import { Link } from "react-router-dom";
import './Projects.css';


function Projects() {
    return (

        <div className="projects" style={{ paddingTop: "6em" }} id="projects">

            <div className="container ">

                <h1 style={{ fontSize: "3em", fontWeight: "bold" }}>PROJECTS</h1>
                <div className="row">

                    <div className="imageWrap col-sm  "><img src={require('.././assets/planet_destination.png')} className="img-fluid" />
                        <p class="imageDescription"><b>Cosmic Computing</b><br />
                            <a href="https://amyraehackett.github.io/Cosmic-Computing/" style={{ color: "white" }}>View</a></p>



                    </div>
                    <div className="imageWrap col-sm "><img src={require('.././assets/illustrate.png')} className="img-fluid" />
                        <p class="imageDescription"><b>illustrate</b><br />
                            <a href="https://github.com/AmyRaeHackett/Image-Sharing-App" style={{ color: "white" }}>View source code</a></p>


                    </div>
                   
                    <div className="imageWrap col-sm "><img src={require('.././assets/d7tree.PNG')} className="img-fluid" />
                        <p class="imageDescription"><b>D7 Educate Together</b><br />
                            <a href="https://d7educatetogether.com/" style={{ color: "white" }}>View website</a></p>

                    </div>

                </div>
                <div className="row">

                    <div className="imageWrap col-sm  "><img src={require('.././assets/civiccentre.png')} className="img-fluid" />
                        <p class="imageDescription"><b>Ballymun Family Practice</b><br />
                            <a href="https://github.com/AmyRaeHackett/Ballymun-Family-Practice" style={{ color: "white" }}>View source code</a></p>

                    </div>

                    <div className="imageWrap col-sm "><img src={require('.././assets/paint.PNG')} className="img-fluid" />
                        <p class="imageDescription"><b style={{ color: "black" }}>Paint Program</b><br />
                            <a href="https://github.com/AmyRaeHackett/Paint-Program" style={{ color: "black" }}>View source code</a></p></div>



                   

                    
                </div>
            </div >
        </div>

    )
}

export default Projects