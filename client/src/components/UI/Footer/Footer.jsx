import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../../img/logo2.png';
import cl from './footer.module.css'

const Footer = () => {
    return (
        <footer className={cl.footer}>
            <div className={cl.fContainer}>
                <ul className={cl.fList}>
                    <li className={cl.fInner}><h2 className={cl.fName}>©ИП Зозуля Н.П</h2></li>
                    <li></li>
                    <li className={cl.fInner}><div><Link to="/privacy" className={cl.fNavLink} style={{minHeight: "50px"}}>Политика конфиденциальности</Link></div></li>
                    <li className={cl.fInner}>
                        <div>
                            <ul className={cl.fContactList}>
                                <li className={cl.fContact}><strong>Телефон:</strong> +79282281430</li>
                                <li className={cl.fContact}><strong>Почта:</strong> alerts@beton-rnd-pro</li>
                            </ul>
                        </div>
                    </li>
                </ul>


            </div>
        </footer>
    );
};

export default Footer;