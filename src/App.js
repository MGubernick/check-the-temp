import React, { Component, Fragment } from 'react'

import { Route } from 'react-router-dom'

import { v4 as uuid } from 'uuid'

import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert.js'
import Header from './components/Header/Header.js'
import Home from './components/Home/Home.js'
import WeatherShow from './components/WeatherShow/WeatherShow.js'
// import Forecast from './components/Forecast/Forecast.js'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: null,
      msgAlerts: []
    }
  }

  // set the user state to the past in user
  setUser = user => this.setState({ user: user })

  // reset the user state back to null, (Signing-Out our user)
  clearUser = () => this.setState({ user: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()

    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { msgAlerts, user } = this.state

    return (
      <Fragment>
        <Header user={user} />
        {msgAlerts.map(msgAlert => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
            />
        ))}
        <main className="display-body">
          <Route exact path='/' render={() => (
            <Home msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route exact path='/weather' render={() => (
            <WeatherShow msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
