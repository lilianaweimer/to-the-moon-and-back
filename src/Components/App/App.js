import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Weather from "../Weather/Weather";
import Destinations from "../Destinations/Destinations";
import Background from "../Background/Background";
import Form from "../Form/Form";
import celestialBodies from "../../Mock-Data.json";
import BoardingPass from "../BoardingPass/BoardingPass";

function App() {
  const [allCelestialBodies, setAllCelestialBodies] = useState([]);

  const getAllCelestialBodies = () => {
    Promise.resolve(celestialBodies).then((data) =>
      setAllCelestialBodies(data.celestialBodies)
    );
  };

  useEffect(() => {
    getAllCelestialBodies();
  }, []);

  return (
    <div className="App">
      <div className="background">
        <Background />
      </div>
      <Header />

      <Switch>
        <Route path="/voyage-planner" render={() => <BoardingPass />} />
        <Route
          exact
          path="/"
          render={() => (
            <div className="home-page">
              <Weather />
              <Destinations allCelestialBodies={allCelestialBodies} />
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
