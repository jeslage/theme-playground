import * as React from 'react';

import { updateValueBasedOnPath } from '../helper';
import {
  Theme,
  ThemesArray,
  ThemeObject,
  ConfigProps,
  OptionsType,
  Overrides,
  ThemePlaygroundContextProps,
  ThemePlaygroundProviderProps
} from '../definitions';

import buildThemeComponents from '../helper/buildThemeComponents';

const defaultConfig = {
  labelFormat: 'startCase',
  showCode: true
};

const defaultProps = {
  themes: [],
  themeComponents: {},
  activeTheme: { name: '__default', theme: {} },
  overrides: {},
  config: defaultConfig,
  isLoading: false,
  updateIsLoading: () => {},
  updateTheme: () => {},
  updateActiveTheme: () => {},
  getInitialOptions: () => {}
};

export const ThemePlaygroundContext = React.createContext<
  ThemePlaygroundContextProps
>(defaultProps);

const ThemePlaygroundProvider: React.FC<ThemePlaygroundProviderProps> = ({
  options,
  children
}) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [themeComponents, setThemeComponents] = React.useState({});
  const [themes, setThemes] = React.useState<ThemesArray>(
    Array.isArray(options.theme) ? options.theme : []
  );

  const getActiveTheme = () => {
    if (options.theme) {
      if (Array.isArray(options.theme)) {
        return { ...options.theme[0] };
      }
      return { name: '__default', theme: options.theme };
    }

    return { name: '', theme: {} };
  };

  const [activeTheme, setActiveTheme] = React.useState<ThemeObject>(
    getActiveTheme()
  );

  const [overrides, setOverrides] = React.useState<Overrides>(
    options.overrides || {}
  );
  const [config, setConfig] = React.useState<ConfigProps>({
    ...options.config,
    ...defaultConfig
  });

  const updateThemeComponents = (theme: Theme, overrides: Overrides) => {
    const components: { [key: string]: any } = {};

    if (Array.isArray(theme)) {
      theme.forEach(({ name, theme }) => {
        components[name] = buildThemeComponents(theme, overrides);
      });
    } else {
      components.__default = buildThemeComponents(theme, overrides);
    }

    setThemeComponents(components);
  };

  const getInitialOptions = (options: OptionsType) => {
    const { theme, overrides, config } = options;

    updateThemeComponents(theme, overrides || {});

    if (Array.isArray(theme)) {
      setThemes(theme);
      setActiveTheme({ ...theme[0] });
    } else {
      setActiveTheme({ name: '__default', theme });
    }

    if (overrides) setOverrides(overrides);
    if (config) setConfig(prev => ({ ...prev, ...config }));
  };

  const updateTheme = React.useCallback(
    (path: string, value: any) => {
      const { theme, name } = activeTheme;

      // Update theme object value based on path and set active theme state
      const newTheme: Theme = theme;
      updateValueBasedOnPath(path, value, newTheme);
      setActiveTheme({ name, theme: newTheme });

      // Set new theme components state
      setThemeComponents(prev => ({
        ...prev,
        [name]: {
          ...prev[name],
          [path]: { type: prev[name][path].type, value }
        }
      }));
    },
    [activeTheme]
  );

  React.useEffect(() => {
    getInitialOptions(options);
  }, [options.theme]);

  const updateActiveTheme = React.useCallback(
    ({ name, theme }: ThemeObject) => {
      setActiveTheme({ name, theme });
    },
    [activeTheme.theme]
  );

  const providerValue: ThemePlaygroundContextProps = {
    activeTheme,
    themes,
    themeComponents,
    config,
    overrides,
    updateTheme,
    updateActiveTheme,
    getInitialOptions,
    isLoading,
    updateIsLoading: bool => setIsLoading(bool)
  };

  return (
    <ThemePlaygroundContext.Provider value={providerValue}>
      {children && children(activeTheme || {})}
    </ThemePlaygroundContext.Provider>
  );
};

export const ThemePlaygroundConsumer = ThemePlaygroundContext.Consumer;

export default ThemePlaygroundProvider;
