import LandingItem from './components/Landing'
import MainItem from './components/Main'
import ProfileItem from './components/Profile'
import App from './components/app'
import {setLocation, getLocation} from './location'

//require('expose?$!expose?jQuery!jquery')
//require("bootstrap-webpack")
//require('./styles.css')

import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import Reducer from './reducers'


const logger = createLogger()
const store = createStore(Reducer, applyMiddleware(logger))

render(
  <Provider store={store}>
  <App/>
  </Provider>,
  document.getElementById('app')
)
