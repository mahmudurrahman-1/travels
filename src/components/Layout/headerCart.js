import React from 'react';
import {IoIosCart} from "react-icons/io";
import classes from "./headerCart.module.css";
export const HeaderCart=()=>{
    return (
    <button className={classes.button}>
        <span className={classes.icon}><IoIosCart /></span>
        <span className={classes}>Your Bookings</span>
        <span className={classes.badge}> 3 </span>

    </button>
    );
};