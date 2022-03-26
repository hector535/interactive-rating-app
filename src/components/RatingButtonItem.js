import classes from "./RatingButtonItem.module.css";

const RatingButtonItem = (props) => {
  const { label, isActive, onSelected } = props;

  const setActiveHandler = () => {
    onSelected(label);
  };

  return (
    <li className={classes["item"]}>
      <a
        href="#"
        className={
          isActive
            ? classes["btn"] + " " + classes["btn--active"]
            : classes["btn"]
        }
        onClick={setActiveHandler}
      >
        {label}
      </a>
    </li>
  );
};

export default RatingButtonItem;
