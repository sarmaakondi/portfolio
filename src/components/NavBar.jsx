import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="nav-container">
            <NavLink
                to="/portfolio/all"
                className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                }>
                <div className="nav-icon">
                    <p>All</p>
                </div>
            </NavLink>
            <NavLink
                to="/portfolio/about"
                className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                }>
                <div className="nav-icon">
                    <p>About</p>
                </div>
            </NavLink>
            <NavLink
                to="/portfolio/work"
                className={({ isActive }) =>
                    isActive ? "nav-link active-link" : "nav-link"
                }>
                <div className="nav-icon">
                    <p>Work</p>
                </div>
            </NavLink>
        </div>
    );
};

export default NavBar;
