import classes from './Checkout.module.css';
import React, { useRef, useState } from 'react';

const isEmpty = value => value.trim() === '';
const isSixChars = value => value.trim().length === 6;

const Checkout = props => {

    const [formsInputValidity, setFormsInputValidity] = useState({
        name: true,
        adress: true,
        zip: true,
        city: true
    });

    const nameInputRef = useRef();
    const adressInputRef = useRef();
    const zipInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredAdress = adressInputRef.current.value;
        const enteredZip = zipInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredAdressIsValid = !isEmpty(enteredAdress);
        const enteredZipIsValid = isSixChars(enteredZip);
        const enteredCityIsValid = !isEmpty(enteredCity);

        setFormsInputValidity({
            name: enteredNameIsValid,
            adress: enteredAdressIsValid,
            zip: enteredZipIsValid,
            city: enteredCityIsValid
        });

        const formIsValid = enteredNameIsValid && enteredAdressIsValid && enteredZipIsValid && enteredCityIsValid;

        if (!formIsValid) {
            return;
        }

        props.onSubmit({
            enteredName,
            enteredAdress,
            enteredZip,
            enteredCity
        });
    };

    const nameControlClasses = `${classes.control} ${
        formsInputValidity.name ? '' : classes.invalid
    }`;

    const adressControlClasses = `${classes.control} ${
        formsInputValidity.adress ? '' : classes.invalid
    }`;

    const zipControlClasses = `${classes.control} ${
        formsInputValidity.zip ? '' : classes.invalid
    }`;

    const cityControlClasses = `${classes.control} ${
        formsInputValidity.city ? '' : classes.invalid
    }`;

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameControlClasses}>
                <label htmlFor='name'>Name</label>
                <input ref={nameInputRef} type="text" id="name" />
                {!formsInputValidity.name && <p>Please enter a valid name!</p>}
                {}
            </div>
            <div className={adressControlClasses}>
                <label htmlFor='adress'>Adress</label>
                <input ref={adressInputRef} type="text" id="adress" />
                {!formsInputValidity.adress && <p>Please enter a valid adress!</p>}
            </div>
            <div className={zipControlClasses}>
                <label htmlFor='zip'>Zip Code</label>
                <input ref={zipInputRef} type="text" id="zip" />
                {!formsInputValidity.zip && <p>Please enter a valid zip code (6 digits)!</p>}
            </div>
            <div className={cityControlClasses}>
                <label htmlFor='city'>City</label>
                <input ref={cityInputRef} type="text" id="city" />
                {!formsInputValidity.city && <p>Please enter a valid city!</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;