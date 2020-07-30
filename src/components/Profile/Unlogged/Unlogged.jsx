import React from 'react'

import './Unlogged.css'

import SignUpIm from './img/register.svg'
import LoginIm from './img/log.svg'

import axios from 'axios'

class Unlogged extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      pass: '',
      loggedIn: false,
      mode: 'login',
    }
    this.containerRef = React.createRef()

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.loginPostReq = this.loginPostReq.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState(() => ({
      username: nextProps.username,
      pass: nextProps.pass,
      loggedIn: nextProps.loggedIn,
    }))
    console.log('nextProps this.state ,', this.state)
  }

  handleInputChange(event) {
    const eventName = event.target.name
    const eventVal = event.target.value
    this.setState(() => ({ [eventName]: eventVal }))
    console.log(`${[eventName]}'s value changed to ${eventVal}`)
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('submitted form =', this.state)

    // API request
    // this.loginGetReq(this.state)
    this.loginPostReq(this.state)

    // console.log('apiResponse =', resp)

    // // PROPS call here
  }

  loginPostReq(cS) {
    axios
      .post('http://localhost:3000/backend/login', {
        params: {
          username: cS.username,
          pass: cS.pass,
        },
      })
      .then((response) => {
        // API output data
        console.log('Post-Req response.data =', response.data)

        const u = response.data.username
        const p = response.data.pass
        const v = response.data.verified

        const apiResponse = { username: u, pass: p, verified: v }

        this.props.saveUp(apiResponse)
        // What you want to do with the API output data
      })
      .catch((error) => {
        console.log(error)
      })
  }

  handleModeChange() {
    const curMode = this.state.mode
    if (curMode === 'login') {
      this.setState(() => ({ mode: 'signUp' }))
    } else if (curMode === 'signUp') {
      this.setState(() => ({ mode: 'login' }))
    }
    console.log('handleModeChange this.state', this.state)
  }

  render() {
    return (
      <div lang="en" className="container" ref={this.containerRef}>
        <div className="head">
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <script
            src="https://kit.fontawesome.com/64d58efce2.js"
            crossOrigin="anonymous"
          />
          <link rel="stylesheet" href="style.css" />
          <title>Sign in & Sign up Form</title>
        </div>
        <div className="body">
          <div className="container">
            <div className="forms-container">
              <div className="signin-signup">
                {/* Login Form */}
                <form
                  action="#"
                  className="sign-in-form"
                  onSubmit={this.handleSubmit}
                >
                  <h2 className="title">Sign in</h2>
                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input
                      type="text"
                      placeholder="Username"
                      name="username"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Password"
                      name="pass"
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <button type="submit" className="btn solid">
                    Login
                  </button>

                  <p className="social-text">
                    Or Sign in with social platforms
                  </p>
                  <div className="social-media">
                    <a href="#" className="social-icon">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-google"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </form>

                {/* signUp Form */}
                <form action="#" className="sign-up-form">
                  <h2 className="title">Sign up</h2>
                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Username" />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" />
                  </div>
                  <input type="submit" className="btn" value="Sign up" />
                  <p className="social-text">
                    Or Sign up with social platforms
                  </p>
                  <div className="social-media">
                    <a href="#" className="social-icon">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-google"></i>
                    </a>
                    <a href="#" className="social-icon">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </form>
              </div>
            </div>

            <div className="panels-container">
              <div className="panel left-panel">
                <div className="content">
                  <h3>Welcome to FundFlow!</h3>
                  <p>Donations without the frustrations Sign up</p>
                  <button
                    className="btn transparent"
                    id="sign-up-btn"
                    onClick={this.handleModeChange.bind(this)}
                  >
                    Sign up
                  </button>
                </div>
                <img src={LoginIm} className="image" alt="log alt" />
              </div>
              <div className="panel right-panel">
                <div className="content">
                  <h3>Already a Member? LOGIN!</h3>
                  <button
                    className="btn transparent"
                    id="sign-in-btn"
                    onClick={this.handleModeChange.bind(this)}
                  >
                    Sign in
                  </button>
                </div>

                <img src={SignUpIm} className="image" alt="register alt" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentDidUpdate() {
    if (this.state.mode === 'signUp') {
      this.containerRef.current.classList.add('sign-up-mode')
    } else if (this.state.mode === 'login') {
      this.containerRef.current.classList.remove('sign-up-mode')
    }
  }
}

export default Unlogged

// Unlogged.propTypes = {
//   saveUp: PropTypes.func,
// }
