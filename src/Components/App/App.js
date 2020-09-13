import React, { useState, useEffect, useCallback } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Weather from "../Weather/Weather";
import Destinations from "../Destinations/Destinations";
import Background from "../Background/Background";
import Form from "../Form/Form";
import ThankYou from "../ThankYou/ThankYou";
import LandingSite from '../LandingSite/LandingSite';
import { getAllCelestialBodies, getRecentNews } from "../../ApiCalls.js";

function App() {
  const [allCelestialBodies, setAllCelestialBodies] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState({ destination: {} });
  const [passengers, setPassengers] = useState({ passengers: [] });
  const [newsArticle, setNewsArticle] = useState({});
  const [isTraveling, setIsTraveling] = useState(false);

  const getCelestialBodies = async () => {
    const celestialBodies = await getAllCelestialBodies();
    const news = await getRecentNews();
    setAllCelestialBodies(celestialBodies);
    setNewsArticle(news);
  };

  const selectDestination = (id) => {
    let foundDestination = allCelestialBodies.find(body => body.id === id);
    setSelectedDestination(selectedDestination.destination = foundDestination);
  }

  const setPassengersToState = (e, incomingPassengersData) => {
    e.preventDefault();
    
    setPassengers(passengers.passengers = incomingPassengersData);
  }

  const setTravelingState = useCallback((toggleTraveling) => {
    setIsTraveling(toggleTraveling)
  }, []);

  useEffect(() => {
    getCelestialBodies();
  }, []);

  return (
    <div className="App">
      <div className="background">
        <Background />
      </div>
      <Header 
        selectedDestination={ selectedDestination }
        isTraveling={ isTraveling }
        />

      <Switch>
        <Route 
          path="/thank-you"
          render={() => <ThankYou 
            selectedDestination={ selectedDestination }
            setTravelingState={ setTravelingState }
          />}
        />
        <Route
          path="/destinations/:id" 
          render={() => <LandingSite 
            destination={selectedDestination} 
            setTravelingState={ setTravelingState }
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
