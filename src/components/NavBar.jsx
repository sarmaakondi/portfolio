import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="nav-container">
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
