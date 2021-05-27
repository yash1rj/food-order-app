import { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {

    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchMeals = async () => {
            const resp = await fetch('https://food-order-app-babae-default-rtdb.firebaseio.com/meals.json');

            if (!resp.ok) {
                throw new Error('Something went wrong !');
            }

            const respData = await resp.json();

            const loadedMeals = [];

            for (const key in respData) {
                loadedMeals.push({ id: key, ...respData[key] });
            }

            setMeals(loadedMeals);
            setIsLoading(false);
        };

        fetchMeals().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, []);

    if (isLoading) {
        return (
            <section className={classes.MealsLoading}>
                <p>Loading...</p>
            </section>
        );
    }

    if (httpError) {
        return (
            <section className={classes.MealsError}>
                <p>{httpError}</p>
            </section>
        );
    }

    const mealsList = meals.map(meal => {
        return <MealItem id={meal.id} key={meal.id} name={meal.name} desc={meal.description} price={meal.price} />
    });

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;