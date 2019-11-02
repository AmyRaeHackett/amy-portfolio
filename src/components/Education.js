import React from "react"

import { Link } from "react-router-dom";
import './Education.css';

function Education() {
    return (

        <div id = "education" style={{ paddingTop: "5em" }}>
        <div  className="container" style={{ textAlign: "left" }}>
            <h1 style={{ fontWeight: "bold", color:"#d45570" }}>EDUCATION</h1>
            <div className="row" >
                <div className="col-sm-4" >
                    <p><b>Trinity College Dublin</b> <br />
                        M.Sc. Interactive Digital Media<br />
                        <i>September 2018 - August 2019</i>
                    </p>

                </div>
                <div className="col-sm">
                    <p><b>Relevant coursework:</b> <br />
                        Programming and authoring, 3D modelling, graphic design, web design, image processing, sensor technologies with Arduino, video and audio production, research
      <br /><br /><b> Projects:</b> <br />
                        Full stack image sharing application using Node.js, Ajax and MySQL <br />
                        Helped primary school teachers to share snippets of their pupils' daily lives to parents by designing and developing a website using WordPress <br />
                        Introduced children to the logic behind Computational Thinking by designing and developing an interactive, space-themed game for iOS <br />
                        My dissertation found that socially anxious individuals can benefit from digital and online social interactions, once used in conjunction with face-to-face interactions <br />
                        Working independently and as part of a team
 </p>
                </div>
            </div>
            <hr style={{backgroundColor:"#d45570"}}></hr>



            <div className="row"  >
                <div className="col-sm-4">
                    <p><b>Dublin City University</b> <br />
                        B.A. Geography and Human Development<br />
                        <i>September 2015 - May 2018</i>
                    </p>

                </div>
                <div className="col-sm">
                    <p><b>Relevant coursework:</b> <br />
                        Human Development: a combination of psychology, philosophy and sociology <br />
                        Geography: GIS, analysing databases with Excel, gathering data <br />
                        Dissertation: Living in the moment: Irish third-level students' and mindfulness teachers' experiences of and perceptions of mindfulness   <br /><br />
                    </p>
                </div>
            </div>
                
                
                <hr style={{backgroundColor:"#d45570"}}></hr>

            <div className="row"  >
                <div className="col-sm-4">
                    <p><b>Dominican College Griffith Avenue</b> <br />
                        Leaving Certificate<br />
                        <i>September 2009 - June 2015</i>
                    </p>

                </div>

                <div className="col-sm" id="smallresults">


                    <p><b>Leaving Cert Results: </b> 510 points<br />
                        English - HL - A2  <br />
                        Maths - OL - A2  <br />
                        Irish - HL - B2<br />
                        German - HL - B1   <br />
                        Geography - HL - B2  <br />
                        Art - HL - B1  <br />
                        Business - HL - A2
    
                   </p>



                </div>


                    <div className=" results col-sm-4"  >
                        <p><b>Leaving Cert Results: </b> 510 points<br />
                            English  <br />
                            Maths  <br />
                            Irish <br />
                            German   <br />
                            Geography  <br />
                            Art  <br />
                            Business
        
                   </p>
                    </div>

                    <div className="results col-sm">
                        <p><b>Level</b> <br />
                        Higher Level < br />
                        Ordinary Level <br />
                        Higher Level < br />
                        Higher Level < br />
                        Higher Level < br />
                        Higher Level < br />
                        Higher Level < br />
                        </p>
                    </div> <br />

                    <div className=" results col-sm">
                        <p><b>Grade</b> <br />
                        A2 < br />
                        A2 <br />
                        B2 < br />
                        B1< br />
                        B2 < br />
                        B1 < br />
                        A2 < br />
                        </p>
                    </div>
            
            </div>










        </div>
        </div>

    )
}

export default Education