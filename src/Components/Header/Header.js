import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header({ selectedDestination, isTraveling }) {
  const useEffect = () => {};

  return (
    <div className="header">
      <h1>To The Moon And Back</h1>
      {isTraveling && 
      <Link to="/thank-you">
        <button className="back-earth-btn">Take Me Back To Earth</button>
      </Link>}
    </div>
  );

  // if(window.location.pathname === (`/destinations/${selectedDestination.id}`)) {
  //   return (
  //     <div className="header">
  //       <h1>To The Moon And Back</h1>
  //       <Link to="/thank-you">
  //         <button className="back-earth-btn">Take Me Back To Earth</button>
  //       </Link>
  //     </div>
  //   )
  // } else if(window.location.pathname === ("/thank-you")) {
  //   return (
  //     <div className="header">
  //       <h1>To The Moon And Back</h1>
  //     </div>
  //   )
  // } else {
  //   return (
  //     <div className="header">
  //       <h1>To The Moon And Back</h1>
  //     </div>
  //   )

  // }
}

export default Header;
