import useScrollListener from "./useScrollListener";
import React, {useState, useEffect} from "react";
import logo from "../media/images/logo.jpg"
import logov2 from "../media/images/logo_transparent.png"
import { motion, Variants } from "framer-motion";
import {Link} from 'react-scroll'
function Header() {
    const [navClassList, setNavClassList] = useState([]);
    const scroll = useScrollListener();
  
    // update classList of nav on scroll
    useEffect(() => {
      const _classList = [];
  
      if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
        _classList.push("nav-bar--hidden");
  
      setNavClassList(_classList);
    }, [scroll.y, scroll.lastY]);


    const [burgerOpen, setBurgerOpen] = useState(false)
    const handleBurger = () => {
        setBurgerOpen((previous) => !previous)
    }
    const variants = {
        visible: { width: "50vw" },
        hidden: { width: "0vw"}
      }
    return(
        <div className={`header ${navClassList.join(" ")}`}>
            <div className="headerWrapper">
                <div className="headerLogo">
                    <img src={logov2}/>
                </div>
                <div className="headerLinks">
                    <div className="link"><Link to="design" spy={true} smooth={true}>design</Link></div>
                    <div className="link"><Link to="development" spy={true} smooth={true}>development</Link></div>
                    <div className="link"><Link to="contacts" spy={true} smooth={true}>contact</Link></div>
                </div>
                <div className={`headerLinksMobile ${burgerOpen ? "open": ""}`}>
                    <div className="burgerLogo" onClick={handleBurger}>
                        <svg width="45" height="45" viewBox="0 0 100 100">
                            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                            <path className="line line2" d="M 20,50 H 80" />
                            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                        </svg>
                    </div>
                    <div className={`burgerContent ${burgerOpen ? "open": ""}`}>
                        <motion.div animate={burgerOpen ? "visible" : "hidden"} initial="hidden" variants={variants} className="linkContainer">
                            <div className="link"><Link to="design" spy={true} smooth={true}>design</Link></div>
                            <div className="link"><Link to="development" spy={true} smooth={true}>development</Link></div>
                            <div className="link"><Link to="contacts" spy={true} smooth={true}>contact</Link></div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;