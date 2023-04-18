import { NavLink, useNavigate } from "react-router-dom";
import ImageAnimation from "../ImageAnimation/ImageAnimation";
import "./Home.css";

function Home(): JSX.Element {

    return (
        <div className="Home">
            <div className="imageAnimation">
                <ImageAnimation />
            </div>

            <div className="main-picturs">
                <NavLink to={"barMitzvah"}>
                    <img src={require('../../images/בת מצווה.jpg')} alt="batMizva-picture" />
                </NavLink>

                <NavLink to={"oneYearOld"}>
                    <img src={require('../../images/גיל שנה.jpg')} alt="oneYearOld-picture" />
                </NavLink>

                <NavLink to={"studio"}>
                    <img src={require('../../images/סטודיו.jpg')} alt="studio-picture" />
                </NavLink>
            </div>

            <div className="main-picturs">

                <NavLink to={"image"}>
                    <img src={require('../../images/תדמית.jpg')} alt="image-picture" />
                </NavLink>
                <NavLink to={"pregnancy"}>
                    <img src={require('../../images/תמונת הריון ומשפחה.jpg')} alt="familyAndPregnancy-picture" />
                </NavLink>
            </div>
        </div>
    );
}

export default Home;
