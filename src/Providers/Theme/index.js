import React from 'react';
import { withState } from 'recompose';

export const Theme = React.createContext();

const ThemeProvider = ({ children, color, setColor }) => (
  <Theme.Provider value={{ color, setColor }}>{children}</Theme.Provider>
);

const enhance = withState('color', 'setColor', '#000000');

export default enhance(ThemeProvider);
