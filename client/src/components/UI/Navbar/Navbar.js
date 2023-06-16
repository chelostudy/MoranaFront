import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
import logo from "../../../img/mainLogo.png"
import {ImPhone} from "react-icons/im"

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <nav className="navbar">
                    <div className="navbar-container container">
                        <Link to="/about" className="navbar-logo" onClick={closeMobileMenu}>
                            <img src={logo} className="navbar-icon" />
                            Бетон-РНД
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes color="black"/> : <FaBars color="black" />}
                        </div>

                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        "nav-links" + (isActive ? " activated" : "")
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    Главная
                                </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink
                                to="/delivery"
                                className={({ isActive }) =>
                                    "nav-links" + (isActive ? " activated" : "")
                                }
                                onClick={closeMobileMenu}
                            >
                                Доставка
                            </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/price"
                                    className={({ isActive }) =>
                                        "nav-links" + (isActive ? " activated" : "")
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    Прайс
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        "nav-links" + (isActive ? " activated" : "")
                                    }
                                    onClick={closeMobileMenu}
                                    style={{fontWeight: "normal", paddingRight:"0"}}
                                >
                                    +7 (928) 229-14-30 <ImPhone style={{paddingLeft:"4px"}} color="black"/>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;