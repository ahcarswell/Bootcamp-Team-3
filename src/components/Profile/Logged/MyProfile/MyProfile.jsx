import React from 'react';

import PropTypes from 'prop-types';

import './MyProfile.css';

class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    const { profProps } = this.props;
    this.state = {
      username: profProps.profState.username,
      pass: profProps.profState.pass,
    };
  }

  render() {
    const { state } = this.state;
    return (
      <div className="MyProfile">
        <p>My Profile</p>
        <br />

        <p>
          Username:
          {state.username}
        </p>

        <p>
          Password:
          {state.pass}
        </p>

        <br />
        <p>Potential Settings?</p>
      </div>
    );
  }
}

MyProfile.propTypes = {
  profProps: PropTypes.objectOf(PropTypes.any),
};

MyProfile.defaultProps = {
  profProps: {
    username: 'username',
    pass: 'Password',
  },
};

export default MyProfile;
