import image from "../media/images/imag1.png"
function About() {
    return(
        <div className="AboutSectionWrapper">
            <div className="row">
                <div className="col headingCol">
                    <div className="headingContainer">
                        <div className="heading">
                            <h1>about</h1>
                        </div>
                    </div>
                    <div className="buildingContainer">
                        <img src={image}/>
                        <div className="contHeader">
                            building
                        </div>
                        <div className="contDescription">

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="itemCol">
                        <div className="designContainer">
                            <div className="contHeader">

                            </div>
                            <div className="contDescription">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;