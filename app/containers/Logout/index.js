import React, { Component } from 'react';
import { DAEMON } from 'utils/constants';
import { Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { logout } from './actions';
import reducer from './reducer';
import { USER } from '../../commonConstants';
import saga from './saga';

class Logout extends Component {
  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { logout } = this.props;
    logout();
  }

  render() {
    const { user } = this.props;
    if (user && user.get('logout')) {
      return <Redirect to="/login" />;
    }
    return <div>logging out...</div>;
  }
}

Logout.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

export default compose(
  injectReducer({ key: USER, reducer }),
  injectSaga({ key: USER, saga, mode: DAEMON }),
  connect(
    state => ({ user: state.user }),
    { logout },
  ),
)(Logout);
