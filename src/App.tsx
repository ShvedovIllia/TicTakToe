import * as React from 'react';

import {AppContainer} from './AppContainer';
import {theme, ThemeProvider} from './styles';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer />
    </ThemeProvider>
  );
};
