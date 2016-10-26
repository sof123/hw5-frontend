//import {setLocation, getLocation} from '../location'
import React, { Component, PropTypes } from 'react'
import {connect } from 'react-redux'
import LandingItem from './Landing'
import MainItem from './Main'
import ProfileItem from './Profile'

export const App = ({location}) =>
{
  if (location === "Main.js")
  {
    return (
      <div>
        <MainItem/>
      </div>
    );
  }
  else if (location === "Landing.js")
  {
    return (
      <div>
        <LandingItem/>
      </div>
    );
  }
  else if (location === "Profile.js")
  {
    return (
      <div>
        <ProfileItem/>
      </div>
    );
  }
}
