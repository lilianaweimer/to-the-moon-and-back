import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

import "./Charts.css";

const PassengerChart = ({
  names,
  earthWeights,
  destinationWeights,
  earthAges,
  destinationAges,
  destination,
}) => {
  const [selection, changeSelection] = useState(`Weight at ${destination}`);

  let handleChange = (e) => {
    e.preventDefault();
    changeSelection(e.target.value);
  };

  const selectChartDisplay = () => {
    switch (selection) {
      case "Weight on Earth (lbs)":
        return earthWeights;
      case `Weight at ${destination} (lbs)`:
        return destinationWeights;
      case "Age on Earth":
        return earthAges;
      case `Age at ${destination}`:
        return destinationAges;
      default:
        return destinationWeights;
    }
  };

  const data = {
    labels: names,
    datasets: [
      {
        label: selection,
        backgroundColor: "rgba(58, 85, 207, 1)",
        borderColor: "rgba(61, 21, 102, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(140, 156, 227, 1)",
        hoverBorderColor: "rgba(133, 52, 213, 1)",
        data: selectChartDisplay(),
      },
    ],
  };

  return (
    <div className="passenger-chart-container">
      <Bar
        className="passenger-chart"
        data={data}
        width={100 * names.length}
        height={200}
        options={{
          maintainAspectRatio: false,
          legend: {
            labels: {
              fontFamily: "Montserrat",
              fontStyle: "bold",
              fontSize: 13,
            },
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
      <select className="chart-selection" onChange={(e) => handleChange(e)}>
        <option
          value={`Weight at ${destination} (lbs)`}
        >{`Weight at ${destination} (lbs)`}</option>
        <option
          value={`Age at ${destination}`}
        >{`Age at ${destination}`}</option>
        <option value="Weight on Earth (lbs)">Weight on Earth (lbs)</option>
        <option value="Age on Earth">Age on Earth</option>
      </select>
    </div>
  );
};

export default PassengerChart;
