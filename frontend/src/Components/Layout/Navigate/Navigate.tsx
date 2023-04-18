import { NavLink } from "react-router-dom";
import "./Navigate.css";

function Navigate(): JSX.Element {
    return (
        <div className="Navigate">
            <NavLink to={"contactUs"}>צור קשר</NavLink>
            <NavLink to={"image"}>תדמית</NavLink>
            <NavLink to={"priceList"}>מחירון</NavLink>
            <NavLink to={"articles"}>מאמרים</NavLink>
            <NavLink to={"studio"}>סטודיו</NavLink>
            <NavLink to={"pregnancy"}>הריון</NavLink>
            <NavLink to={"oneYearOld"}>גיל שנה</NavLink>
            <NavLink to={"family"}>משפחה</NavLink>
            <NavLink to={"batMitzvah"}>בת מצווה</NavLink>
            <NavLink to={"barMitzvah"}>בר מצווה</NavLink>
            <NavLink to={"home"}>דף הבית</NavLink>

        </div>
    );
}

export default Navigate;
