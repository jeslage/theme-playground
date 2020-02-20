import 'jest';

import { stripUnit } from '../helper/stripUnit';
import buildThemeComponents from '../helper/buildThemeComponents';
import { getLabel, updateValueBasedOnPath } from '../helper';

describe('stripUnit', () => {
  test('Test "20px"', () => {
    expect(stripUnit('20px')).toMatchObject([20, 'px']);
  });

  test('Test 20', () => {
    expect(stripUnit(20)).toMatchObject([20, undefined]);
  });

  test('Test not matching string', () => {
    expect(stripUnit('test')).toMatchObject(['test', undefined]);
  });
});

describe('getLabel', () => {
  test('getLabel path', () => {
    expect(getLabel('button.color', 'path')).toMatch('button.color');
  });

  test('getLabel startCase', () => {
    expect(getLabel('button.color', 'startCase')).toMatch('Button Color');
  });

  test('getLabel function', () => {
    expect(getLabel('button.color', path => path.join('-'))).toMatch(
      'button-color'
    );
  });

  test('getLabel unknown', () => {
    expect(getLabel('button.color', 'unknown')).toMatch('button.color');
  });
});

describe('updateValueBasedOnPath', () => {
  test('Test updateValueBasedOnPath', () => {
    const obj = {
      button: { color: 'green' }
    };

    updateValueBasedOnPath('button.color', 'red', obj);

    expect(obj).toMatchObject({
      button: { color: 'red' }
    });
  });
});

describe('buildThemeComponents', () => {
  test('Test buildThemeComponents', () => {
    const theme = {
      colors: { primary: '#fff', secondary: 'blue', tertiary: '#000000' },
      fontSize: '80px',
      size: 20,
      breakpoint: 'm',
      nullValue: null,
      arrayValue: [20, 20],
      switch: true,
      input: 'text',
      textarea: 'This is a longer text and has more than 40 letters.',
      shorthand: {
        top: 20,
        left: 20,
        right: 20,
        bottom: 20
      }
    };

    const overrides = {
      breakpoint: {
        hidden: true
      },
      size: {
        type: 'range'
      }
    };

    expect(buildThemeComponents(theme, overrides)).toMatchObject({
      'colors.primary': { type: 'colorpicker', value: '#fff' },
      'colors.secondary': { type: 'colorpicker', value: 'blue' },
      'colors.tertiary': { type: 'colorpicker', value: '#000000' },
      fontSize: { type: 'range', value: '80px' },
      size: { type: 'range', value: 20 },
      'arrayValue.0': { type: 'counter', value: 20 },
      'arrayValue.1': { type: 'counter', value: 20 },
      switch: { type: 'switch', value: true },
      input: { type: 'input', value: 'text' },
      textarea: {
        type: 'textarea',
        value: 'This is a longer text and has more than 40 letters.'
      },
      shorthand: {
        type: 'shorthand',
        value: {
          top: 20,
          left: 20,
          right: 20,
          bottom: 20
        }
      }
    });
  });
});
