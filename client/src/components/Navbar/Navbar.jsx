import Style from "./Navbar.module.css"
import { NavLink, useLocation } from "react-router-dom"

const Nav = () => {
    const location = useLocation()

    if (location.pathname === "/") {
        return;
    }

    return (
        <>
            <div className={Style.container}>
                <NavLink to="/" className={Style.NavLink}>
                    <div className={Style.logout}>
                        Logout
                    </div>
                </NavLink>
                <NavLink to="/home" className={`${Style.NavLink} ${Style.logout} ${location.pathname === "/home" ? Style.activeButton : ""}`}>
                    <div className={Style.logout}>
                        Home
                    </div>
                </NavLink>
                <NavLink to="/CreateActivity" className={`${Style.NavLink} ${Style.logout} ${location.pathname === "/CreateActivity" ? Style.activeButton : ""
                    }`}>
                    <div className={Style.logout}>
                        Create Activity
                    </div>
                </NavLink>
                <NavLink to="/updateActivity" className={`${Style.NavLink} ${Style.logout} ${location.pathname === "/updateActivity" ? Style.activeButton : ""
                    }`}>
                    <div className={Style.logout}>
                        Update Activity
                    </div>
                </NavLink>
                <NavLink to="/deleteActivity" className={`${Style.NavLink} ${Style.logout} ${location.pathname === "/deleteActivity" ? Style.activeButton : ""
                    }`}>
                    <div className={Style.logout}>
                        Delete Activity
                    </div>
                </NavLink>
            </div>
        </>
    );
};

export default Nav;