import React from 'react';
import {useState} from "react";
import cl from "../OrderForm/orderForm.module.css";
import {Link} from "react-router-dom";
import help from "../../../img/abc.png"

const Calc = () => {
const [firstMeasure,setFirst]=useState('')
const [secondMeasure,setSecond]=useState('')
const [thirdMeasure,setThird]=useState('')
const [result, setResult]=useState('')

    function calc(a,b,c){
        if (a!= 0 && b!= 0 && c != 0) return a*b*c
    }
return(
    <div className={cl.oForm} style={{flexDirection: "row", flexWrap:"wrap", alignContent:"space-between", maxWidth:"1140px"}}>
        <div style={{minWidth:"300px"}}>
            <h2 style={{marginBottom:"10px"}}>Калькулятор</h2>
        <div><label htmlFor="nmb"><b>Длина фундамента/ленты</b></label>
            <input
                onChange={e => {setFirst(e.target.value);
                    setResult(calc(e.target.value, secondMeasure, thirdMeasure))}}
                value={firstMeasure}
                type="number"
                placeholder='Длина фундамента'
                name="nmb"
            /></div>

        <div><label htmlFor="nam"><b>Ширина</b></label>
            <input
                onChange={e => {setSecond(e.target.value);
                    setResult(calc(firstMeasure,e.target.value, thirdMeasure))}}
                value={secondMeasure}
                type="number"
                placeholder='Ширина фундамента'
                name="nam"
            />
        </div>

        <div><label htmlFor="ema"><b>Высота</b></label>
            <input
                onChange={e => {setThird(e.target.value);
                    setResult(calc(firstMeasure, secondMeasure, e.target.value))
                    }}
                value={thirdMeasure}
                type="number"
                placeholder='Высота фундамента'
                name="ema"
            />
        </div>
        <label><b>Итого: <h3>{result}</h3> кубических метров бетона.</b></label></div>

        <div><img style={{maxWidth:"320px"}} src={help}/></div>
    </div>
)}

export default Calc;