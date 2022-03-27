import StarItem from "./StarItem";
import classes from "./StarList.module.css";

const createDummyArray = (length) => {
  let stars = [];

  for (let i = 0; i < length; i++) stars.push(<StarItem key={i} />);

  return stars;
};

const StarList = (props) => {
  const { rating } = props;

  const stars = createDummyArray(rating);
  return <ul className={classes["list"]}>{stars}</ul>;
};

export default StarList;
