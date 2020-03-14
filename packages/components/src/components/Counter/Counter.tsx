import * as React from 'react';
import { HandleChange } from '../../definitions';

import StyledCounter from './Counter.style';
import Label from '../Label/Label';

export interface Props {
  iconBefore?: HTMLElement;
  label: string;
  onChange: (val: number, suffix: string | undefined) => void;
  value: number;
  description?: string;
  min?: number;
  max?: number;
  steps?: number;
  suffix?: string | undefined;
}

const countDecimals = (number: number) => {
  if (Math.floor(number) === number) return 0;
  return number.toString().split('.')[1].length || 0;
};

const Counter: React.FC<Props> = ({
  label,
  description,
  min = 0,
  max = 100,
  steps = 1,
  onChange,
  value,
  suffix,
  iconBefore
}) => {
  const [counterValue, setCounterValue]: any = React.useState(value);

  const fixedNumber = countDecimals(steps);
  const updateValue = (val: number) => {
    setCounterValue(val);
    onChange(val, suffix);
  };

  const handleChange = (event: HandleChange) => {
    const { value: eventValue, validity } = event.target;

    if (validity.valid) {
      setCounterValue(eventValue);
    }
  };

  const handleBlur = (event: HandleChange) => {
    const { value: eventValue } = event.target;
    const numberValue: number | string = parseFloat(eventValue);

    if (numberValue > max) {
      updateValue(max);
    } else if (numberValue < min || Number.isNaN(numberValue)) {
      updateValue(min);
    } else {
      updateValue(numberValue);
    }
  };

  return (
    <StyledCounter>
      <Label iconBefore={iconBefore} label={label} description={description} />

      <div className="counter__counter">
        <button
          type="button"
          onClick={() =>
            updateValue(
              counterValue - steps >= min
                ? parseFloat((counterValue - steps).toFixed(fixedNumber))
                : min
            )
          }
          disabled={counterValue === min}
          aria-label="Decrease"
        >
          <svg viewBox="0 0 24 24" width="24" height="24">
            <rect height="2" rx="1" width="12" x="6" y="11" />
          </svg>
        </button>
        <span>
          <input
            type="text"
            pattern="[0-9.]*"
            value={counterValue}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {suffix}
        </span>
        <button
          type="button"
          onClick={() =>
            updateValue(
              counterValue + steps <= max
                ? parseFloat((counterValue + steps).toFixed(fixedNumber))
                : max
            )
          }
          disabled={counterValue === max}
          aria-label="Increase"
        >
          <svg viewBox="0 0 24 24" width="24" height="24">
            <rect height="2" rx="1" width="12" x="6" y="11" />
            <rect height="12" rx="1" width="2" x="11" y="6" />
          </svg>
        </button>
      </div>
    </StyledCounter>
  );
};

export default Counter;
