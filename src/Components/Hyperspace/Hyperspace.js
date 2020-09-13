import React from 'react';

import "./Hyperspace.css";

const Hyperspace = () => {
  return (
    <div className="scene">
      <img className='hyperspace-rocket' src={require('../../Images/hyperspace-rocket.svg')} alt='a rocket flying through space'/>
      <div className="wrap">
          <div className="wall wall-right"></div>
          <div className="wall wall-left"></div>   
          <div className="wall wall-top"></div>
          <div className="wall wall-bottom"></div> 
          <div className="wall wall-back"></div>    
      </div>
      <div className="wrap">
          <div className="wall wall-right"></div>
          <div className="wall wall-left"></div>   
          <div className="wall wall-top"></div>
          <div className="wall wall-bottom"></div>   
          <div className="wall wall-back"></div>    
      </div>
    </div>
  )
}

export default Hyperspace;