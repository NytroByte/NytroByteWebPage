import landingBackground from "../media/images/form.png"
import {useLayoutEffect, useRef, useState} from 'react';
import { motion } from "framer-motion";
function LandingPage() {
    const ref = useRef(null);

    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
      setHeight(ref.current.clientHeight);
      setWidth(ref.current.clientWidth);
    }, []);

    return (
        <div className="landingPageWrapper">
            <div className="background"><img src={landingBackground}/></div>
            <div className="landingTextHeroContainer">
                <div className="heroTextBox" ref={ref}>
                    <div className="landingMainText">
                        We are <div className="orngText">NytroByte</div>
                    </div>
                    <div className="landingMainTextDescription">
                        Lorem ipsum dolor sit amet
                    </div>
                </div>
                <div className="heightHeroContainer">
                    {height}
                    <div className="arrowHeight"></div>
                </div>
                <div className="widthHeroContainer">
                    <div className="wrap">
                        {width}
                        <motion.div style={{scale: 0}}  animate={{
                                            scale: 1,
                                            transition: { duration: 1.4 },
                                        }}>
                            <svg width={width} height="61" viewBox="0 0 808 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="807.5" y1="61" x2="807.5" stroke="white"/>
                            <line x1="0.5" y1="61" x2="0.5" stroke="white"/>
                            <line x1="28" y1="30.5" x2="776" y2="30.5113" stroke="white"/>
                            </svg>
                        </motion.div>
                        <div className="arrowWidth" style={{width: width}}>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="scrollDown">
                <a><span></span><span></span><span></span></a>
            </div>
        </div>
    )

}
export default LandingPage;