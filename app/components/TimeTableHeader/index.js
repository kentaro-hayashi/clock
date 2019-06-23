import React from 'react';
import moment from 'moment-timezone-webpack4';
import PropTypes from 'prop-types';
import { Select } from 'antd';

import {
  FROM_LOCATION,
  TO_LOCATION,
} from '../../containers/MainPage/constants';
const { Option, OptGroup } = Select;

const locations = new Map();
const names = moment.tz.names();
names.forEach(name => {
  const [group, ...rest] = name.split('/');
  const city = rest.length === 0 ? group : rest.join('/');

  if (!locations.has(group)) locations.set(group, []);
  locations.get(group).push(city);
});

function optGroups(key) {
  const groups = [];
  locations.forEach((cities, group) => {
    const options = cities.map(city => {
      if (group === city) {
        return (
          <Option value={group} key={[key, group].join('/')}>
            {city}
          </Option>
        );
      }
      return (
        <Option
          value={[group, city].join('/')}
          key={[key, group, city].join('/')}
        >
          {city}
        </Option>
      );
    });
    groups.push(
      // eslint-disable-next-line react/no-array-index-key
      <OptGroup label={group} key={`${key}/${group}`}>
        {options}
      </OptGroup>,
    );
  });
  return groups;
}

function TimeTableHeader(props) {
  const { onChangeLocation, fromLocation, toLocation } = props;
  return (
    <tr>
      <th>
        <Select
          defaultValue={fromLocation}
          onChange={location => onChangeLocation(location, FROM_LOCATION)}
          style={{ width: 200 }}
          showSearch
        >
          {optGroups(1)}
        </Select>
      </th>
      <th>
        <Select
          defaultValue={toLocation}
          onChange={location => onChangeLocation(location, TO_LOCATION)}
          style={{ width: 200 }}
          showSearch
        >
          {optGroups(2)}
        </Select>
      </th>
    </tr>
  );
}

TimeTableHeader.propTypes = {
  onChangeLocation: PropTypes.func,
  fromLocation: PropTypes.string,
  toLocation: PropTypes.string,
};

export default TimeTableHeader;
