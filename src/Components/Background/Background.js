import React, { useState, PureComponent } from "react";
import "./Background.scss";

class Background extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="background">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </section>
    );
  }
}

export default Background;
