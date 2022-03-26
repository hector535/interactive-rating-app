import React, { Component } from "react";
import RatingForm from "./components/RatingForm";
import RatingMessage from "./components/RatingMessage";
import classes from "./App.module.css";

class App extends Component {
  state = {
    isFormSubmitted: false,
    selectedRating: 0,
  };

  onFormSubmittedHandler = (rating) => {
    this.setState({ isFormSubmitted: true, selectedRating: rating });
  };

  render = () => {
    let content = <RatingForm onSubmited={this.onFormSubmittedHandler} />;

    if (this.state.isFormSubmitted) {
      content = <RatingMessage selectedRating={this.state.selectedRating} />;
    }

    return <main className={classes["main"]}>{content}</main>;
  };
}

export default App;
