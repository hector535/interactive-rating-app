import StarIcon from "../assets/icon-star.svg";
import classes from "./StarItem.module.css";

const StarItem = () => {
  return (
    <li className={classes["item"]}>
      <img className={classes["icon"]} src={StarIcon} alt="Star icon" />
    </li>
  );
};

export default StarItem;
