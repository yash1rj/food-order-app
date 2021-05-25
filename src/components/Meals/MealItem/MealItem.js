import classes from './MealItem.module.css';
import React from 'react';
import MealItemForm from './MealItemForm/MealItemForm';

const MealItem = props => {

    const price = `$${props.price.toFixed(2)}`;

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.title}</h3>
                <div className={classes.description}>{props.desc}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm />
            </div>
        </li>
    );
};

export default MealItem;