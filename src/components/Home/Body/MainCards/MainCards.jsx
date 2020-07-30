import React from 'react'

// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
//jsx file for the Tracking, Organization, and Secure cards

import './MainCards.css'

class MainCards extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      // {/*All three cards animate, flying from the bottom*/}
      <div className="MainCards w3-row-padding w3-center w3-margin-tops">
        <div className="w3-third w3-animate-bottom">
          <div className="w3-card w3-container">
            <h3>Tracking</h3>
            <br />
            <i
              className="fa fa-arrows w3-margin-bottom w3-text-theme"
              // style="font-size:120px"
            />
            <p>Real-time tracking of organizations</p>
            <p>Maintain donations with our system</p>
            <p>Find out what organizations are doing with your money</p>
          </div>
        </div>

        <div className="w3-third w3-animate-bottom">
          <div
            className="w3-card w3-container"
            // style="min-height:460px"
          >
            <h3>Organizations</h3>
            <br />
            <i
              className="fa fa-css3 w3-margin-bottom w3-text-theme"
              // style="font-size:120px"
            />
            <p>Trusted organizations with a great purpose</p>
            <p>Search for any non-profit here in the US</p>
            <p>Access to IRS Form 990</p>
          </div>
        </div>

        <div className="w3-third w3-animate-bottom">
          <div
            className="w3-card w3-container"
            // style="min-height:460px"
          >
            <h3>Secure</h3>
            <br />
            <i
              className="fa fa-diamond w3-margin-bottom w3-text-theme"
              // style="font-size:120px"
            />
            <p>Reliable donation payment</p>
            <p>Secure technology to protect sensitive information</p>
            <p>Remain anonymous when donating</p>
          </div>
        </div>
      </div>
    )
  }
}

export default MainCards
