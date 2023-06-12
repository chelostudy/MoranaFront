import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../../img/logo2.png';
import {observer} from "mobx-react-lite";

const Navbar = observer(() => {
    return (
        <div className="header">
            <div className="container">
                <div className="navbar">
                    <div className="logo">
                        <Link to="/about" className="logo-link">
                            <img src={logo} alt="Logo" className="logo-img"/>
                        </Link>
                    </div>
                    <div className="navbar__links">
                        <Link to="/about" className="navbar__links_item">Главная</Link>
                        <Link to="/delivery" className="navbar__links_item">Доставка</Link>
                        <Link to="/price" className="navbar__links_item">Прайс-лист</Link>
                        <Link to="/contacts" className="navbar__links_item">Контакты</Link>
                        <Link to="/contacts" className="navbar__links_item">+79996992139</Link>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Navbar;