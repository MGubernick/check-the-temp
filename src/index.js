import React from 'react'
import ReactDOM from 'react-dom'
// import { Route } from 'react-router-dom'
import './index.scss'

// import Header from './components/Header/Header.js'
import App from './App'
// import Home from './components/Home/Home.js'
import { HashRouter } from 'react-router-dom'

const appJsx = (
  <HashRouter>
  <App />
  </HashRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
