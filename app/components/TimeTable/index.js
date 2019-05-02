import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import TimePair from '../TimePair';
import TimeTableHeader from '../TimeTableHeader';

function TimeTable() {
  // eslint-disable-next-line no-unused-vars
  const timePairs = [1, 2, 3, 4].map(i => <TimePair key={i} />);
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

export default TimeTable;
