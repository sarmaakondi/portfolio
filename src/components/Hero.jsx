import { Outlet, useNavigate } from "react-router-dom";
import "./Hero.css";
import { useEffect } from "react";

const Hero = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (window.location.pathname === "/portfolio") {
            navigate("/portfolio/all");
        }
    }, [navigate]);

    return (
        <div className="hero-container">
            <Outlet />
        </div>
    );
};

export default Hero;
