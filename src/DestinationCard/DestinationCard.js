import React, { useState }  from 'react';
import './DestinationCard.css';

function DestinationCard() {
  return (
    <div className='destination-card'>
      <p className='destination-name'>Destination Name & Icon</p>
      <p>Destination Image</p>
      <button className='plan-voyage-btn' role='button'>
        Plan My Voyage!
      </button>
    </div>
  )
}

export default DestinationCard;