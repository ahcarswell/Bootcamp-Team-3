import React from 'react'

import './Home.css'

import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="Home">
        <Header />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default Home
