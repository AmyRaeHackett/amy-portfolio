import React from "react";
/*
const projectsDetails = [
    {
        id : 1,
        title: "Cosmic Computing",
        text : "Children's space-themed game to teach Computational Thinking.",
        technologies : "Technologies used: JavaScript, HTML5, CSS3, Bootstrap, JQuery"
    },

    {
        id: 2,
        title: "illustrate",
        text: "A full-stack image sharing application.",
        technologies: "Technologies used: JavaScript, Node.js, MySQL, Ajax, Express templating"
    },

    {
        id: 3,
        title: "D7 Educate Together",
        text:"A website made for a primary school.",
        technologies: "Technologies used: WordPress, PHP, CSS3"
    },

    {
        id: 4,
        title: "Ballymun Family Practice",
        text: "Remaking the current Ballymun Family Practice website to make it cleaner and responsive.",
        technologies: "Technologies used: React.js, Bootstrap, JavaScript, CSS3, JSX"
    },

    {
        id: 5,
        title: "Paint Program",
        text: "A paint program which has the theme of mindfulness & meditation.",
        technologies: "Technologies used: Processing"
    }

]

export default projectsDetails;*/

function ProjectsDetails(props) {
    return (
        <div className="imageWrap col-sm  ">
            <img src={props.imgUrl} className="img-fluid" />
            <p className="imageDescription">
                <b>{props.name}</b><br />
                <a href={props.codeLink} >{props.textCode}</a><br />
                <a href={props.gameLink} > {props.textGame}</a></p>
        </div>
    )
}

export default ProjectsDetails