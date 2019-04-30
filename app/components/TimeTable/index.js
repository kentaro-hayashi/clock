import React from 'react';
import TimePair from '../TimePair';
import TimeTableHeader from '../TimeTableHeader';

function TimeTable() {
  // eslint-disable-next-line no-unused-vars
  const timePairs = [1, 2, 3, 4].map(i => <TimePair key={i} />);
  return (
    <table>
      <thead>
        <TimeTableHeader />
      </thead>
      <tbody>{timePairs}</tbody>
    </table>
  );
}

export default TimeTable;
