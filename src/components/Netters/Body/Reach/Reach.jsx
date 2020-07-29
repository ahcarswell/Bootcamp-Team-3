import React from 'react'

// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './Reach.css'

class Reach extends React.Component {
    constructor(props) {
      super(props)
      this.state = {}
      
    }
  
    render() {
      return (
        <div>
            <div className="w3-container w3-center">
            <h3>Our Reach</h3>
            <p>Read how FundFlow has helped these fighters!</p>
            </div>
            <div className="w3-row-padding">
            <div className="w3-third">
                <div className="w3-card-4 w3-hover-dark-grey">
                    {/*Hover over image; could make it clickable if you want to*/}
                <img
                    src="/w3images/avatar.jpg"
                    alt="man1"
                    // style="width:100%"
                />
                <div className="w3-container">
                    <p>John Doe - volunteer at ____</p>
                </div>
                </div>
            </div>

            <div className="w3-third">
                <div className="w3-card-4 w3-hover-dark-grey">
                    {/*Hover over image; could make it clickable if you want to*/}
                <img
                    src="/w3images/man_bench.jpg"
                    alt="man2"
                    // style="width:100%"
                />
                <div className="w3-container">
                    <p>John Smith - founder of ____</p>
                </div>
                </div>
            </div>

            <div className="w3-third">
                <div className="w3-card-4 w3-hover-dark-grey">
                    {/*Hover over image; could make it clickable if you want to*/}
                <img
                    src="/w3images/girl_hat.jpg"
                    alt="lady1"
                    // style="width:100%"
                />
                <div className="w3-container">
                    <p>Mary Sue - donated to ____</p>
                </div>
                </div>
            </div>
            </div>
        </div>
      )
    }
  }
  
  export default Reach