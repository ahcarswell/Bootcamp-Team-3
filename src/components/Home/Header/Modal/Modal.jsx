import React from 'react'

import './Modal.css'

class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div id="id01" className="w3-modal">
        <div className="w3-modal-content w3-card-4 w3-animate-top">
          <header className="w3-container w3-theme-l1">
            {/*the 'x' button to exit the modal*/}
            <span
              // onclick="document.getElementById('id01').style.display='none'"
              className="w3-button w3-display-topright"
            >
              ×
            </span>
            <h4>Want to know more about FundFlow?</h4>
            <h5>You are in luck!</h5>
          </header>
          {/*  */}
          <div className="w3-padding">
            <p>For any questions or genuine curiosity...</p>
            <p>Check out our About Page to learn more!</p>
            {/* Hover over 'About Page' and function as button */}
          </div>
          <footer className="w3-container w3-theme-l1">
            <p>
              {' '}
              <input type="button" className="fa fa-smile-o" />
            </p>
          </footer>
        </div>
      </div>
    )
  }
}

export default Modal
