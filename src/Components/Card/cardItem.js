import "./card.css";

const CardItem = (props) => {
  return <div className="card">{props.children}</div>;
};

export default CardItem;
