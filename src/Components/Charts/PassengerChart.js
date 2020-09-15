import React, { useEffect, useState, useRef } from 'react';

import Chart, { ctx } from 'chart.js';

const WeightsChart = ({ earthWeights, destinationWeights, earthAges, destinationAges, destination }) => {

  const [currentData, setCurrentData] = useState(earthWeights);

  const names = Object.keys(currentData);
  const weights = Object.values(currentData);
  const chartData = {
    labels: names,
    datasets: [{
      label: 'Dataset 1',
      data: weights
    }]
  }

  const weightChart = new Chart(ctx, {
      type: 'bar',
      data: chartData,
      options: {
        responsive: true,
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Passenger Weights'
        }
      }
    }
  )
  
  return (
    <div>
      <button className='chart-button' onClick={() => setCurrentData(earthWeights)}>Earth</button>
      <button className='chart-button' onClick={() => setCurrentData(destinationWeights)}>{destination}</button>
      <div className='weights-chart-container'>
        <canvas id='weights-chart'></canvas>
      </div>
    </div>
  )
}

export default WeightsChart;