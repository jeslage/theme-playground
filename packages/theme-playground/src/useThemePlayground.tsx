import * as React from 'react';

import {
  ThemePlaygroundContext,
  ThemeObject
} from '@theme-playground/components';

const useThemePlayground = (): ThemeObject => {
  const { activeTheme } = React.useContext(ThemePlaygroundContext);

  return activeTheme;
};

export default useThemePlayground;
