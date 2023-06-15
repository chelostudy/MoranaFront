import React, {FC, useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import UserService from "../services/AuthService";
import cl from "./LoginForm.module.css"

const RegisterForm = ({action, setVisible}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className={cl.lContainer}>
            <label htmlFor="uname"><b>Почта будущего администратора</b></label>
            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Email'
                name="uname"
            />
            <label htmlFor="psw"><b>Пароль будущего администратора</b></label>
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='Пароль'
                name="psw"
            />
            <button onClick={() => {
                action(email, password)
                setVisible(false)
            }}>
                Добавить
            </button>
        </div>
    );
};

export default RegisterForm;