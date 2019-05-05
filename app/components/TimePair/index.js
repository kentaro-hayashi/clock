import React from 'react';
import PropTypes from 'prop-types';

function TimePair(props) {
  const { timeFrom, timeTo } = props;
  return (
    <tr>
      <td>{timeFrom.format('HH:mm')}</td>
      <td>{timeTo.format('HH:mm')}</td>
    </tr>
  );
}

TimePair.propTypes = {
  timeFrom: PropTypes.object,
  timeTo: PropTypes.object,
};

export default TimePair;
