import sass from './style.scss'
import React from 'react'
import ReactDOM from 'react-dom'
// import dummyData from '../dummy-data.json'
import Routes from './routes'
import { Router, browserHistory } from 'react-router'

ReactDOM.render(
    <Router routes={Routes} history={browserHistory}></Router>

    ,document.getElementById('root')
)

// QUESTIONS:
// 1. How does react-router fit into the whole idea of single page web apps?
// 2.

// NEXT STEPS:

// implement propTypes to components
// add quantity * price feature when calculating total

// pickUp time can't be set if "now" is checked, if someone checks pickup time and then decided now after already clicking now
// add conditions to Link buttons
// look into Locu and Google Maps API
// create state for remaining views on App component state. Pass down to children components




// DONE add Link to remaining View components
// DONE use setTimeout for add item to order notification/confirmation
// DONE user cannot add item unless all form elements are filled out
// DONE clear all form elements after add to order button is clicked
// DONE delete functionality on orderTotal
// DONE onChange, plus button appears to add item to order -- callback
// DONE onChange, plus button appears to add item to order -- callback
// DONE after user clicks add to order button -> quantity, size, drink name, and price are sent to table row component -- state callback
// DONE order total is calculated with each add to order click by summing all component prices -- state callback
// DONE tax is included in order total calculation
