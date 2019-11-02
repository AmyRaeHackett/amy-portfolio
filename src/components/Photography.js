import React from "react"
import './Photography.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


function Photography() {
    return (
        <div id="photography" style={{ paddingTop: "5em" }}>
            <div className="photo" >
                <div className="container">
                    <p className="p-2" id = "photographytitle" style={{  fontWeight: "bold", color: "rgb(91, 136, 151)" }} >PHOTOGRAPHY</p>
                    <div className="row">
                        <div className="col-sm">
                            <img src={require('.././assets/photography/BIXE3594.JPG')} className="img-fluid col-sm"></img>
                        </div>
                        <div className="col-sm">
                            <img src={require('.././assets/photography/CZAR3822.JPG')} className="img-fluid col-sm" ></img>
                        </div>

                    </div>

                    <div className="row">
                        <div className="col-sm">
                            <img src={require('.././assets/photography/DZVN7799.JPG')} className="img-fluid col-sm"></img>
                        </div>
                        <div className="col-sm">
                            <img src={require('.././assets/photography/MUAD0763.JPG')} className="img-fluid col-sm"></img>
                        </div>

                    </div>

                    <div className="row">

                        <div className="col-sm">
                            <img src={require('.././assets/photography/GJSJ2509.JPG')} className="img-fluid col-sm" ></img>
                        </div>
                        <div className="col-sm">
                            <img src={require('.././assets/photography/GRBN3721.JPG')} className="img-fluid col-sm" ></img>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col-sm">
                            <img src={require('.././assets/photography/KGEU5313.JPG')} className="img-fluid col-sm"></img>
                        </div>
                        <div className="col-sm">
                            <img src={require('.././assets/photography/LARB7509.JPG')} className="img-fluid col-sm"></img>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm">
                            <img src={require('.././assets/photography/LMJO5721.JPG')} className="img-fluid col-sm"></img>
                        </div>
                        <div className="col-sm">
                            <img src={require('.././assets/photography/LUPD7891.JPG')} className="img-fluid col-sm"></img>
                        </div>

                    </div>

                </div>
            </div>
        </div>


    )
}

export default Photography