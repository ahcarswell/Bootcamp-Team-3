import React from 'react'

// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './ProgressBar.css'

class ProgressBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="ProgressBar">
        {/*Section is just to showcase; can add a function to update the progress if wanted*/}
        <h2 className="w3-center">Goal of the Week</h2>
        <p>
          {' '}
          FundFlow has chosen the donation goal of the organization to showcase
          on the homepage!
        </p>
        <p>
          {' '}
          Below is a progress bar to show how close they are donation goal!
        </p>
        <div className="w3-container">
          <div className="w3-light-gray">
            <div
              id="myBar"
              className="w3-center w3-padding w3-theme"
              // style="width:15%"
            >
              15%
            </div>
          </div>
          <br />
        </div>
      </div>
    )
  }
}

export default ProgressBar
