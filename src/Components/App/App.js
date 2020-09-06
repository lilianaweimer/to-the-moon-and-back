import React, { useState }  from 'react';
import './App.css';
import Header from '../Header/Header';
import Weather from '../Weather/Weather';
import Destinations from '../Destinations/Destinations';
import Background from '../Background/Background';

function App() {
  return (
    <div className="whole-page">
      <div className="background">
        <Background />
      </div>
      <div className="App">
        <Header />
        <div className='home-page'>
          <Weather />
          <Destinations />
        </div>
      </div> 
    </div>
  );
}

export default App;
