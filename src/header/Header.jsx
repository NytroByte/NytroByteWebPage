import { useState } from "react";
function Header() {
    const [showLang, setVisLang] = useState(false);
    const handleLanguageOpen = () => {
        setVisLang((previous) => !previous)
    }
    return(
        <div className="header">
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
                <div className={`headerLanguageSelector ${showLang ? "open": ""}`} onClick={handleLanguageOpen}>
                    <div className="headerLanguageWrapper">
                        <div className="activeLanguage">
                            lv
                        </div>
                        <div className="triangle"><a>></a></div>
                        <div className="languageList">
                            <div className={`languageDropdown`} >
                                <div className="languageOptions">
                                    <div className="option">
                                        <a>RU</a>
                                    </div>
                                    <div className="option">
                                        <a>EN</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;