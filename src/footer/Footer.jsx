import logo from "../media/images/logo_transparent.png";
import logov2 from "../media/images/artboard_transparent.png"

function Footer() {
    return (
        <div className="footer_wrapper">
            <div className="footer">
                <h1>Copyright © 2023 <img className="logoImg" src={logo} alt="" /> </h1>
            </div>
        </div>
    )
}

export default Footer;