import React from "react";

import classes from "./Header.module.css";
import Logo from "./Logo";
import UserOrderButton from "../UserOrder/UserOrdeButton";

const Header = () => {
  return (
    <div className={classes.header}>
      <Logo />
      <UserOrderButton />
    </div>
  );
};

export default Header