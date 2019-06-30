import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment-timezone-webpack4';
import PropTypes from 'prop-types';

import TimePair from '../TimePair';
import TimeTableHeader from '../TimeTableHeader';

function TimeTable(props) {
  const { onChangeLocation, onChangeDate, date } = props;
  let { fromLocation, toLocation } = props;
  fromLocation = fromLocation || 'Asia/Tokyo';
  toLocation = toLocation || 'America/Los_Angeles';

  const basetimeFrom = date || adjustLocalTime(moment(), fromLocation);
  const basetimeTo = basetimeFrom.clone().tz(toLocation);

  const timePairs = [...Array(24).keys()].map(i => {
    const timeFrom = basetimeFrom.clone().add(i, 'hours');
    const timeTo = basetimeTo.clone().add(i, 'hours');
    return <TimePair key={i} timeFrom={timeFrom} timeTo={timeTo} />;
  });

  return (
    <div>
      <h2>
        Time difference on...
        <DatePicker
          defaultValue={moment()}
          onChange={changedDate => {
            onChangeDate(adjustLocalTime(changedDate, fromLocation));
          }}
        />
      </h2>
      <table>
        <thead>
          <TimeTableHeader
            fromLocation={fromLocation}
            toLocation={toLocation}
            onChangeLocation={onChangeLocation}
          />
        </thead>
        <tbody>{timePairs}</tbody>
      </table>
    </div>
  );
}

function adjustLocalTime(now, fromLocation) {
  return now.tz(fromLocation).set({
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  });
}

TimeTable.propTypes = {
  onChangeLocation: PropTypes.func,
  onChangeDate: PropTypes.func,
  fromLocation: PropTypes.string,
  toLocation: PropTypes.string,
  date: PropTypes.object,
};

// export default compose(
//   injectReducer({ key: USER, reducer }),
//   // connect(
//   //   state => ({ user: state.user }),
//   //   { login },
//   // ),
// )(TimeTable);

export default TimeTable;
