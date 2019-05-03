import React, { Component } from 'react';
import firebase from 'utils/firebase';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import injectReducer from 'utils/injectReducer';

import { login } from './actions';
import reducer from './reducer';
import { USER } from '../../commonConstants';

class Login extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      // eslint-disable-next-line no-shadow
      const { login } = this.props;
      login(user);
    });
  }

  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  render() {
    const { user } = this.props;

    return (
      <div className="App">
        <p className="App-intro">UID: {user && user.get('uid')}</p>

        {user && user.get('uid') ? (
          <Redirect to="/" />
        ) : (
          <button type="button" onClick={this.login}>
            Google Login
          </button>
        )}
      </div>
    );
  }
}

Login.propTypes = {
  user: PropTypes.object,
  login: PropTypes.func,
};

export default compose(
  injectReducer({ key: USER, reducer }),
  connect(
    state => ({ user: state.user }),
    { login },
  ),
)(Login);
