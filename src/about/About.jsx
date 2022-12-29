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
                                <li>Coffee</li>
                                <li>Tea</li>
                                <li>Milk</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="design_text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultricies ligula nec ullamcorper accumsan. Sed tristique augue eget leo feugiat congue. Aenean ac augue sit amet erat lobortis porttitor sed in ipsum. Nullam lobortis ultricies tortor, id accumsan diam tempor a. Praesent mollis dictum eros vitae venenatis. Sed tincidunt tortor in tortor efficitur, in scelerisque diam malesuada. Aliquam vel velit porta, euismod diam eu, rhoncus arcu. Vestibulum pharetra facilisis tellus egestas pulvinar. Etiam convallis nulla id tellus sollicitudin, quis fermentum ipsum ultrices.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;