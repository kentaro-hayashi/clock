import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
// import { DatePicker } from 'antd';
import { DAEMON } from 'utils/constants';
import { compose } from 'redux';
import { connect } from 'react-redux';
import injectSaga from 'utils/injectSaga';
import { Redirect } from 'react-router-dom';

import { MAINPAGE } from './constants';
import { changeLocation } from './actions';

import TimeTable from '../../components/TimeTable';
import FavAndHistory from '../../components/FavAndHistory';
import AdBlock from '../../components/AdBlock';
import messages from './messages';
import 'antd/dist/antd.css';
import saga from './saga';

function MainPage(props) {
  const { user } = props;

  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <div>Hi! {user.get('displayName')}</div>
      <TimeTable />
      <FavAndHistory />
      <AdBlock />
    </div>
  );
}

MainPage.propTypes = {
  user: PropTypes.object,
};

const withSaga = injectSaga({ key: MAINPAGE, saga, mode: DAEMON });

export default compose(
  withSaga,
  connect(
    state => ({ user: state.user }),
    { changeLocation },
  ),
)(MainPage);
