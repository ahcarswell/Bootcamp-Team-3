import React from 'react'

// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './Accordion.css'

class Accordion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="Accordion">
        <h2 className="w3-center">More Info</h2>
        {/*function to click and drop down/bring up section showing paragraph*/}
        <p>The Power Of Donation!</p>
        <input
          type="button"
          className="w3-padding-16 w3-theme w3-button w3-block w3-left-align"
        />
        <div id="Demo1" className="w3-hide">
          <div className="w3-container">
            <p>
              Donations are a powerful way to help non-profits that are fighting
              for a good cause. Donations are the best way to show support, next
              to volunteering!
            </p>
          </div>
        </div>
        {/*function to click and drop down/bring up section showing other clickable links*/}
        <p>Links to our articles of the week</p>
        <input
          type="button"
          className="w3-padding-16 w3-theme w3-button w3-block w3-left-align"
        />

        {/*function to click and drop down/bring up section showing video*/}
        <p>Video</p>
        <div id="Demo2" className="w3-hide">
          <p>Demo2</p>
        </div>
        <input
          type="button"
          className="w3-padding-16 w3-theme w3-button w3-block w3-left-align"
        />
        <div id="Demo3" className="w3-hide w3-black">
          <div className="w3-container">
            <p>This is ____ , a non-profit aiming to help troubled youth:</p>
            <img
              alt="animate-zoom not available"
              src="img_snowtops.jpg"
              // style="width:30%;"
              className="w3-animate-zoom"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Accordion
