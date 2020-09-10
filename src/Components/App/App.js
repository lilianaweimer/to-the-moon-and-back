import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Weather from "../Weather/Weather";
import Destinations from "../Destinations/Destinations";
import Background from "../Background/Background";
import Form from "../Form/Form";
// import celestialBodies from "../../Mock-Data.json";
import { getAllCelestialBodies } from "../../ApiCalls.js";
import BoardingPass from "../BoardingPass/BoardingPass";

function App() {
  const [allCelestialBodies, setAllCelestialBodies] = useState([]);

  const getCelestialBodies = async () => {
    const celestialBodies = await getAllCelestialBodies();
    setAllCelestialBodies(celestialBodies);
    // Promise.resolve(celestialBodies).then((data) =>
    //   setAllCelestialBodies(data.celestialBodies)
    // );
  };

  useEffect(() => {
    getCelestialBodies();
  }, []);

  return (
    <div className="App">
      <div className="background">
        <Background />
      </div>
      <Header />

      <Switch>
        <Route path="/voyage-planner" render={() => <Form />} />
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
