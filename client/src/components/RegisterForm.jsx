import React, {FC, useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import UserService from "../services/AuthService";

const RegisterForm = ({action, setVisible}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Email'
            />
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder='Пароль'
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