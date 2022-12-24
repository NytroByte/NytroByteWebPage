import image from "../media/images/imag1.png"
import image1 from "../media/images/formula.png";
import image2 from "../media/images/drift.png";
function About() {
    return(
        <div className="AboutSectionWrapper">
            <div className="row">
                <div className="col">
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
                    <div className="designContainer">
                        <img src={image1}/>
                        <div className="contHeader">
                            design
                        </div>
                        <div className="contDescription">

                        </div>
                    </div>
                    <div className="corrContainer">
                        <img src={image2}/>
                        <div className="contHeader">
                            correcting
                        </div>
                        <div className="contDescription">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;