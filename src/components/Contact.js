import React from "react"
import './Contact.css'
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


function Contact() {
    return (

        <div className="contact" style={{ backgroundColor: "khaki" }} id = "contact">
            <div className="container p-5">
                <div className="row">
                    <div className="col-sm-6" style={{ fontSize: "3em", textAlign: "right", fontWeight: "bold" }}>
                        CONTACT ME
                    </div>
                    <div className="col-sm-6 pt-2" style={{ textAlign: "left" }}>
                        <b>Email:</b> <a href = "mailto:hacketam@tcd.ie">hacketam@tcd.ie</a> <br />
                        <b>Number:</b> 086-843-2327 <br />
                        <b><a href="http://www.linkedin.com/in/amyhackett123">LinkedIn</a></b> <br />
                        <b><a href="http://www.github.com/amyraehackett">GitHub</a></b>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact