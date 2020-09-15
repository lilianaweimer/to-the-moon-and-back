import React, { useEffect, useState, useRef } from 'react';
import { Bar } from 'react-chartjs-2';

import './Charts.css'

const PassengerChart = ({ names, earthWeights, destinationWeights, earthAges, destinationAges, destination }) => {

  const [selection, changeSelection] = useState(`Weights at ${destination}`)

  let handleChange = (e) => {
    e.preventDefault();
    changeSelection(e.target.value);
  }

  const selectChartDisplay = () => {
    switch (selection) {
      case 'Weights on Earth (lbs)':
        return earthWeights;
      case `Weights at ${destination} (lbs)`:
        return destinationWeights;
      case 'Ages on Earth':
        return earthAges;
      case `Ages at ${destination}`:
        return destinationAges;
      default:
        return destinationWeights;
    }
  }

  const data = {
    labels: names,
    datasets: [
      {
        label: selection,
        backgroundColor: 'rgba(58, 85, 207, 1)',
        borderColor: 'rgba(61, 21, 102, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(140, 156, 227, 1)',
        hoverBorderColor: 'rgba(133, 52, 213, 1)',
        data: selectChartDisplay()
      }      
    ]
  };


  
  return (
    <div className='passenger-chart-container'>
      <Bar
          className='passenger-chart'
          data={data}
          width={100 * names.length}
          height={200}
          options={{
            maintainAspectRatio: false,
            legend: {
              labels: {
                fontFamily: 'Montserrat',
                fontStyle: 'bold',
                fontSize: 10,
              }
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                      }
                  }]
              }
          }}
        />
      <select className='chart-selection' onChange={(e) => handleChange(e)}>
        <option value={`Weights at ${destination} (lbs)`}>{`Weights at ${destination} (lbs)`}</option>
        <option value={`Ages at ${destination}`}>{`Ages at ${destination}`}</option>
        <option value='Weights on Earth (lbs)'>Weights on Earth (lbs)</option>
        <option value='Ages on Earth'>Ages on Earth</option>
      </select>
    </div>
  )
}

export default PassengerChart;