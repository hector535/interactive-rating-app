import StarItem from "./StarItem";
import classes from "./StarList.module.css";

const StarList = (props) => {
  const { rating } = props;

  const stars = new Array(rating).map((_, i) => <StarItem key={i} />);
  return <ul className={classes["list"]}>{stars}</ul>;
};

export default StarList;
