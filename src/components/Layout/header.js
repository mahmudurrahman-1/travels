import React from 'react';
import kuala from "../imgs/kualalampur.jpg";
import classes from "./header.module.css";
import { HeaderCart } from './headerCart';
export const Header=()=>{
return( <React.Fragment>
<header className={classes.header}>
    <h1>Travels</h1>
    <HeaderCart />
</header>
<div className={classes['main-image']}>
    <img src={kuala} alt="Kualalampur" />
</div>
</React.Fragment>
);
};
