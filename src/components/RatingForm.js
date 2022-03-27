import React, { Component } from "react";
import StarList from "./StarList";
import RatingButtonList from "./RatingButtonList";
import classes from "./RatingForm.module.css";

class RatingForm extends Component {
  state = {
    rating: 0,
  };

  selectedRatingButtonHandler = (value) => {
    this.setState({ rating: value });
  };

  submitRatingHandler = (event) => {
    event.preventDefault();

    if (this.state.rating === 0) {
      return;
    }

    this.props.onSubmited(this.state.rating);
  };

  render = () => {
    return (
      <form className={classes["form"]} onSubmit={this.submitRatingHandler}>
        <StarList rating={this.state.rating} />
        <h1 className={classes["title"]}>How did we do?</h1>
        <p className={classes["info"]}>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <RatingButtonList
          onSelectedRatingButton={this.selectedRatingButtonHandler}
        />
        <button
          className={classes["submit"]}
          disabled={this.state.rating === 0}
        >
          submit
        </button>
      </form>
    );
  };
}

export default RatingForm;
