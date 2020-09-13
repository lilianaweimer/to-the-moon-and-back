import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Weather from "../Weather/Weather";
import Destinations from "../Destinations/Destinations";
import Background from "../Background/Background";
import Form from "../Form/Form";
import ThankYou from "../ThankYou/ThankYou";
import { getAllCelestialBodies, getRecentNews } from "../../ApiCalls.js";

function App() {
  const [allCelestialBodies, setAllCelestialBodies] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState({ destination: {} });
  const [passengers, setPassengers] = useState({ passengers: [] });
  const [newsArticle, setNewsArticle] = useState({});

  const getCelestialBodies = async () => {
    const celestialBodies = await getAllCelestialBodies();
    const news = await getRecentNews();
    setAllCelestialBodies(celestialBodies);
    setNewsArticle(news);
  };

  const selectDestination = (id) => {
    console.log('app', id)
    let foundDestination = allCelestialBodies.find(body => body.id === id);
    setSelectedDestination(selectedDestination.destination = foundDestination);
    console.log(selectedDestination);
  }

  const setPassengersToState = (e, incomingPassengersData) => {
    e.preventDefault();
    
    setPassengers(passengers.passengers = incomingPassengersData);
  }

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
        <Route 
          path="/thank-you"
          render={() => <ThankYou 
            selectedDestination={ selectedDestination }
          />}
        />
        <Route 
          path="/voyage-planner" 
          render={() => <Form 
            selectedDestination={ selectedDestination }
            setPassengersToState={ setPassengersToState }
          />} 
        />
        <Route
          exact
          path="/"
          render={() => (
            <div className="home-page">
              <Weather article={ newsArticle }/>
              <Destinations 
                allCelestialBodies={ allCelestialBodies } 
                selectDestination={ selectDestination }
              />
            </div>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
