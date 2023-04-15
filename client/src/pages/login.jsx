import React, {useContext} from 'react';
import cl from "./login.module.css";
import MyInput from "../components/UI/input/myInput";
import MyButton from "../components/UI/buttons/myButton";
import {AuthContext} from "../auth";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>Страница для логина</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Введите логин"/>
                <MyInput type="password" placeholder="Введите пароль"/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    )}

export default Login;