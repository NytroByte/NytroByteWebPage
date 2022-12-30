import landingBackground from "../media/images/form.png"
import {useLayoutEffect, useRef, useState} from 'react';
import { motion, useScroll } from "framer-motion";
function LandingPage() {
    const ref = useRef(null);

    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
      setHeight(ref.current.clientHeight);
      setWidth(ref.current.clientWidth);
    }, []);

    return (
        <div>
        <div className="landingPageWrapper">
            <div className="background"><motion.img animate={{
                transition: {duration: 1.8}
            }} src={landingBackground}/></div>
            <div className="landingTextHeroContainer">
                <div className="heroTextBox" ref={ref}>
                    <div className="landingMainText">
                        We are <div className="orngText">NytroByte</div>
                    </div>
                    <div className="landingMainTextDescription">
                    a full-service web design and development agency
                    </div>
                </div>
                <div className="heightHeroContainer">
                    <div className="wrap">
                        <p>{height}</p>
                        <motion.div>
                            <motion.svg style={{height: 0}}  animate={{
                                            height: height,
                                            transition: { duration: 1 },
                                        }} width="80" height={height} viewBox="0 0 61 318" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="0.5" x2="61" y2="0.5" stroke="white"/>
                                <line y1="317.5" x2="61" y2="317.5" stroke="white"/>
                                <line x1="31.5" y1="29" x2="31.5" y2="285" stroke="white"/>
                            </motion.svg>
                        </motion.div>
                    </div>
                </div>
                <div className="widthHeroContainer">
                    <div className="wrap">
                        <p>{width}</p>
                        <motion.div>
                            <motion.svg style={{width: 0}}  animate={{
                                            width: width,
                                            transition: { duration: 1 },
                                        }} width={width} height="61" viewBox="0 0 808 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="807.5" y1="61" x2="807.5" stroke="white"/>
                                <line x1="0.5" y1="61" x2="0.5" stroke="white"/>
                                <line x1="28" y1="30.5" x2="776" y2="30.5113" stroke="white"/>
                            </motion.svg>
                        </motion.div>
                        <div className="arrowWidth" style={{width: width}}>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="scrollDown">
                <a><span></span><span></span><span></span></a>
            </div>
            <motion.div className="decor"></motion.div>
        </div>
        </div>
    )

}
export default LandingPage;