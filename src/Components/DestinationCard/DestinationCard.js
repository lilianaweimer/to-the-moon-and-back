import React from "react";
import { Link } from "react-router-dom";
import "./DestinationCard.css";

function DestinationCard({ id, name, type, image }) {
  return (
    <div className="destination-card" key={id}>
      <section className="destination-name-and-icon">
        <div className="destination-name-div">
          <p className="destination-name">{name}</p>
        </div>
        <div className="destination-icon-div">
          <img
            className="destination-icon"
            src={require(`../../Images/${type}.svg`)}
            alt={`${type}-icon`}
          />
        </div>
      </section>
      <div className="destination-image-container">
        <img className="destination-img" src={image} alt={`${name}`} />
      </div>
      <Link to={`voyage-planner/${id}`}>
        <button className="plan-voyage-btn">Plan My Voyage!</button>
      </Link>
    </div>
  );
}

export default DestinationCard;
