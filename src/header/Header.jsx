import useScrollListener from "./useScrollListener";
import React, {useState, useEffect} from "react";
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
    return(
        <div className={`header ${navClassList.join(" ")}`}>
            <div className="headerWrapper">
                <div className="headerLinks">
                    <div className="link">
                        <a>about</a>
                    </div>
                    <div className="link">
                        <a>projects</a>
                    </div>
                    <div className="link">
                        <a>contact</a>
                    </div>
                </div>
                {/* <div className={`headerLanguageSelector ${showLang ? "open": ""}`} onClick={handleLanguageOpen}>
                    <div className="headerLanguageWrapper">
                        <div className="activeLanguage">
                            lv
                        </div>
                        <div className="triangle"><a>></a></div>
                        <div className="languageList">
                            <div className={`languageDropdown`} >
                                <div className="languageOptions">
                                    <div className="option">
                                        <a>EN</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
export default Header;