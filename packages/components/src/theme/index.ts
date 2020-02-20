export const darkTheme = {
  base: 'dark',
  backgroundDark: '#2f2f2f',
  backgroundLight: '#333',
  border: '#999999',
  text: '#FFFFFF'
};

export const lightTheme = {
  base: 'light',
  backgroundDark: '#f6f9fc',
  backgroundLight: '#fff',
  border: '#666666',
  text: '#333333'
};

export const getUiTheme = theme => {
  if (theme === undefined) return darkTheme;

  if (typeof theme === 'string') {
    if (theme === 'dark') {
      return darkTheme;
    } else if (theme === 'light') {
      return lightTheme;
    }

    throw Error(
      `Theme "${theme}" is not available. Please use "light" or "dark", or provide a custom theme object.`
    );
  }

  if (theme.base && theme.base === 'light') {
    return {
      ...lightTheme,
      ...theme
    };
  }

  return {
    ...darkTheme,
    ...theme
  };
};
