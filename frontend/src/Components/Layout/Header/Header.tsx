import Navigate from "../Navigate/Navigate";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">

            <div className="logo">
                <img src={require('../images/לוגו חלי חתימה לבנה.png')} alt="hellis-logo" />
            </div>

            <div className="media-logo">
                <a href="https://www.instagram.com/hellyhadad/">
                    <img src={require('../images/instegram.png')} alt="instegram-logo" />
                </a>
                <a href="https://www.facebook.com/hellyhadad">
                    <img src={require('../images/facebook.png')} alt="facebook-logo" />
                </a>
            </div>


            <div className="navBar">
                <Navigate />
            </div>
        </div>
    );
}

export default Header;
