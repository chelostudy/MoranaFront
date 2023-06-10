import React, {useContext, useState} from 'react';
import cl from "./login.module.css";
import MyInput from "../components/UI/input/myInput";
import MyButton from "../components/UI/buttons/myButton";
import {AuthContext} from "../auth";
import PostService from "../API/PostService";
import LoginForm from "../components/LoginForm";

const Admin = () => {
    //const {isAuth, setIsAuth} = useContext(AuthContext);
    //const {email, setEmail} = useState([""])
    //const {password, setPassword} = useState([""])

    //const login = event => {
        //event.preventDefault();
        //PostService.login(email, password).then(r => )
        //setIsAuth(true)
        //localStorage.setItem('auth', 'true')
    //}

    return (
        <div>
            <LoginForm/>
        </div>
    )}

export default Admin;




//<h1>Вход в админ-панель</h1>
//<MyInput
    //type="text"
    //placeholder="Введите логин"
    //value={email}
    //onChange={e => setEmail(e.target.value)}/>
//<MyInput
    //type="password"
    //placeholder="Введите пароль"/>
//value={password}
//onChange={e => setPassword(e.target.value)}/>
//<MyButton onClick={login}>Войти</MyButton>