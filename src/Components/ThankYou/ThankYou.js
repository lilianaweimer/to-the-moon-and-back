import React from "react";
import "./ThankYou.css";

function ThankYou({ selectedDestination }) {
  return (
    <div className="thank-you-div">
      <p className="thank-you-message">Thank you for flying with To The Moon And Back! We hope you enjoyed your trip to {selectedDestination.name} and we hope to travel with you again!</p>
      <button className="back-to-earth-btn">Go On Another Voyage!</button>
    </div>
  )
}

export default ThankYou;