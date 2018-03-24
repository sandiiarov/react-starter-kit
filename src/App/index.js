// @flow

import React from 'react';
import { hot } from 'react-hot-loader';
import ThemeProvider, { Theme } from '../Providers/Theme';
import Header from '../Components/Header';

const App = () => (
  <ThemeProvider>
    <Header>Hello, world</Header>
    <Theme.Consumer>
      {({ setColor }) => (
        <button onClick={() => setColor('red')}>Set Color to Red</button>
      )}
    </Theme.Consumer>
  </ThemeProvider>
);

export default hot(module)(App);
