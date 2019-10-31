import React from "react"
import { Link } from "react-router-dom";
import './Projects.css';


function Projects() {
    return (

        <div className="projects" style={{ paddingTop: "6em" }} id="projects">

            <div className="container ">

                <h1 style={{ fontSize: "3em", fontWeight: "bold" }}>PROJECTS</h1>
                <div className="row">

                    <div className="imageWrap col-sm  "><a href="https://www.scss.tcd.ie/~hacketam/cosmiccomputing/landingpage.html"><img src={require('.././assets/planet_destination.png')} className="img-fluid" /></a>
                        <p class="imageDescription"><b>Cosmic Computing</b><br />
                            <a href="https://www.scss.tcd.ie/~hacketam/cosmiccomputing/landingpage.html" style={{ color: "white" }}>View</a></p>



                    </div>
                    <div className="imageWrap col-sm "><a href="https://github.com/AmyRaeHackett/Paint-Program"><img src={require('.././assets/paint.PNG')} className="img-fluid" /></a>
                        <p class="imageDescription"><b style={{ color: "black" }}>Paint Program</b><br />
                            <a href="https://github.com/AmyRaeHackett/Paint-Program" style={{ color: "black" }}>View source code</a></p></div>


                    <div className="imageWrap col-sm "> <a href="https://d7educatetogether.com/"><img src={require('.././assets/d7tree.PNG')} className="img-fluid" /></a>
                        <p class="imageDescription"><b>D7 Educate Together</b><br />
                            <a href="https://d7educatetogether.com/" style={{ color: "black" }}>View website</a></p>

                    </div>

                </div>
                <div className="row">

                    <div className="imageWrap col-sm  "><a href="https://github.com/AmyRaeHackett/Ballymun-Family-Practice"><img src={require('.././assets/civiccentre.png')} className="img-fluid" /></a>
                        <p class="imageDescription"><b>Ballymun Family Practice</b><br />
                            <a href="https://github.com/AmyRaeHackett/Ballymun-Family-Practice" style={{ color: "white" }}>View source code</a></p>

                    </div>

                    <div className="imageWrap col-sm "><a href="https://codepen.io/amyhackett/pen/wvvgVXV"><img src={require('.././assets/snakeRight.png')} className="img-fluid" /></a>
                        <p class="imageDescription"><b>Snake</b><br />
                            <a href="https://codepen.io/amyhackett/pen/wvvgVXV" style={{ color: "black" }}>View on CodePen</a></p>


                    </div>

                    <div className="imageWrap col-sm "> <a href="https://codepen.io/amyhackett/pen/gOYewOW"><img src={require('.././assets/owly.png')} className="img-fluid" /></a>
                        <p class="imageDescription"><b>Sokoban</b><br />
                            <a href="https://codepen.io/amyhackett/pen/gOYewOW" style={{ color: "black" }}>View on CodePen</a></p>
                    </div>
                </div>
            </div >
        </div>

    )
}

export default Projects