import React, { Component } from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import { images } from './Images';
import './Photography.css';
//import 'bootstrap/dist/css/bootstrap.min.css';



function Photography() {

    const [index, setIndex] = React.useState(0);
    return (
        <div className="container" style={{height: "30%"}}>
            <h1 id="photographytitle" style={{ fontWeight: "bold", color: "rgb(91, 136, 151)", paddingTop: "2em" }}>PHOTOGRAPHY</h1>
            <Gallery index={index} onRequestChange={i => setIndex(i)}>
                {images.map(image => (
                    <GalleryImage style={{height:"30em"}} src={window.location.origin +image} key="0" alt="image" />
                ))}

            </Gallery>
        </div>
    )
}

export default Photography