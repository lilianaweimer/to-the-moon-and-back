import React from 'react';
import "./Form.css"

const Form = () => {


  return (
    <fieldset className='form-container'>
      <legend>Voyage Planner:</legend>
      <form className='booking-form'>
        <label>
          How many Earth days do you want to spend at [destination]?
          <br />
          <input 
            type='number' 
            placeholder='Earth Days' 
            name='days'
          />
        </label>
        <br />
        <label>
          How many people will be on your voyage?
          <br />
          <select 
            alt='Number of Travelers' 
            name='travelers' 
            className='dropdown'
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
        </select>
        </label>
      </form>
    </fieldset>
  )
}

export default Form;