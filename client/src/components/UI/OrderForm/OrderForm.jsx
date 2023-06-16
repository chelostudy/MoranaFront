import React, {useState} from 'react';
import {action} from "mobx";
import cl from './orderForm.module.css'
import {Link} from "react-router-dom";

const OrderForm = (props) => {
    const[name, setName]=useState('');
    const[email, setEmail]=useState('');
    const[phone, setPhone]=useState('');
    const[text, setText]=useState('');
    const[checked,setChecked]=useState(false)
    function changeCheckbox() {
        setChecked(!checked);
    }

    return (
        <div className={cl.oForm}>
            <div><label htmlFor="nmb"><b>Номер телефона*</b></label>
                <input
                    onChange={e => setPhone(e.target.value)}
                    value={phone}
                    type="text"
                    placeholder='Введите номер телефона...(обязательно)'
                    name="nmb"
                /></div>

            <div><label htmlFor="nam"><b>Ваше имя</b></label>
            <input
                onChange={e => setName(e.target.value)}
                value={name}
                type="text"
                placeholder='Введите ваше имя...'
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

            <div style={{height: "150px"}}><label htmlFor="text"><b>Текст</b></label>
            <textarea

                onChange={e => setText(e.target.value)}
                value={text}
                placeholder='Текст...'
                name="text"
            /></div>

            <div className={cl.oBtnDiv}><label htmlFor="pvc"><b>Я соглашаюсь с <Link to={"../privacy"}>Политикой конфиденциальности</Link></b></label>
            <input type={"checkbox"} checked={checked} onChange={changeCheckbox} name={"pvc"}/>
            </div>
            <button onClick={async () => {
                if (checked=="off") return{}
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