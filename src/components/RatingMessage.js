import React from "react";
import thankYouImg from "../assets/illustration-thank-you.svg";
import classes from "./RatingMessage.module.css";

const RatingMessage = (props) => {
  return (
    <div className={classes["content"]}>
      <img
        src={thankYouImg}
        className={classes["img"]}
        alt="Thank you related info"
      />
      <span className={classes["selected-rating"]}>
        You selected {props.selectedRating} out of 5
      </span>
      <h2 className={classes["title"]}>Thank you!</h2>
      <p className={classes["message"]}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default RatingMessage;
