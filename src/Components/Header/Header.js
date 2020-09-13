import React  from 'react';
import { Link } from "react-router-dom";
import './Header.css';

function Header({ selectedDestination }) {

  console.log("window", window.location);
  console.log("id", selectedDestination.id)

  if(window.location.pathname === (`/destinations/${selectedDestination.id}`))  {
    console.log("taco")

    return (
      <div className="header">
        <h1>To The Moon And Back</h1>
        <Link to="/thank-you">
          <button className="back-earth-btn">Take Me Back To Earth</button>
        </Link>
      </div>
    )
  } else {
    return (
      <div className="header">
        <h1>To The Moon And Back</h1>
      </div>
    )
  }

}

export default Header;