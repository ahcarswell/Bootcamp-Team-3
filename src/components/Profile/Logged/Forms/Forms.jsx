import React from 'react'

import axios from 'axios'

import './Forms.css'

class Forms extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      address: '',
      rE: 'false',
      rN: 'false',
      time: 'weekly',
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.formPostReq = this.formPostReq.bind(this)
  }

  handleInputChange(event) {
    console.log(`${event.target.name} value changed to`, event.target.value)
    this.setState({ [event.target.name]: event.target.value })
  }

  handleReceiveEmailsCC() {
    const oRE = this.state.rE
    if (oRE === 'true') {
      this.setState(() => ({ rE: 'false' }))
    } else {
      this.setState(() => ({ rE: 'true' }))
    }
    console.log('receiveEmails checkbox changed to ', this.state.rE)
  }

  handleReceiveNewsCC() {
    const oRN = this.state.rN
    if (oRN === 'true') {
      this.setState(() => ({ rN: 'false' }))
    } else {
      this.setState(() => ({ rN: 'true' }))
    }
    console.log('receiveEmails checkbox changed to ', this.state.rN)
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log('submitted form =', this.state)

    // API request
    // this.formGetReq(this.state)
    this.formPostReq(this.state)
  }

  formPostReq(cS) {
    console.log('cS ,', cS)
    axios
      .post('http://localhost:3000/backend/subscription', {
        params: {
          name: cS.name,
          email: cS.email,
          address: cS.address,
          rE: cS.rE,
          rN: cS.rN,
          time: cS.time,
        },
      })
      .then((response) => {
        // API output data
        console.log(
          'Post-Req response.data.vertices =',
          response.data.verification,
        )
        // this.props.saveVerts(response.data.vertices)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="Forms w3-row-padding">
        <h2 className="w3-center">Forms and Lists</h2>
        <div className="w3-center">
          <form className="w3-container w3-card-4" onSubmit={this.handleSubmit}>
            <h2>
              Sign up to receive emails and newsletters with updates and
              notifications
            </h2>
            {/* Function to click and type text */}
            <div className="w3-section">
              <p>Name</p>
              <input
                name="name"
                className="w3-input"
                type="text"
                onChange={this.handleInputChange}
                required
              />
            </div>

            {/* Function to click and type text */}
            <div className="w3-section">
              <p>Email</p>
              <input
                name="email"
                className="w3-input"
                type="text"
                onChange={this.handleInputChange}
                required
              />
            </div>

            {/* function to click and type text */}
            <div className="w3-section">
              <p>Address</p>
              <input
                className="w3-input"
                type="text"
                name="address"
                onChange={this.handleInputChange}
                required
              />
            </div>

            <div className="w3-row">
              <div className="w3-half">
                {/* function to click and check/uncheck box */}
                <label htmlFor="emails">
                  Receive Emails {this.state.rE}
                </label>{' '}
                <input
                  id="emails"
                  name="receiveEmails"
                  className="w3-check"
                  type="checkbox"
                  onChange={this.handleReceiveEmailsCC.bind(this)}
                />
                <br />
                {/* function to click and check/uncheck box */}
                <label htmlFor="newsletters">
                  Receive Newsletters {this.state.rN}
                </label>{' '}
                <input
                  id="newsletters"
                  name="newsletters"
                  className="w3-check"
                  type="checkbox"
                  onChange={this.handleReceiveNewsCC.bind(this)}
                />
                <br />
              </div>

              <div className="w3-half">
                <p>
                  <i>Would you like to receive a newsletter every week?</i>
                </p>

                {/* function to click radio button */}
                <label htmlFor="time">
                  Yes, I would like a weekly newsletter
                </label>
                <input
                  id="weekly"
                  className="w3-radio"
                  type="radio"
                  name="time"
                  value="weekly"
                  onChange={this.handleInputChange.bind(this)}
                />
                <br />

                {/* function to click radio button */}
                <label htmlFor="time">
                  No, I would prefer a monthly newsletter
                </label>
                <input
                  id="monthly"
                  className="w3-radio"
                  type="radio"
                  name="time"
                  value="monthly"
                  onChange={this.handleInputChange.bind(this)}
                />
                <br />

                {/* function to click radio button */}
                <label>No, I do not want any newsletter</label>
                <input
                  id="none"
                  className="w3-radio"
                  type="radio"
                  name="time"
                  value="none"
                  onChange={this.handleInputChange.bind(this)}
                />
                <br />

                <button type="submit">Submit Subscription</button>
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
