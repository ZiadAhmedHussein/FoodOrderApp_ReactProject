import React from "react";
import classes from "./UserOrderButton.module.css";

import Button from "../UI/Button";

const UserOrderButton = () => {

  
  return (
    <Button className={classes["user-order-button"]}>
      Your Order
      <span>0</span>
    </Button>
  );
};

export default UserOrderButton;