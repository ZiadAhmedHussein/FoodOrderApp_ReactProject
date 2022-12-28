import { useState } from "react";

import classes from "./MealForm.module.css";
import Button from "../UI/Button";

const MealForm = () => {
  const [amount, setAmount] = useState(1);
  

  const changeAmount = (e) => {
    setAmount(e.target.value)
    
  }

  const addAmountHandeller = (e) => {
    e.preventDefault()
    console.log(amount)
  }

  
  

  return (
    <form onSubmit={addAmountHandeller} className={classes["meal-form"]}>
      <div>
        <label>Amount</label>
        <input onChange={changeAmount} type="number" step="1" min="1" value={amount} />
      </div>
      <Button type="submit" className={classes["add-order"]}>+Add</Button>
    </form>
  );
};

export default MealForm;