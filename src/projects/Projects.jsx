import React from "react";
import logo from "../media/images/Redzes_pasaule_logo.png";
import Mlogo1 from "../media/images/image.png";
import Mlogo2 from "../media/images/mlogo1.png"

function Projects() {
    return (
        <div className="projects_wrapper">
            <h1 className="projects_header">Our clientele</h1>
            <div className="clientele">
                <div className="rectangle1">
                    <img id="Mlogo1" src={Mlogo1}/>
                    <img id="Mlogo2" src={Mlogo2}/>
                </div>
                <div className="rectangle2">
                    <img src={logo}/>
                </div>
            </div>
        </div>
    )
}

export default Projects;