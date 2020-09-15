import React, { useEffect, useState, useRef } from 'react';

import Chart, { ctx } from 'chart.js';

const WeightsChart = ({ names, earthWeights, destinationWeights, earthAges, destinationAges, destination }) => {
  let chartRef = React.createRef();

  const [currentData, setCurrentData] = useState(destinationWeights);
  const [selection, changeSelection] = useState(`Weights at ${destination}`)

  let handleChange = (e) => {
    e.preventDefault();
    changeSelection(e.target.value);
  }

  const selectChartDisplay = () => {
    switch (selection) {
      case 'Weights on Earth':
        return earthWeights;
        break;
      case `Weights at ${destination}`:
        return destinationWeights;
        break;
      case 'Ages on Earth':
        return earthAges;
        break;
      case `Ages at ${destination}`:
        return destinationAges;
        break;
      default:
        return destinationWeights;
        break;
    }
  }

  const generateChart = () => {
    let chartInfo = {
      type: 'bar',
      data: {
          labels: names,
          datasets: [{
              fill: false,
              label: selection,
              data: selectChartDisplay(),
              borderColor: 'rgba(17, 75, 95, 1)',
              pointRadius: 4,
              borderWidth: 1,
              pointBackgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(205, 216, 79, 1)',
              ],
              pointBorderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)',
                  'rgba(205, 216, 79, 1)',
              ],
            }]
        },
      options: {
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
        },
    };
    return chartInfo;
  }

  const postChart = () => {
    let myChart = new Chart(chartRef.current.getContext("2d"), generateChart());
    return myChart;
  }
  
  return (
    <div>
      <button className='chart-button' onClick={() => setCurrentData(earthWeights)}>Earth</button>
      <button className='chart-button' onClick={() => setCurrentData(destinationWeights)}>{destination}</button>
      <div className='weights-chart-container'>
        <select className='chart-selection' onChange={(e) => handleChange(e)}>
          <option value='Weights on Earth'>Weights on Earth</option>
          <option value={`Weights at ${destination}`}>{`Weights at ${destination}`}</option>
          <option value='Ages on Earth'>Ages on Earth</option>
          <option value={`Ages at ${destination}`}>{`Ages at ${destination}`}</option>
        </select>
      <canvas id="myChart" ref={chartRef}>{postChart()}</canvas>
      </div>
    </div>
  )
}

export default WeightsChart;