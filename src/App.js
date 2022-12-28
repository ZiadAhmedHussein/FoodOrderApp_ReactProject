
import classes from './App.module.css';
import Header from './Components/Header/Header';
import AboutUs from './Components/AboutUs/AboutUs';
import Minue from './Components/Minue/Minue';

let MINUE_MEALS = [
  {
    id: "m1",
    mealName: "Suchi",
    mealDesc: "hbjndfsldshnlkhbsjnlkbjsnllfkbsjnfbjsknk",
    mealPrice: "$25.99"
  },
  {
    id: "m2",
    mealName: "Pastta",
    mealDesc: "hbjndfsldshnlkhbsjnlkbjsnllfkbsjnfbjsknk",
    mealPrice: "$33.99"
  },
  {
    id: "m3",
    mealName: "Barbecue Burger",
    mealDesc: "hbjndfsldshnlkhbsjnlkbjsnllfkbsjnfbjsknk",
    mealPrice: "$30.99"
  },
  {
    id: "m4",
    mealName: "Green Bowil",
    mealDesc: "hbjndfsldshnlkhbsjnlkbjsnllfkbsjnfbjsknk",
    mealPrice: "$19.99"
  },
  {
    id: "m5",
    mealName: "Green Salad",
    mealDesc: "hbjndfsldshnlkhbsjnlkbjsnllfkbsjnfbjsknk",
    mealPrice: "$12.40"
  },
  
];

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <AboutUs />
      <Minue minue={MINUE_MEALS}/>
    </div>
  );
}

export default App;
