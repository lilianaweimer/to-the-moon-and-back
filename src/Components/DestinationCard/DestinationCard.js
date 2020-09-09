import React, { useState } from "react";
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
        <img className="destination-img" src={image} alt={`${name}-image`} />
      </div>
      <button className="plan-voyage-btn" role="button">
        Plan My Voyage!
      </button>
    </div>
  );
}

export default DestinationCard;
