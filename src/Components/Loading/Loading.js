import React from "react";

import "./Loading.scss";

function Loading() {
  return (
    <div className="loading-page">
      <p className="loading-text">Loading...</p>
      <hr className="loading-text-hr" />
      <div id="loading-rocket-ce">
        <div className="rocket-ce">
          <span>
            <i className="wing-top"></i>
            <i className="wing-bottom"></i>
            <i className="flame"></i>
            <i className="wastes">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </i>
            <i className="lightspeed">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Loading;
