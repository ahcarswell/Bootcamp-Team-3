import React from 'react'

import PropTypes from 'prop-types'

import './MyProfile.css'

class MyProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: this.props.profState.username,
      pass: this.props.profState.pass,
    }
  }

  render() {
    return (
      <div className="MyProfile">
        <p>My Profile</p>
        <p>
          {this.state.username} {this.state.pass}
        </p>
        <br />

        <p>
          Username:
          {this.state.username}
        </p>

        <p>
          Password:
          {this.state.pass}
        </p>

        <br />
        <p>Potential Settings?</p>
      </div>
    )
  }
}

MyProfile.propTypes = {
  profState: PropTypes.objectOf(PropTypes.any),
}

MyProfile.defaultProps = {
  profState: {
    username: 'username',
    pass: 'Password',
  },
}

export default MyProfile
