import "./card.css";

const Card = (props) => {
  const { totalConfirmed, totalDeath, totalRecovered, activeCases } = props;
  return (
    <div>
      <div className="cardBox">
        <div className="top-card">
          <div className="card" id="first-card">
            <p>Total Confirmed</p>
            <h2>{totalConfirmed}</h2>
          </div>
          <div className="card" id="second-card">
            <p>Active Cases</p>
            <h2>{activeCases}</h2>
          </div>
        </div>
        <div className="bottom-card">
          <div className="card" id="third-card">
            <p>Total Death</p>
            <h2>{totalDeath}</h2>
          </div>
          <div className="card" id="fourth-card">
            <p>Total Recovered</p>
            <h2>{totalRecovered}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
