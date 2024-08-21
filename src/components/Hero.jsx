import { Outlet } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero-container">
            <Outlet />
        </div>
    );
};

export default Hero;
