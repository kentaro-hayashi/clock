import React, { Component } from 'react';
import firebase from 'utils/firebase';

class Login extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  logout() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          UID: {this.state.user && this.state.user.uid}
        </p>

        {this.state.user ? (
          <button type="button" onClick={this.logout}>
            Google Logout
          </button>
        ) : (
          <button type="button" onClick={this.login}>
            Google Login
          </button>
        )}
      </div>
    );
  }
}

export default Login;
