import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment-timezone-webpack4';
// import PropTypes from 'prop-types';

import TimePair from '../TimePair';
import TimeTableHeader from '../TimeTableHeader';

function TimeTable() {
  const basetimeFrom = moment()
    .set({
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
    })
    .tz('Asia/Tokyo');
  const basetimeTo = basetimeFrom.clone().tz('America/Los_Angeles');

  const timePairs = [...Array(24).keys()].map(i => {
    const timeFrom = basetimeFrom.clone().add(i, 'hours');
    const timeTo = basetimeTo.clone().add(i, 'hours');
    return <TimePair key={i} timeFrom={timeFrom} timeTo={timeTo} />;
  });

  return (
    <div>
      <h2>
        Time difference on...
        <DatePicker defaultValue={moment()} onChange={onDateChange} />
      </h2>
      <table>
        <thead>
          <TimeTableHeader />
        </thead>
        <tbody>{timePairs}</tbody>
      </table>
    </div>
  );
}

function onDateChange(date) {
  console.log(date);
}

// TimeTable.propTypes = {
//   user: PropTypes.object,
//   login: PropTypes.func,
// };

// export default compose(
//   injectReducer({ key: USER, reducer }),
//   // connect(
//   //   state => ({ user: state.user }),
//   //   { login },
//   // ),
// )(TimeTable);

export default TimeTable;
