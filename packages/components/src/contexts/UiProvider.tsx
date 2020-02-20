import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { UiTheme } from '../definitions';

import { getUiTheme } from '../theme';

const UiProvider: React.FC<{ theme?: UiTheme }> = ({ theme, children }) => {
  return <ThemeProvider theme={getUiTheme(theme)}>{children}</ThemeProvider>;
};

export default UiProvider;
