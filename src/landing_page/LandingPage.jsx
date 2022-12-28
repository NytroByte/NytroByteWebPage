import landingBackground from "../media/images/form.png"
import {useLayoutEffect, useRef, useState} from 'react';
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
                <div className="widthHeroContainer">
                    {width}
                    <div className="arrowWidth"></div>
                </div>
                <div className="heightHeroContainer">
                    {height}
                    <div className="arrowHeight"></div>
                </div>
                <div className="heroTextBox" ref={ref}>
                    <div className="landingMainText">
                        We are <div className="orngText">NytroByte</div>
                    </div>
                    <div className="landingMainTextDescription">
                        Lorem ipsum dolor sit amet
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