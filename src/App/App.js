import React, { useState }  from 'react';
import './App.css';
import Header from '../Header/Header';
import Weather from '../Weather/Weather';
import Destinations from '../Destinations/Destinations';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='home-page'>
        <Weather />
        <Destinations />
      </div>
    </div>
  );
}

export default App;
