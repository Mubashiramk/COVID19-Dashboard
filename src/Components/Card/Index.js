import CardItem from "./cardItem";
import "./card.css";

const Card = (props) => {
  const { newConfirmed, newDeath, newRecovered, country } = props;
  return (
    <div>
      <h2>{country === "" ? "WorldWideReport" : country}</h2>
      <div className="cardBox">
        <CardItem>
          <h2>New Confirmed</h2>
          <br />
          <span>{newConfirmed}</span>
        </CardItem>
        <CardItem>
          <h2>New Death</h2>
          <br />
          <span>{newDeath}</span>
        </CardItem>
        <CardItem>
          <h2>New Recovered</h2>
          <br />
          <span>{newRecovered}</span>
        </CardItem>
      </div>
    </div>
  );
};

export default Card;
