import React, { useState } from 'react';

import "./Hyperspace.css";

const Hyperspace = () => {
  //local state with isInHyperspace starts true
  //timeout changes it to false


  return (
    <div class="scene">
      <div class="wrap">
          <div class="wall wall-right"></div>
          <div class="wall wall-left"></div>   
          <div class="wall wall-top"></div>
          <div class="wall wall-bottom"></div> 
          <div class="wall wall-back"></div>    
      </div>
      <div class="wrap">
          <div class="wall wall-right"></div>
          <div class="wall wall-left"></div>   
          <div class="wall wall-top"></div>
          <div class="wall wall-bottom"></div>   
          <div class="wall wall-back"></div>    
      </div>
    </div>
  )
}

export default Hyperspace;