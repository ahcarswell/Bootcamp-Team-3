import React from 'react'

// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './Mission.css'

class Mission extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="Mission">
        {/*What we do section; no commands needed(no clicks or buttons)*/}
        <div className="w3-center">
          <h2>What we do</h2>
          <p className="w3-large">Check out how FundFlow works</p>
        </div>
        <br />
        <div className="w3-row w3-border">
          <div className="w3-half w3-container w3-blue w3-border">
            <h5>
              <b>Non-profit Database</b>
            </h5>
            <p>Gain access to hundreds of non-profits right here in the US.</p>
            <p>
              Search for a non-profit by looking for the region, state, category
              of non-profit, and even type of non-profit.
            </p>
          </div>
          <div className="w3-half w3-container">
            <h5>*Insert Image*</h5>
          </div>
        </div>
        <br />
        <div className="w3-row w3-border">
          <div className="w3-half w3-container w3-light-blue w3-border">
            <h5>
              <b>IRS Form 990</b>
            </h5>
            <p>Non-profits are required to complete an IRS Form 990</p>
            <p>
              Form 990 is used to gather information about the non-profit,
              promote compliance, and shares information with the public about a
              program.
            </p>
          </div>
          <div className="w3-half w3-container">
            <h5>*Insert Image*</h5>
          </div>
        </div>
        <br />
        <div className="w3-row w3-border">
          <div className="w3-half w3-container w3-light-green w3-border">
            <h5>
              <b>Donation Payment</b>
            </h5>
            <p>Donate to your favorite non-profit using our website!</p>
            <p>
              Backed by Paypal, all donations are safe and secure. Our users
              also have the neat option of having a donation remain anonymous.
            </p>
          </div>
          <div className="w3-half w3-container">
            <h5>*Insert Image*</h5>
          </div>
        </div>
        <br />
        <br />

        {/*Mission section; no commands needed(no clicks or buttons)*/}
        <div className="w3-center">
          <h2>Our Mission</h2>
          <p>
            FundFlow is misson is simple: making sure no good deed is undone
          </p>
        </div>
        <header className="w3-container w3-blue">
          <h2>Our mission</h2>
        </header>
        <div className="w3-padding w3-white w3-display-container">
          <span
            // onclick="this.parentElement.style.display='none'"
            className="w3-button w3-display-topright"
          />
          <h2>FundFlow is Mission</h2>
          <p>
            With recent events, the world is beginning to turn around. We have
            witnessed the countless injustices done to people. From Breonna
            Taylor to Ahmaud Aubrey to George Floyd, and sadly, many more.
          </p>
          <p>
            As such, people are now tired of the mistreatment and are standing
            up to these unspeakable acts. We are now fighting against these
            injustices. Many fight through protests, others through petitions
            and donations.
          </p>
          <p>
            FundFlow is here to help those of us who are fighting through
            donations. Many organizations and movements are asking for
            donations, but we must remain vigilante and make sure these
            organizations are legitimate and are using your money for a greater
            purpose. We want to make sure your donation is purposefully used and
            help ease any worries you may have.
          </p>
        </div>
        <footer className="w3-container w3-blue">
          <h5>
            <input type="button" className="fa fa-smile-o" />
          </h5>
        </footer>
        <hr />
      </div>
    )
  }
}

export default Mission
