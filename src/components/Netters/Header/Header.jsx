import React from 'react'

// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './Header.css'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          isClicked: false,
        }
        
      }

      render() {
        return(
            <header className="w3-container w3-theme w3-padding" id="myHeader">
            {/* This code was getting in the way of the nav button */}
            {/* Button to access the quick navigation */}
            {/* <input
              type="button"
              className="fa fa-bars w3-xlarge w3-button w3-theme"
            /> */}
            <div className="w3-center w3-text-white">
              <h4>Donations without the frustrations</h4>
              <h1 className="w3-xxxlarge w3-animate-bottom">FundFlow</h1>
              <div className="w3-padding-32">
                <p>Learn More</p>
                {/* This is the 'Learn More' button found under the FundFlow name in the header;
                it brings up the modal */ }
                <input 
                  type="button"
                  name="learnMoreButton"
                  className="w3-btn w3-large w3-light-green w3-hover-light-grey w3-text-white w3-animate-left"
                // onclick="document.getElementById('id01').style.display='block'"
                // style="font-weight:900;"
                />
              </div>
            </div>
          </header>
        )
      }

}

export default Header