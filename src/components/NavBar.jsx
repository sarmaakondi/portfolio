import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./NavBar.css";

const NavBar = () => {
    const location = useLocation();
    const [sliderStyle, setSliderStyle] = useState({});

    useEffect(() => {
        switch (location.pathname) {
            case "/portfolio/all":
                setSliderStyle({ transform: "translateX(0)" });
                break;
            case "/portfolio/about":
                setSliderStyle({ transform: "translateX(100px)" });
                break;
            case "/portfolio/work":
                setSliderStyle({ transform: "translateX(200px)" });
                break;
            default:
                setSliderStyle({ transform: "translateX(0)" });
                break;
        }
    }, [location]);

    return (
        <div className="nav-container">
            <div className="slider" style={sliderStyle}></div>
            <div>
                <NavLink
                    to="/portfolio/all"
                    className={({ isActive }) =>
                        isActive ? "nav-link active-link" : "nav-link"
                    }>
                    <div className="nav-title">
                        <p>All</p>
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink
                    to="/portfolio/about"
                    className={({ isActive }) =>
                        isActive ? "nav-link active-link" : "nav-link"
                    }>
                    <div className="nav-title">
                        <p>About</p>
                    </div>
                </NavLink>
            </div>
            <div>
                <NavLink
                    to="/portfolio/work"
                    className={({ isActive }) =>
                        isActive ? "nav-link active-link" : "nav-link"
                    }>
                    <div className="nav-title">
                        <p>Work</p>
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default NavBar;
