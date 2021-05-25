import classes from './HeaderCartBtn.module.css';
import React from 'react';
import CartIcon from '../Cart/CartIcon';

const HeaderCartBtn = props => {
    return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                My Cart
            </span>
            <span className={classes.badge}>
                2
            </span>
        </button>
    );
};

export default HeaderCartBtn;

