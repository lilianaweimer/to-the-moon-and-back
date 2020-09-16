import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../../Images/to_the_moon_logo_full_color.svg";

function Header({ isTraveling }) {
  return (
    <div className="header">
      <img 
        src='../../Images/hyperspace.png' 
        alt='hyperspace' 
        aria-hidden={true} 
        className='invisible-hyperspace'
      />
      <section>
        <Link to="/">
          <img
            src={Logo}
            alt="To the Moon & Back logo"
            className="logo-header"
          />
        </Link>
      </section>
      <section>
        {isTraveling && (
          <Link to="/thank-you">
            <button className="back-earth-btn">Take Me Back To Earth</button>
          </Link>
        )}
      </section>
    </div>
  );
}

export default Header;
