import classes from "./Card.module.css";

type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return <div className={classes.container}>{children}</div>;
};

export default Card;
