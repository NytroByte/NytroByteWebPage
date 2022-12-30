import logo from "../media/images/design_image.jpg"
function About() {
    return(
        <div className="AboutSectionWrapper">
            <div className="design_container">
                <h1 className="design_header">Design</h1>
                <div className="design_img">
                    <img src={logo}/>
                </div>
                <div className="column">
                    <div className="row">
                        <div className="design_ul">
                            <ul>
                                <li>Package design</li>
                                <li>Website design</li>
                                <li>Some design</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="design_text">
                            <p>Our web design process is simple and straightforward. We begin by working with you to understand your goals, target audience, and overall brand identity. From there, we create a custom design that reflects your unique style and communicates your message effectively.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;