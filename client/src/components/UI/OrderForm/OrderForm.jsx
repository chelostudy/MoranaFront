import React, {useState} from 'react';
import {action} from "mobx";
import cl from './orderForm.module.css'

const OrderForm = (props) => {
    const[name, setName]=useState('');
    const[email, setEmail]=useState('');
    const[phone, setPhone]=useState('');
    const[text, setText]=useState('');
    return (
        <div className={cl.oForm}>


            <div><label htmlFor="nmb"><b>Номер телефона*</b></label>
                <input
                    onChange={e => setPhone(e.target.value)}
                    value={phone}
                    type="text"
                    placeholder='Ваше имя'
                    name="nmb"
                /></div>

            <div><label htmlFor="nam"><b>Ваше имя</b></label>
            <input
                onChange={e => setName(e.target.value)}
                value={name}
                type="text"
                placeholder='Ваш номер телефона'
                name="nam"
            /></div>

            <div><label htmlFor="ema"><b>Почтовый ящик</b></label>
            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Почтовый ящик'
                name="ema"
            /></div>

            <div><label htmlFor="text"><b>Текст</b></label>
            <input
                onChange={e => setText(e.target.value)}
                value={text}
                type="text"
                placeholder='Текст...'
                name="text"
            /></div>

            <button onClick={async () => {
                if (!email == "" || !phone == ""){const response = await props.action(text, phone, name, email)
                    try{props.setVisible(false)}catch (e){}
                    console.log(response, "HER")
                    if (!response){

                    }}
                }}>Заказать звонок</button>
        </div>
    );
}

export default OrderForm;