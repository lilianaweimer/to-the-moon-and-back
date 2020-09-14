import React, { useState, useEffect } from 'react';
import "./LandingSite.css";
import { getLandMarks } from "../../ApiCalls";

import Hyperspace from '../Hyperspace/Hyperspace';
import AgesChart from '../Charts/AgesChart';
import WeightsChart from '../Charts/WeightsChart';

const LandingSite = ({ setTravelingState, destination, passengers }) => {
  
  const [isInHyperspace, toggleHyperspace] = useState(true);
  const [landMarks, setLandMarks] = useState([]);

  const earthWeights = [];
  const destinationWeights = [];
  const earthAges = [];
  const destinationAges = [];

  const displayLandMarks = () => {
    return landMarks.map(mark => {
      return (
        <div key={mark.id} className="land-mark-card">
          <p className="land-mark-name">{mark.name}</p>
          <p className="land-mark-type">{mark.landmark_type}</p>
          <img src={mark.image} className="land-mark-image" alt={mark.name}/>
          <p className="land-mark-description">{mark.description}</p>
        </div>
      )
    })
  }

  const displayPassengerInfo = () => {
    passengers.forEach(passenger => {
      earthAges.push({ 'name': passenger.name, 'age': Number(passenger.age) });
      destinationAges.push({ 'name': passenger.name, 'age': (Math.floor(Number(passenger.age) + (destination.travel.travel_time / 8760))) });
      earthWeights.push({ 'name': passenger.name, 'weight': Number(passenger.weight) })
      destinationWeights.push({ 'name': passenger.name, 'weight': (Math.floor(Number(passenger.weight) * Number(destination.gravity))) })
    })

    return (
      <div className='charts-container'>
        <WeightsChart 
          earthWeights={ earthWeights } 
          destinationWeights={ destinationWeights }
          destination={ destination.name }
        />
        <AgesChart 
          earthAges={ earthAges } 
          destinationAges={ destinationAges }
          destination={ destination.name }
        />
      </div>
    )
    // return passengers.map(passenger => {
    //   return (
    //     <div key={passenger.id} className="passenger-info">
    //       <p>Name: {passenger.name}</p>
    //       <p>Weight On Earth: {passenger.weight} lbs</p>
    //       <p>Weight at {destination.name}: {Number(passenger.weight) * Number(destination.gravity) } lbs</p>
    //       <p>Age on Earth: {passenger.age}</p>
    //       <p>Age at {destination.name}: {Number(passenger.age) + (destination.travel.travel_time / 8760)}</p>
    //     </div>
    //   )
    // })
  }

  const displayDestinationInfo = () => {
    return (
      <div className="">
        <p>Location: {destination.name}</p>
        <p>Location Type: {destination.celestial_body_type}</p>
        <p>Gravity: {destination.gravity}</p>
        <p>Planet Day: {destination.planet_day}</p>
        <p>Planet Year: {destination.planet_year}</p>
        <p>Travel Distance: {destination.travel.distance}</p>
        <p>Travel Time: {destination.travel.travel_time}</p>
      </div>
    )
  }

  useEffect(() => {
    const grabLandMarks = () => {
      getLandMarks(destination.id)
      .then(data => setLandMarks(data));
    }
    grabLandMarks();
  }, [destination.id]);

  useEffect(() => {
    setTravelingState(true);
  }, [setTravelingState]);

  useEffect(() => {
    const timer = setTimeout(() => toggleHyperspace(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  console.log(landMarks);

  return (
    isInHyperspace ? 
    <Hyperspace /> :
    <div className="landing-container">
      <div className="landing-img-info">
        <img className="destination-landing-img" src="https://res.cloudinary.com/dk-find-out/image/upload/q_80,h_800,f_auto/Nasa_Hi-res_neptune_despina_transit_combo_despinabrightened_usbm0u.jpg" alt="destination"/>
        <section className="destination-info-container">
          {displayDestinationInfo()}
        </section>
        <section className="traveler-info-container">
          {displayPassengerInfo()}
        </section>
      </div>
      <div className="land-marks-container">
        {displayLandMarks()}
      </div>
    </div>
  )
}

export default LandingSite;