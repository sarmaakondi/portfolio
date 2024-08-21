import { Outlet } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
    return (
        <div className="hero-container">
            <Outlet />
        </div>
    );
};

export default Hero;
