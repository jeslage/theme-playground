import * as React from 'react';

import {
  ThemePlaygroundProvider,
  Overrides,
  ConfigProps,
  Theme,
  UiTheme,
  UiProvider
} from '@theme-playground/components';

import Content from './Content/Content';

type ThemePlaygroundProps = {
  theme: Theme;
  overrides?: Overrides;
  config?: ConfigProps;
  uiTheme?: UiTheme;
  hide?: boolean;
};

function withThemePlayground<T>(
  WrappedComponent: React.ComponentType<T>,
  options: ThemePlaygroundProps
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  return class ComponentWithThemePlayground extends React.Component<T> {
    public static displayName = `withThemePlayground(${displayName})`;

    public render() {
      const { theme, overrides, config, uiTheme, hide } = options;

      return (
        <ThemePlaygroundProvider options={{ theme, overrides, config }}>
          {activeTheme => (
            <>
              {!hide && (
                <UiProvider theme={uiTheme}>
                  <Content />
                </UiProvider>
              )}

              <WrappedComponent
                theme={activeTheme.theme}
                {...(this.props as T)}
              />
            </>
          )}
        </ThemePlaygroundProvider>
      );
    }
  };
}

export default withThemePlayground;
