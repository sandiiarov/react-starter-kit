// @flow

import React from 'react';
import { Theme } from '../../Providers/Theme';

const Header = () => (
  <Theme.Consumer>
    {({ color }) => <h1 style={{ color }}>Hello, world</h1>}
  </Theme.Consumer>
);

export default Header;
