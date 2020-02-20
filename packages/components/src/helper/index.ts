import { startCase } from 'lodash';

import defaultCssColors from './defaultCssColors';

export const getLabel = (label: string, format: any) => {
  const path = label.split('.');

  if (typeof format === 'function') {
    return format(path);
  }

  if (format === 'startCase') {
    return startCase(label);
  }

  if (format === 'path') {
    return label;
  }

  return label;
};

// https://webbjocke.com/javascript-check-data-types/
export const is = {
  color: (v, l = '') =>
    (v.startsWith('#') && (v.length === 4 || v.length === 7)) ||
    v.startsWith('rgb(') ||
    v.startsWith('rgba(') ||
    v.startsWith('hsl(') ||
    defaultCssColors.includes(v.toLowerCase()) ||
    l.toLowerCase().includes('color'),

  number: v => typeof v === 'number' && isFinite(v),
  string: v => typeof v === 'string',
  object: v => typeof v === 'object' && v.constructor === Object,
  array: v =>
    Array.isArray(v) && typeof v === 'object' && v.constructor === Array,
  boolean: v => typeof v === 'boolean' || v === 'true' || v === 'false',
  unit: v =>
    v.endsWith('px') ||
    v.endsWith('rem') ||
    v.endsWith('em') ||
    v.endsWith('%'),
  text: v => v.length >= 40,
  shorthand: v => {
    const keys = Object.keys(v);
    return (
      keys.length === 4 &&
      keys.includes('top') &&
      keys.includes('bottom') &&
      keys.includes('right') &&
      keys.includes('left')
    );
  }
};

export const updateValueBasedOnPath = (
  propertyPath: string,
  value: any,
  obj: object
) => {
  const newObj = obj;

  const properties: string[] = propertyPath.split('.');

  // Not yet at the last property so keep digging
  if (properties.length > 1) {
    // The property doesn't exists OR is not an object (and so we overwritte it) so we create it
    if (
      !Object.prototype.hasOwnProperty.call(obj, properties[0]) ||
      typeof obj[properties[0]] !== 'object'
    )
      newObj[properties[0]] = {};
    // We iterate.
    return updateValueBasedOnPath(
      properties.slice(1).join('.'),
      value,
      obj[properties[0]]
    );
    // This is the last property - the one where to set the value
  }

  // We set the value to the last property
  newObj[properties[0]] = value;

  return true; // this is the end
};
