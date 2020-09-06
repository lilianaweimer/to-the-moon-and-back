import React, { useState }  from 'react';
import './Destinations.css';
import DestinationCard from '../DestinationCard/DestinationCard';

function Destinations() {
  return (
    <div className='destinations'>
      <DestinationCard />
      <DestinationCard />
      <DestinationCard />
      <DestinationCard />
    </div>
  )
}

export default Destinations;