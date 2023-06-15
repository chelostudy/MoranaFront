import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import UserService from "../services/AuthService";
import cl from "./LoginForm.module.css"
import img from "../img/gear_icon.png"
import MyModal from "./UI/MyModal/MyModal";

const LoginForm = observer(() => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {store} = useContext(Context);
    const [authE, setAuthE] = useState("white")
    return (
        <div style={{width: "100%", height: "100%"}}>


        <div className={cl.lContainer}>
            <h2 style={{marginTop: "50px"}}>Вы попали на страницу рабочего места администратора сайта beton-rnd-pro.ru</h2>
            <h4>Если вы не являетесь администратором, то, пожалуйста, <strong>покиньте данную страницу</strong></h4>
            <div className={cl.lImageContainer}>
                <img className={cl.lAvatar} src={img}/>
            </div>
            <label htmlFor="uname"><b>Почтовый ящик</b></label>
            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Email'
                name="uname"
            />
            <label htmlFor="psw"><b>Пароль</b></label>
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='Пароль'
                name="psw"
                style={{border : `2px solid ${authE}`}}
            />
            <button onClick={async () => {
                const response = await store.login(email, password)
                console.log(response, "HER")
                if (!response){
                    setAuthE("red")
                }
            }}>
                Войти
            </button>
        </div>
        </div>
    );
});

export default LoginForm;