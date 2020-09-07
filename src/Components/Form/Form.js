import React, { useState } from "react";
import "./Form.css"

const Form = () => {

  const [days, setDays] = useState("");
  const [travelerCount, setTravelerCount] = useState(0);
  const [travelers, setTravelers] = useState([]);

  const showTravelerForms = () => {
    let dumpster = []
    for (let i = 0; i < travelerCount; i++) {
        dumpster.push(i)
    }
    return dumpster.map(dumpsterNum => {
      return (
        <div key={dumpsterNum}>
          <p>Traveler {dumpsterNum + 1}</p>
          <label>
            Name:
            <input 
              type="text" 
              name="name"
              placeholder="Name"
              onChange={() => {}}
            />
          </label>
          <br />
          <label>
            Weight (lbs):
            <input 
              type="text" 
              name="weight"
              placeholder="Weight (lbs)"
              onChange={() => {}}
            />
          </label>
          <br />
          <label>
            Age:
            <input 
              type="text"
              name="age"
              placeholder="Age"
              onChange={() => {}}
            />
          </label>
        </div>
      )
    })

  }

  return (
    <fieldset className="form-container">
      <legend>Voyage Planner:</legend>
      <form className="booking-form">
        <label>
          How many Earth days do you want to spend at [destination]?
          <br />
          <input 
            type="number" 
            placeholder="Earth Days" 
            name="days"
            onChange={event => setDays(event.target.value)}
          />
        </label>
        <br />
        <label>
          How many people will be on your voyage?
          <br />
          <select 
            alt="Number of Travelers" 
            name="traveler-count" 
            className="dropdown"
            onChange={event => setTravelerCount(event.target.value)}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        </label>
        {showTravelerForms()}
        <br />
        <button disabled={true}>Start My Voyage!</button>
      </form>
    </fieldset>
  )
}

export default Form;