import logo from "../media/images/design_image.jpg"
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import image1 from "../media/images/design_image2.jpg"
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
                <div className="row">
                    <div className="collumn">
                        <div className="design_img">
                            <img src={image1}/>
                        </div>                        
                    </div>
                    <div className="collumn par">
                        <div className="background_collumn">
                            <div className="design_ul">
                                <ul className="listName">
                                    <li>Package design</li>
                                    <li>Website design</li>
                                    <li>Wireframe design</li>
                                </ul>
                            </div>
                            <div className="design_text">
                                <p>The web design process is simple and straightforward. We begin by working with you to understand your goals, target audience, and overall brand identity. From there, we create a custom design that reflects your unique style and communicates your message effectively.</p>
                            </div>
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