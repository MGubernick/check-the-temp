import React from 'react'

const ZipCodeForm = ({ zipCode, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <h5>Where Are We Looking?:</h5>
    <input
      required
      placeholder='Enter Zipcode Here'
      name='zipCode'
      value={zipCode}
      onChange={handleChange}
      />
      <button type='submit'>Let's Take A Look!</button>
  </form>
)

export default ZipCodeForm
