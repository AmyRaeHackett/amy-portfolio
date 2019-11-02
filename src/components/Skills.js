import React from "react"

import { Link } from "react-router-dom";
import './Skills.css';

function Skills() {
    return (

        <div id="skills" style={{ paddingTop: "5em" }}>
            <div style={{ backgroundColor: "#a8d4af" }}>
                <div className="container p-5">
                    <div className="row">
                        <div className="col-sm-6">
                            <h1 id="skilltitle" style={{ fontWeight: "bold", color: "white" }}>SKILLS</h1>
                        </div>
                        <div className="col-sm">
                            <ul>
                                <li><strong>Programming</strong></li>
                                <li>JavaScript </li>
                                <li>Processing </li>
                                <br />
                                <li><strong>Front-end</strong></li>
                                <li> HTML5 </li>
                                <li> CSS3 </li>
                                <li> JQuery </li>
                                <li> Ajax </li>
                                <li> WordPress </li>
                                <li>   Bootstrap </li>
                                <li>   React.js </li>




                            </ul>
                        </div>
                        <div className="col-sm">
                            <ul> <li><strong>Back-end</strong></li>
                                <li> Node.js </li>
                                <li>  (My)SQL </li>

                                <br />

                                <li><strong>Other</strong></li>
                                <li>  Git </li>
                                <li>  GitHub</li>
                                <li>   Adobe Creative Suite (Illustrator, InDesign, Premiere Pro) </li></ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Skills