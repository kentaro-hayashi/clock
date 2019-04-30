/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

function TimeTableHeader() {
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          Tokyo
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          Taiwan
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          London
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <tr>
      <th>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            Tokyo <Icon type="down" />
          </a>
        </Dropdown>
      </th>
      <th>
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            Taiwan <Icon type="down" />
          </a>
        </Dropdown>
      </th>
    </tr>
  );
}

export default TimeTableHeader;
