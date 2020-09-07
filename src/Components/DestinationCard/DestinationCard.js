import React, { useState } from "react";
import "./DestinationCard.css";

function DestinationCard() {
  return (
    <div className="destination-card">
      <section className="destination-name-and-icon">
        <p className="destination-name">Destination Name</p>
        <img
          className="destination-icon"
          src={require("../../Images/moon.svg")}
        />
      </section>
      <p>Destination Image</p>
      <button className="plan-voyage-btn" role="button">
        Plan My Voyage!
      </button>
    </div>
  );
}

export default DestinationCard;