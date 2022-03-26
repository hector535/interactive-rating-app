import React, { Component } from "react";
import RatingButtonItem from "./RatingButtonItem";
import classes from "./RatingButtonList.module.css";

class RatingButtonList extends Component {
  state = {
    activeElement: 0,
  };

  setActiveHandler = (element) => {
    this.setState({ activeElement: element });
    this.props.onSelectedRatingButton(element);
  };

  render = () => {
    const ratingButtons = [1, 2, 3, 4, 5].map((el, i) => (
      <RatingButtonItem
        key={i}
        label={el}
        isActive={this.state.activeElement === el}
        onSelected={this.setActiveHandler}
      />
    ));

    return <ul className={classes["list"]}>{ratingButtons}</ul>;
  };
}

export default RatingButtonList;
