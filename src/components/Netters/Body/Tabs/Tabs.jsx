import React from 'react'

// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './Tabs.css'

class Tabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    
  }

  {/*function to click on tabs and show paragraph*/}

  render() {
    return (
        <div>

            <h2 className="w3-center">Our Tools</h2>
            <div className="w3-border">
            <div className="w3-bar w3-theme">
                <p>Database API</p>
                <input
                type="button"
                className="w3-bar-item w3-button testbtn w3-padding-16"
                />

                <p>PayPal</p>
                <input
                type="button"
                className="w3-bar-item w3-button testbtn w3-padding-16"
                />
                <p>React</p>
                <input className="w3-bar-item w3-button testbtn w3-padding-16" />
            </div>

            <div id="databaseAPI" className="w3-container city w3-animate-opacity">
                <h2>Non-Profit Database API</h2>
                <p>
                We use Non-Profit Database API to give you the ability to search
                for any non-profit here in the US
                </p>
                <p>It is easy to use and are able to garner results in seconds</p>
            </div>

            <div id="Paypal" className="w3-container city w3-animate-opacity">
                <h2>PayPal</h2>
                <p>Donate through our web app using PayPal</p>
                <p>
                PayPal is a trusted payment service that will make sure your
                donation is securely sent and received to a non-profit
                </p>
            </div>

            <div id="React" className="w3-container city w3-animate-opacity">
                <h2>React</h2>
                <p>Do you like how our web page looks?</p>
                <p>
                Thanks to React, we are able to create an amazing web page for you
                to enjoy. Navigating through our web app is easy and fast!
                </p>
            </div>
            </div>
            <br />
        </div>
    )
  }
}

export default Tabs