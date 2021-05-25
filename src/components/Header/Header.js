import classes from './Header.module.css';
import React, { Fragment } from 'react';
import mealsBkg from '../../assets/meals.jpg';
import HeaderCartBtn from './HeaderCartBtn';

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>TastyMeals</h1>
                <HeaderCartBtn onClick={props.onShowCart} />
            </header>
            <div className={classes.mainImage}>
                <img src={mealsBkg} alt="Meal background" />
            </div>
        </Fragment>
    );
};

export default Header;