import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';

const WeightsChart = ({ earthWeights, destinationWeights, destination }) => {

  const ref = useRef();

  const [currentData, setCurrentData] = useState(earthWeights)

  let margin = {top: 10, right: 10, bottom: 30, left: 60};
  let width = (currentData.length * 100) - margin.left - margin.right;
  let height = 300 - margin.top - margin.bottom;

  useEffect(() => {
    const svg = d3.select(ref.current)
        .attr("width", width)
        .attr("height", height)
        .style("border", "1px solid black")
  }, []);

  useEffect(() => {
    draw(currentData);
  }, [currentData]);

  const draw = (data) => {
    const svg = d3.select(ref.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")")
    
    // X axis
    var x = d3.scaleBand()
      .range([ 0, width ])
      .domain(data.map(function(d) { return d.name; }))
      .padding(0.2);
      svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))

    // Add Y axis
    var y = d3.scaleLinear()
      .domain([0,20])
      .range([ height, 0]);
      svg.append("g")
      .attr("class", "myYaxis")
      .call(d3.axisLeft(y));

      var u = svg.selectAll("rect")
    .data(data)

    u
    .enter()
    .append("rect")
    .merge(u)
    .transition()
    .duration(1000)
      .attr("x", function(d) { return x(d.name); })
      .attr("y", function(d) { return y(d.weight); })
      .attr("width", x.bandwidth())
      .attr("height", function(d) { return height - y(d.weight); })
      .attr("fill", "#3A55CF")
    
  }

  return (
    <div>
      <button className='chart-button' onClick={() => setCurrentData(earthWeights)}>Earth</button>
      <button className='chart-button' onClick={() => setCurrentData(destinationWeights)}>{destination}</button>
      <div className='weights-chart'>
        <svg ref={ref}></svg>
      </div>
    </div>
  )
}

export default WeightsChart;