import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ThankYou.css";
import Hyperspace from '../Hyperspace/Hyperspace';

function ThankYou({ selectedDestination, setTravelingState }) {

  const [isInHyperspace, toggleHyperspace] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => toggleHyperspace(false), 6000);
    setTravelingState(false);
    return () => clearTimeout(timer);
  }, []);

  return (
    isInHyperspace ? 
    <Hyperspace /> :
    <div className="thank-you-div">
      <img src={require("../../Images/hyperspace-rocket.svg")} className="rocket-img" alt="rocket"/>
      <p className="thank-you-message">Thank you for flying with To The Moon And Back! We hope you enjoyed your trip to {selectedDestination.name} and we hope to travel with you again!</p>
      <Link to="/">
        <button className="back-to-earth-btn">Go On Another Voyage!</button>
      </Link>
    </div>
  )
}

export default ThankYou;