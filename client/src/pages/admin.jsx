import React, {useContext, useEffect, useState} from 'react';
import MyInput from "../components/UI/input/myInput";
import MyButton from "../components/UI/buttons/myButton";
import {AuthContext} from "../auth";
import IndexForOrders from "../API/indexForOrders";
import LoginForm from "../components/LoginForm";
import {Context} from "../index";
import UserService from "../services/AuthService";
import {observer} from "mobx-react-lite";
import OrderService from "../services/OrderService";
import MyList from "../components/MyList";
import MyModal from "../components/UI/MyModal/MyModal";
import RegisterForm from "../components/RegisterForm";
import cl from "./admin.module.css"

const Admin = observer(() => {
    //const {isAuth, setIsAuth} = useContext(AuthContext);
    //const {email, setEmail} = useState([""])
    //const {password, setPassword} = useState([""])

    //const login = event => {
        //event.preventDefault();
        //PostService.login(email, password).then(r => )
        //setIsAuth(true)
        //localStorage.setItem('auth', 'true')
    //}

    const {store} = useContext(Context);
    const [orders, setOrders] = useState([]);
    const [pgLimit, setPgLimit] = useState([15]);
    const [pgPage, setPgPage] = useState([0]);
    const [modalVisible, setModalVisible] = useState(false)
    //getOrders()

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth()
        }
    }, [])

    async function getOrders() {
        try {
            const response = await OrderService.getOrders(pgLimit, pgPage);
            let result = [];
            for(let i in response.data)
                result.push([i, response.data[i]]);
            setOrders(result);
        } catch (e) {
            console.log(e);
        }
    }
    async function deleteOrder(order_id) {
        try{
            const response = await OrderService.deleteOrder(order_id, pgLimit, pgPage)
            let result = [];
            for(let i in response.data)
                result.push([i, response.data[i]]);
            setOrders(result);
        } catch (e){
            console.log(e)
        }
    }
    async function updateOrder(order_id, order_status) {
        try{
            const response = await OrderService.updateOrderStatus(order_id, order_status, pgLimit, pgPage)
            let result = [];
            for(let i in response.data)
                result.push([i, response.data[i]]);
            setOrders(result);
        } catch (e){
            console.log(e)
        }
    }

    if (store.isLoading) {
        return <div  className={cl.aContainer}>Загрузка...</div>
    }

    if (!store.isAuth) {
        return (
            <div className={cl.aContainer}>
                <LoginForm/>
            </div>
        );
    }


    if (store.isAuth) {
        return (
            <div  className={cl.aContainer}>

                <MyModal visible={modalVisible} setVisible={setModalVisible}>
                    <RegisterForm setVisible={setModalVisible} action={store.registration}/>
                </MyModal>


                <button onClick={() => store.logout()}>Выйти</button>
                <button onClick={() => setModalVisible(true)}>Добавить нового администратора</button>
                <div style={{display: "flex", justifyContent: "space-around"}}>
                    <div></div>
                    <div><h2 style={{marginTop: "auto", marginBottom:"auto"}}>Список заказов:</h2></div>
                    <div><button style={{background : "9A0202",}} onClick={() => getOrders()}>Обновить список заказов</button></div>
                </div>
                <MyList remove={deleteOrder} update={updateOrder} records={orders}/>
            </div>
        );
    }
});

export default Admin;