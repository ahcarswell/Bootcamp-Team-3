import React from 'react'

// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './Forms.css'

class Forms extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    
  }


  render() {
    return (
        <div className="w3-row-padding">
         <h2 className="w3-center">Forms and Lists</h2>
          <div className="w3-center">
            <form className="w3-container w3-card-4">
              <h2>
                Sign up to receive emails and newsletters with updates and
                notifications
              </h2>
              {/* Function to click and type text */}
              <div className="w3-section">
                <p>Name</p>
                <input name="w3" className="w3-input" type="text" required />
              </div>
              
              {/* Function to click and type text */}
              <div className="w3-section">
                <p>Email</p>
                <input className="w3-input" type="text" required />
              </div>
              
              {/* function to click and type text */}
              <div className="w3-section">
                <p>Address</p>
                <input className="w3-input" type="text" required />
              </div>
              
              <div className="w3-row">
                <div className="w3-half">
                  {/* function to click and check/uncheck box */}
                  <input
                    id="emails"
                    className="w3-check"
                    type="checkbox"
                    checked="checked"
                    readOnly
                  />
                  <p>Receive emails</p>
                  <br />
                  {/* function to click and check/uncheck box */}
                  <input
                    id="newsletters"
                    className="w3-check"
                    type="checkbox"
                  />
                  <p>Receive newsletters</p>
                  <br />
                </div>

                <div className="w3-half">
                  <p>
                    <i>Would you like to receive a newsletter every week?</i>
                  </p>
                  
                  {/* function to click radio button */}
                  <input
                    id="weekly"
                    className="w3-radio"
                    type="radio"
                    name="time"
                    value="weekly"
                    checked
                    readOnly
                  />
                  <p>Yes, I would like a weekly newsletter</p>
                  <br />
                  
                  {/* function to click radio button */}
                  <input
                    id="monthly"
                    className="w3-radio"
                    type="radio"
                    name="time"
                    value="monthly"
                  />
                  <p>No, I would prefer a monthly newsletter</p>
                  <br />
                  
                  {/* function to click radio button */}
                  <input
                    id="none"
                    className="w3-radio"
                    type="radio"
                    name="time"
                    value="none"
                  />
                  <p>No, I do not want any newsletter</p>
                  <br />
                </div>
              </div>
            </form>
          </div>
        </div>
    )
  }
}

export default Forms