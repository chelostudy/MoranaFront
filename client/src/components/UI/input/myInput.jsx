import React from 'react';
import classes from "./myInput.module.css";


const MyInput = (props) => {
    return (
        <div>
            <input className={classes.myInput} {...props}/>
        </div>
    );
};

export default MyInput;
