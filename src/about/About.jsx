import logo from "../media/images/design_image.jpg"
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
function About() {
    const lineVariants = {
        closed: {width: "0%"},
        open: {width: "60%", transition: {duration: 1}}
    }
    const controls = useAnimation()
    const [ref, inView] = useInView()
    useEffect(() => {
        if (inView) {
            controls.start("open")
        }
    }, [controls, inView])




    const lineVariants1 = {
        closed: {width: "0%"},
        open: {width: "60%", transition: {duration: 1}}
    }
    const controls1 = useAnimation()
    const [ref1, inView1] = useInView()
    useEffect(() => {
        if (inView1) {
            controls1.start("open")
        }
    }, [controls1, inView1])
    return(
        <div className="AboutSectionWrapper">
            <div className="design_container">
                <div className="desHeader">
                    <motion.div       
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    variants={lineVariants}
                    className="desLine"></motion.div>
                    <h1 className="design_header">Design</h1>
                </div>
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


            <div className="developmentContainer">
                <div className="developmentHeader">
                    <div className="devHead">Development</div>
                    <div className="devHeaderDecoration">
                        
                    </div>
                </div>
                <div className="mainRow">
                    <div className="fileHeader">
                        <div className="devHeader">about/development.jsx</div>
                        <motion.div                     ref={ref1}
                    animate={controls1}
                    initial="hidden"
                    variants={lineVariants1} className="devLine"></motion.div>
                    </div>
                    <div className="devCol">
                        <div className="devCode">
                            
                            <div className="codeDec" style={{color: "white"}}>

                                <div className="orng">&lt;li&gt;<br/>
                                    &emsp;&emsp;&lt;el&gt;</div>
                                    &emsp;&emsp;&emsp;&emsp;Website development
                                    <br/>
                                    <div className="orng">&emsp;&emsp;&lt;/el&gt;<br/>
                                    &emsp;&emsp;&lt;el&gt;</div>
                                    &emsp;&emsp;&emsp;&emsp;E-Store development
                                    <br/>
                                    <div className="orng">
                                    &emsp;&emsp;&lt;/el&gt;
                                        <br/>
                                        &lt;/li&gt;
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="devCol comment">
                        <div className="devComment">
                            {"<!-- Our developers will bring your website to life using the latest technologies and best practices. We prioritize user experience, security, and performance to ensure that your website is fast, reliable, and easy to use.-->"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;