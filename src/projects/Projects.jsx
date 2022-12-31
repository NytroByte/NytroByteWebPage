import React from "react";
import logo from "../media/images/Redzes_pasaule_logo.png";
import Mlogo1 from "../media/images/image.png";
import Mlogo2 from "../media/images/mlogo1.png"

function Projects() {
    return (
        <div className="projects_wrapper">
            <h1 className="projects_header">Our projects</h1>
            <div className="clientele">
                <div className="rectangle">
                    <div className="logoContainer">
                        <img id="Mlogo1" src={Mlogo1}/>
                    </div>
                    {/* <div className="picContainer">
                        <img id="Mlogo2" src={Mlogo2}/>
                    </div> */}
                </div>
                <div className="rectangle white">
                    <img src={logo}/>
                </div>
            </div>
        </div>
    )
}

export default Projects;