import React, { useState, useEffect } from 'react';

import Hyperspace from '../Hyperspace/Hyperspace';

const LandingSite = () => {
  //local state with isInHyperspace starts true
  //timeout changes it to false
  const [isInHyperspace, toggleHyperspace] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => toggleHyperspace(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    isInHyperspace ? 
    <Hyperspace /> :
    <p>location!</p>
  )
}

export default LandingSite;