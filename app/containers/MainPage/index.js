/* eslint-disable no-shadow */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { DAEMON } from 'utils/constants';
import { compose } from 'redux';
import { connect } from 'react-redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { Redirect } from 'react-router-dom';

import { USER, MAINPAGE } from '../../commonConstants';
import { changeLocation, changeDate } from './actions';

import TimeTable from '../../components/TimeTable';
import FavAndHistory from '../../components/FavAndHistory';
import AdBlock from '../../components/AdBlock';
import messages from './messages';
import 'antd/dist/antd.css';
import saga from './saga';
import reducer from './reducer';

function MainPage(props) {
  // eslint-disable-next-line no-shadow
  const {
    user,
    changeLocation,
    changeDate,
    fromLocation,
    toLocation,
    date,
  } = props;
  if (!user) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <div>Hi! {user.get('displayName')}</div>
      <TimeTable
        fromLocation={fromLocation}
        toLocation={toLocation}
        date={date}
        onChangeLocation={changeLocation}
        onChangeDate={changeDate}
      />
      <FavAndHistory />
      <AdBlock />
    </div>
  );
}

MainPage.propTypes = {
  user: PropTypes.object,
  changeLocation: PropTypes.func,
  changeDate: PropTypes.func,
  fromLocation: PropTypes.string,
  toLocation: PropTypes.string,
  date: PropTypes.object,
};

export default compose(
  injectReducer({ key: MAINPAGE, reducer }),
  injectSaga({ key: MAINPAGE, saga, mode: DAEMON }),
  connect(
    state => ({
      user: state[USER],
      fromLocation: state[MAINPAGE].get('fromLocation'),
      toLocation: state[MAINPAGE].get('toLocation'),
      date: state[MAINPAGE].get('date'),
    }),
    {
      changeLocation,
      changeDate,
    },
  ),
)(MainPage);
