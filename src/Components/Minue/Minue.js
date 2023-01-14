import React from "react";

import classes from "./Minue.module.css";

import Card from "../UI/Card";
import Meal from "./Meal";

const Minue = (props) => {
  const amountOfMeal = (mealAmount) => {
    console.log(mealAmount);
    props.onMealAmount(mealAmount);
  };
  return (
    <Card className={classes.minue}>
      {props.minue.map((meal) => {
        return(
          <Meal
            key={meal.id}
            mealName={meal.mealName} 
            mealDesc={meal.mealDesc} 
            mealPrice={meal.mealPrice} 
            onMealAmount={amountOfMeal}
          />
        )
      })}
      
    </Card>
  );
};

export default Minue;