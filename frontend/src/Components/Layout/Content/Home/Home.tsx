import ImageAnimation from "../ImageAnimation/ImageAnimation";
import "./Home.css";

function Home(): JSX.Element {
    return (
        <div className="Home">
            <div className="imageAnimation">
                <ImageAnimation />
            </div>
        </div>
    );
}

export default Home;
