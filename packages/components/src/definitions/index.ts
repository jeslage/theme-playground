/*
  Theme
*/
export type ThemeObject = { name: string; theme: object };
export type ThemesArray = Array<ThemeObject>;
export type Theme = ThemesArray | { [key: string]: any };

/*
  Config
*/
export type ConfigProps = {
  labelFormat: any;
  showCode: boolean;
};

/*
  Options
*/
export type OptionsType = {
  theme: Theme;
  overrides?: Overrides;
  config?: ConfigProps;
};

/*
  Overrides
*/
export type OverridesObject = {
  hidden?: boolean;
  type?: string;
  [key: string]: any;
};

export type Overrides = {
  [key: string]: OverridesObject;
};

export type UiTheme = {
  base: 'light' | 'dark' | string;
  text?: string;
  border?: string;
  backgroundDark?: string;
  backgroundLight?: string;
};

export type ThemePlaygroundProviderProps = {
  options: {
    overrides?: Overrides;
    config?: ConfigProps;
    theme: Theme;
  };
  uiTheme?: 'light' | 'dark' | UiTheme;
  children?: (activeTheme: ThemeObject) => JSX.Element;
};

export type ThemePlaygroundContextProps = {
  themes: ThemesArray;
  activeTheme: ThemeObject;
  themeComponents: {};
  overrides: Overrides;
  config: ConfigProps;
  updateTheme: (path: any, value: any) => void;
  updateActiveTheme: (obj: ThemeObject) => void;
  getInitialOptions: (options: OptionsType) => void;
  isLoading: boolean;
  updateIsLoading: (bool: boolean) => void;
};

export interface HandleChange {
  target: HTMLInputElement;
}
