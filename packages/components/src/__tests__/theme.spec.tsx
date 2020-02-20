import 'jest';

import { getUiTheme, darkTheme, lightTheme } from '../theme';

describe('UI Themes', () => {
  test('Test dark theme', () => {
    expect(getUiTheme('dark')).toMatchObject(darkTheme);
  });

  test('Test light theme', () => {
    expect(getUiTheme('light')).toMatchObject(lightTheme);
  });

  test('Test unknown theme throwing error', () => {
    expect(() => {
      getUiTheme('unknown');
    }).toThrow();
  });

  test('Test undefined theme', () => {
    expect(getUiTheme(undefined)).toMatchObject(darkTheme);
  });

  test('Test custom dark theme', () => {
    expect(getUiTheme({ base: 'dark', text: 'red' })).toMatchObject({
      ...darkTheme,
      text: 'red'
    });
  });

  test('Test custom light theme', () => {
    expect(getUiTheme({ base: 'light', text: 'red' })).toMatchObject({
      ...lightTheme,
      text: 'red'
    });
  });
});
