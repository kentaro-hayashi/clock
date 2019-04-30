import React from 'react';
import { FormattedMessage } from 'react-intl';
// import { DatePicker } from 'antd';
import TimeTable from '../../components/TimeTable';
import messages from './messages';
import 'antd/dist/antd.css';

export default function MainPage() {
  return (
    <div>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <TimeTable />
    </div>
  );
}
