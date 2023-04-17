import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../../img/logo2.png';

const Footer = () => {
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
                        <Link to="/about" className="navbar__links_item">О сайте</Link>
                        <Link to="/posts" className="navbar__links_item">Посты</Link>
                        <Link to="/write" className="navbar__links_item">Опубликовать</Link>
                        <Link to="/login" className="navbar__links_item">Войти</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;