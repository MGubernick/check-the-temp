import React, { Component } from 'react'

import axios from 'axios'

// import { showWeather } from './../../api/weatherCalls.js'

import ZipCodeForm from './../ZipCodeForm/ZipCodeForm.js'

import Card from 'react-bootstrap/Card'

// import Spinner from 'react-bootstrap/Spinner'
const num = '1c4b5fde466659fdfea9e7a47c6a5be6'
const config = {
    apiUrl: `https://api.openweathermap.org/data/2.5/forecast?units=imperial&us&appid=${num}&zip=`
}

class WeatherShow extends Component {
  constructor (props) {
    super(props)

    this.state = {
      weather: '',
      zipCode: '',
      city: '',
      description: '',
      feelsLike: '',
      humidity: ''
    }
  }

  handleChange = event => {
    event.persist()
    this.setState({ zipCode: event.target.value })

  }

  handleSubmit = event => {
    event.preventDefault()
    const { msgAlert } = this.props
    // const { zipCode } = this.state
    // console.log('this is zipCode at handle submit', zipCode)
    // console.log('this is state just before the api call', this.state)

      // showWeather(zipCode)
      axios.get(`${config.apiUrl}${this.state.zipCode}`)
      .then(res => this.setState({ weather: res.data.list[0].main.temp, city: res.data.city.name, description: res.data.list[0].weather[0].description, feelsLike: res.data.list[0].main.feels_like, humidity: res.data.list[0].main.humidity }))
      // .then(res => console.log('Successfully setState, here is weather!', res.data))
      .then(console.log('Wee!'))
      // .catch(error => console.error('here is the catch', error))
      .catch(error => {
        msgAlert({
          message: 'That did\'t work...because: ' + error.message,
          variant: 'danger'
        })
      })
      event.target.reset()
  }

  render () {
    let forecastDisplay
    const { weather, city, description, feelsLike, humidity } = this.state

    if (!weather && !city && !description && !feelsLike && !humidity) {
      forecastDisplay = ''
    } else {
      forecastDisplay = (
    <div className="forecast-div">
      <Card className="display-card">
        <Card.Img className="img" src="https://imgur.com/8QcpYfB.png" alt="Card image" />
        <Card.ImgOverlay>
          <Card.Text className="city key">Your Forecast for: </Card.Text>
          <Card.Text className="value">{city}</Card.Text>
          <Card.Text className="key">Current Temp: </Card.Text>
          <Card.Text classname="value">{weather}°F &nbsp;&nbsp; (feels like: {feelsLike})</Card.Text>
          <Card.Text className="key">What To Expect: </Card.Text>
          <Card.Text className="value">
            humidity: {humidity}%
            <br/>
            {description}
          </Card.Text>
      </Card.ImgOverlay>
</Card>
    </div>
  )
}

    return (
      <div className="zip-code-form-display">
        <br/>
        <h4 className="check-forecast">Lets Check The Forecast!</h4>
        <ZipCodeForm
        weather={weather}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        />
        {forecastDisplay}
      </div>
    )
  }

}

export default WeatherShow
