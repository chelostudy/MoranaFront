import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import UserService from "../services/AuthService";
import cl from "./LoginForm.module.css"
import img from "../img/gear_icon.png"

const LoginForm = observer(() => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {store} = useContext(Context);

    return (
        <div>
        <div className={cl.imgcontainer}>
            <img className={cl.avatar} src={img}/>
        </div>
        <div className={cl.container}>
            <label htmlFor="uname"><b>Username</b></label>
            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Email'
                name="uname"
            />
            <label htmlFor="psw"><b>Password</b></label>
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='Пароль'
                name="psw"
            />
            <button onClick={() => store.login(email, password)}>
                Войти
            </button>
        </div>
        </div>
    );
});

export default LoginForm;