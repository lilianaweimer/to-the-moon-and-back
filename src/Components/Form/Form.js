import React from 'react';

const Form = () => {


  return (
    <fieldset>
      <form>
        <label for='days'>How many Earth days do you want to spend at [destination]?</label>
        <input 
          type='number' 
          placeholder='Earth Days' 
          name='days'
        />
        <label for='travelers'>How many people will be on your voyage?</label>
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
      </form>
    </fieldset>
  )
}

export default Form;