import classes from "./AboutUs.module.css";
import Card from "../UI/Card";

const AboutUs = () => {
  return(
    <Card className={classes["about-us"]}>
      <h2>Delicious Food, Delivered To You...</h2>
      <p>
        choose your favourite meal from our broad selection of available meals and enjoy 
        a delicious lunch or dinner at home.
      </p>
      <p>
        all our meals are cooked with high-quality ingredients, just-in-time and ofcourse
        by experienced chefs.
      </p>
    </Card>
  );
};

export default AboutUs;