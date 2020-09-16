import React, { useState, useEffect, useCallback } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Weather from "../Weather/Weather";
import Destinations from "../Destinations/Destinations";
import Background from "../Background/Background";
import Form from "../Form/Form";
import ThankYou from "../ThankYou/ThankYou";
import LandingSite from "../LandingSite/LandingSite";
import PageNotFound from "../PageNotFound/PageNotFound";
import Loading from "../Loading/Loading";
import { getAllCelestialBodies, getRecentNews } from "../../ApiCalls.js";

function App() {
  const [allCelestialBodies, setAllCelestialBodies] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState({
    destination: {},
  });
  const [passengers, setPassengers] = useState({ passengers: [] });
  const [newsArticle, setNewsArticle] = useState({});
  const [isTraveling, setIsTraveling] = useState(false);
  const [loading, setLoading] = useState(true);
  const [tripDays, setTripDays] = useState(0);

  const getCelestialBodies = async () => {
    const celestialBodies = await getAllCelestialBodies();
    const news = await getRecentNews();
    setAllCelestialBodies(celestialBodies);
    setNewsArticle(news);
    setLoading(false);
  };

  const selectDestination = (id) => {
    let foundDestination = allCelestialBodies.find((body) => body.id === id);
    setSelectedDestination(
      (selectedDestination.destination = foundDestination)
    );
  };

  const setPassengersToState = (
    event,
    incomingPassengersData,
    incomingDays
  ) => {
    event.preventDefault();
    setPassengers((passengers.passengers = incomingPassengersData));
    setTripDays(Number(incomingDays));
  };

  const setTravelingState = useCallback((toggleTraveling) => {
    setIsTraveling(toggleTraveling);
  }, []);

  useEffect(() => {
    setLoading(true);
    getCelestialBodies();
  }, []);

  return (
    <div className="App">
      <div className="background">
        <Background isTraveling={isTraveling} />
      </div>
      <Header
        selectedDestination={selectedDestination}
        isTraveling={isTraveling}
        setTravelingState={setTravelingState}
        />
      {loading ? (
        <Loading />
      ) : (
        <Switch>
          <Route
            path="/thank-you"
            render={() => (
              <ThankYou
                selectedDestination={selectedDestination}
                setTravelingState={setTravelingState}
              />
            )}
          />
          <Route
            path="/destinations/:id"
            render={() => (
              <LandingSite
                destination={selectedDestination}
                setTravelingState={setTravelingState}
                passengers={passengers}
                tripDays={tripDays}
              />
            )}
          />
          <Route
            path="/voyage-planner"
            render={() => (
              <Form
                selectedDestination={selectedDestination}
                setPassengersToState={setPassengersToState}
              />
            )}
          />
          <Route path="/:undefined" render={() => <PageNotFound />} />
          <Route
            exact
            path="/"
            render={() => (
              <div className="home-page">
                <Destinations
                  allCelestialBodies={allCelestialBodies}
                  selectDestination={selectDestination}
                />
                <Weather article={newsArticle} />
              </div>
            )}
          />
        </Switch>
      )}
    </div>
  );
}

export default App;
