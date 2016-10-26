import LandingItem from './components/Landing'
import MainItem from './components/Main'
import ProfileItem from './components/Profile'
import App from './components/App'
//import {setLocation, getLocation} from './location'

//require('expose?$!expose?jQuery!jquery')
//require("bootstrap-webpack")
//require('./styles.css')

import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import Reducer from './reducers'

console.log("before logger")
const logger = createLogger()
console.log("before store after logger")
const store = createStore(Reducer, applyMiddleware(logger))
console.log("after store after logger")

console.log("before render");

render(
  <Provider store={store}>
  <App/>
  </Provider>,
  document.getElementById('app')
)
