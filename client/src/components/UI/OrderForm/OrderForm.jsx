import React, {useState} from 'react';
import {action} from "mobx";

const OrderForm = (props) => {
    const[name, setName]=useState('');
    const[email, setEmail]=useState('');
    const[phone, setPhone]=useState('');
    const[text, setText]=useState('');
    return (
        <div>


            <label htmlFor="nam"><b>Ваше имя</b></label>
            <input
                onChange={e => setName(e.target.value)}
                value={name}
                type="text"
                placeholder='Ваш номер телефона'
                name="nam"
            />

            <label htmlFor="nmb"><b>Номер телефона</b></label>
            <input
                onChange={e => setPhone(e.target.value)}
                value={phone}
                type="text"
                placeholder='Ваше имя'
                name="nmb"
            />

            <label htmlFor="ema"><b>Почтовый ящик</b></label>
            <input
                onChange={e => setEmail(e.target.value)}
                value={email}
                type="text"
                placeholder='Почтовый ящик'
                name="ema"
            />

            <label htmlFor="text"><b>Текст</b></label>
            <input
                onChange={e => setText(e.target.value)}
                value={text}
                type="text"
                placeholder='Текст...'
                name="text"
            />

            <button onClick={async () => {
                if (email == "" || phone == ""){const response = await props.action(text, phone, name, email)
                    props.setVisible(false)
                    console.log(response, "HER")
                    if (!response){

                    }}
                }}>Заказать звонок</button>
        </div>
    );
}

export default OrderForm;