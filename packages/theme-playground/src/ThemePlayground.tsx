import * as React from 'react';

import {
  ThemePlaygroundProvider,
  Overrides,
  ConfigProps,
  Theme,
  UiTheme
} from '@theme-playground/components';

import Content from './Content/Content';

type ThemePlaygroundProps = {
  theme: Theme;
  overrides?: Overrides;
  config?: ConfigProps;
  uiTheme?: UiTheme;
  hide?: boolean;
  children?: (activeTheme: Theme) => JSX.Element;
};

const ThemePlayground: React.FC<ThemePlaygroundProps> = ({
  theme,
  overrides,
  config,
  uiTheme,
  hide,
  children
}) => {
  return (
    <ThemePlaygroundProvider
      options={{ theme, overrides, config }}
      uiTheme={uiTheme}
    >
      {activeTheme => (
        <>
          {!hide && <Content />}
          {children && children(activeTheme.theme || {})}
        </>
      )}
    </ThemePlaygroundProvider>
  );
};

export default ThemePlayground;
