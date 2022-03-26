import StarItem from "./StarItem";
import classes from "./StarList.module.css";

const createDummyArray = (elements) => {
  let stars = [];
  for (let i = 0; i < elements; i++) {
    stars.push(<StarItem key={i} />);
  }

  return stars;
};

const StarList = (props) => {
  const { rating } = props;

  const stars = createDummyArray(rating);
  return <ul className={classes["list"]}>{stars}</ul>;
};

export default StarList;
