import * as React from 'react';

import StyledRadioOption from './RadioOption.style';

export interface RadioOptionProps {
  onChange?: (val: string) => void;
  name?: string;
  value: string;
  label?: string;
  icon?: JSX.Element;
  isChecked?: boolean;
}

const RadioGroup: React.FC<RadioOptionProps> = ({
  label,
  name,
  value,
  onChange,
  isChecked,
  icon
}) => {
  return (
    <StyledRadioOption htmlFor={value}>
      <input
        type="radio"
        id={value}
        name={name}
        value={value}
        checked={isChecked}
        onChange={({ target }) => {
          if (onChange) {
            onChange((target as HTMLInputElement).value);
          }
        }}
      />
      <div>{icon || label || value}</div>
    </StyledRadioOption>
  );
};

export default RadioGroup;
