import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({  isTraveling }) {
  return (
    <div className="header">
      <h1>To The Moon And Back</h1>
      {isTraveling && 
      <Link to="/thank-you">
        <button className="back-earth-btn">Take Me Back To Earth</button>
      </Link>}
    </div>
  );
}

export default Header;
