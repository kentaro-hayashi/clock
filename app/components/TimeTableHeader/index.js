import React from 'react';
import moment from 'moment-timezone-webpack4';
import { Select } from 'antd';
const { Option, OptGroup } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}

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
          <Option value={[group, city].join('/')} key={[key, group].join('/')}>
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

function TimeTableHeader() {
  return (
    <tr>
      <th>
        <Select onChange={handleChange} style={{ width: 200 }} showSearch>
          {optGroups(1)}
        </Select>
      </th>
      <th>
        <Select onChange={handleChange} style={{ width: 200 }} showSearch>
          {optGroups(2)}
        </Select>
      </th>
    </tr>
  );
}

export default TimeTableHeader;
