import React from "react";

import "./Loading.scss";

function Loading() {
  return (
    <div className="loading-page">
      <p className="loading-text">Loading...</p>
      <hr className="loading-text-hr" />
      <div id="loading-rocket-ce">
        <div class="rocket-ce">
          <span>
            <i class="wing-top"></i>
            <i class="wing-bottom"></i>
            <i class="flame"></i>
            <i class="wastes">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </i>
            <i class="lightspeed">
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
