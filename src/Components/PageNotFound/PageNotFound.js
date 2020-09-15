import React from "react";
import { Link } from "react-router-dom";

import "../ThankYou/ThankYou.css";

function PageNotFound () {
  return (
    <div className="thank-you-div">
      <img src={require("../../Images/hyperspace-rocket.svg")} className="rocket-img" alt="rocket"/>
      <p className="thank-you-message">Sorry! This page could not be found, please return to the home page.</p>
      <Link to="/">
        <button className="back-to-earth-btn">Back To Home Page</button>
      </Link>
    </div>
  )
}

export default PageNotFound;