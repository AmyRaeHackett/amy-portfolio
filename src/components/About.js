import React from "react"
import './About.css';
import { Spring } from 'react-spring/renderprops';
import { Link } from "react-router-dom";
import { Waypoint } from 'react-waypoint';

class About extends React.Component {
    /*constructor(props) {
        super(props);
        this.state = {
            marginLeft : "-50%",
            marginRight : "50%"
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

   
    handleScroll() {
        this.setState(prevState => {
            return {
                marginLeft: "100%",
                marginRight: prevState.marginRight + "-100%"

            }
        })
    }*/


    render() {
        return (
/*
            <Waypoint
  onEnter={(console.log("hello"))}
    
  >
    <Spring
    from={{marginLeft: -1000}}
    to={{marginLeft: 0}}>

        {props => (

       

                    <div style={props}>*/
                        <div className="aboutpage" id="about">
                            <div className="container">
                                <div className="row" >
                                    <div className="col-sm-6" id="aboutheader" style={{ fontSize: "3em", fontWeight: "bold", color: "#da1359" }}>
                                        ABOUT
                    </div>
                                    <div className="col-sm-6" style={{ textAlign: "left" }}>
                                        Hi! My name is Amy Hackett. I am 23 years old and am a first class honours M.Sc. Interactive Digital Media graduate from Trinity College Dublin. I love programming and web authoring and am currently looking for a role as a front end developer to showcase and strengthen my technical skills. I enjoy solving problems with creative and logical solutions. I am a critical thinker and a quick learner with sharp attention to detail and a drive to succeed. I am really excited to work in an environment where I can provide a responsive and accessible user experience, while continuously being exposed to new technologies.
    
                    </div>
                                </div>

                            </div>


                        </div>/*
                        </div>
                         )}
                        </Spring>
                        </Waypoint>*/
                   

        )
    }
}

export default About