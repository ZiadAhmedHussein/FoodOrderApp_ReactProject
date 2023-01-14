import React from "react";

import classes from "./Meal.module.css";
import MealForm from "./MealForm";

const Meal = (props) => {
  const amountOfMeal = (mealAmount) => {
    props.onMealAmount(mealAmount);
  };
  return (
    <div className={classes.meal}>
      <div className={classes["meal-details"]}>
        <h3>{props.mealName}</h3>
        <p className={classes["meal-description"]}><i>{props.mealDesc}</i></p>
        <p className={classes["meal-price"]}>{props.mealPrice}</p>
      </div>
      <MealForm onMealAmount={amountOfMeal} />
    </div>
  );
};

export default Meal;
