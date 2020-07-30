import React from 'react'

// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './Slideshow.css'

class Slideshow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="Slideshow">
        {/*Add function to click on side arrow buttons to scroll through slideshow*/}
        <h2 className="w3-center">Organizations of the week</h2>
        <p>
          {' '}
          Below is a slideshow of FundFlows chosen organizations of the week!
          Scroll through and click on an organization that speaks to you!
        </p>
        <div
          className="w3-content"
          // style="max-width:800px;position:relative"
        >
          <img
            alt="pic 1"
            className="mySlides w3-animate-opacity"
            src="https://images.freeimages.com/images/premium/previews/2356/23563581-large-group-of-people-outside.jpg"
            // style="width:100%"
          />
          <img
            alt="pic 2"
            className="mySlides w3-animate-opacity"
            src="https://media.istockphoto.com/photos/three-seniors-hugging-picture-id538650441"
            // style="width:100%"
          />
          <img
            alt="pic 3"
            className="mySlides w3-animate-opacity"
            src="https://media.istockphoto.com/photos/friends-making-a-selfie-together-at-party-picture-id903724814"
            // style="width:100%"
          />
          <img
            alt="pic 4"
            className="mySlides w3-animate-opacity"
            src="https://media.istockphoto.com/photos/sea-of-hands-picture-id857146092"
            // style="width:100%"
          />
        </div>
      </div>
    )
  }
}

export default Slideshow
