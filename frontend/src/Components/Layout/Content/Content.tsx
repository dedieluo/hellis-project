import { Route, Routes } from "react-router-dom";
import "./Content.css";
import Home from "./Home/Home";
import BarMitzvah from "./BarMitzvah/BarMitzvah";
import BatMitzvah from "./BatMitzvah/BatMitzvah";
import ContactUs from "./ContactUs/ContactUs";
import Family from "./Family/Family";
import OneYearOld from "./OneYearOld/OneYearOld";
import Pregnancy from "./Pregnancy/Pregnancy";
import Image from "./Image/Image";
import Studio from "./Studio/Studio";
import PriceList from "./PriceList/PriceList";
import Articles from "./Articles/Articles";

function Content(): JSX.Element {
    return (
        <div className="Content">

            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/barMitzvah" element={<BarMitzvah />}></Route>
                <Route path="/batMitzvah" element={<BatMitzvah />}></Route>
                <Route path="/contactUs" element={<ContactUs />}></Route>
                <Route path="/family" element={<Family />}></Route>
                <Route path="/oneYearOld" element={<OneYearOld />}></Route>
                <Route path="/pregnancy" element={<Pregnancy />}></Route>
                <Route path="/image" element={<Image />}></Route>
                <Route path="/studio" element={<Studio />}></Route>
                <Route path="/priceList" element={<PriceList />}></Route>
                <Route path="/articles" element={<Articles />}></Route>

            </Routes>
        </div>
    );
}

export default Content;
