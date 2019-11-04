import React from "react"

//import { Link } from "react-router-dom";
import './Nav.css';
import { Link, animateScroll as scroll } from 'react-scroll';

class Nav extends React.Component {



    render() {
        return (


            <header className="header">
                <div className="container">

                    <Link

                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    //onClick={scrollToTop}

                    ><img id="logo" height="75px" width="75px" src={require('.././assets/AHLogo.png')} ></img></Link>

                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
                    <ul className="menu">


                        <li className="nav-item">
                            <Link
                               
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >About</Link>
                        </li>

                        <li className="nav-item">
                            <Link
                               
                                activeClass="active"
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >Projects</Link></li>

                        <li className="nav-item">
                            <Link
                                
                                activeClass="active"
                                to="photography"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >Photography</Link></li>
                        <li className="nav-item"><Link
                            
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >Skills</Link></li>
                        <li className="nav-item"> <Link
                            
                            activeClass="active"
                            to="education"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                        >Education</Link></li>
                        <li className="nav-item"> <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            
                        >Contact</Link></li>

                    </ul>
                </div>
            </header>

        )
    }
}

export default Nav