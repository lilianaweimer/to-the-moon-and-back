import React from "react";
import { Switch, Route } from 'react-router-dom';

import "./App.css";
import Header from "../Header/Header";
import Weather from "../Weather/Weather";
import Destinations from "../Destinations/Destinations";
import Background from "../Background/Background";
import Form from '../Form/Form';

function App() {
  return (
    <div className="App">
      <div className="background">
        <Background />
      </div>
      <Header />

      <Switch>
        <Route 
          path="/voyage-planner" 
          render={() => <Form />}
        />
        <Route 
          exact path="/" 
          render={() => (      
            <div className="home-page">
              <Weather />
              <Destinations />
            </div>
          )} 
        />
      </Switch>

    </div>
  );
}

export default App;
