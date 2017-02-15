import React from 'react';
import { render } from 'react-dom';
import Root from './components/Root';

render(
  <Root />,
  document.evaluate('//div[@class="main-sidebar"]/div[@class="sidebar"]/ul[@class="sidebar-menu"]/li[contains(.,"Files")]',
    document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
);