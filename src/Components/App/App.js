import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Weather from "../Weather/Weather";
import Destinations from "../Destinations/Destinations";
import Background from "../Background/Background";

function App() {
  return (
    <div className="App">
      <div className="background">
        <Background />
      </div>
      <Header />
      <div className="home-page">
        <Weather />
        <Destinations />
      </div>
    </div>
  );
}

export default App;
