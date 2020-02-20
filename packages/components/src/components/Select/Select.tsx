import * as React from 'react';

import StyledSelect from './Select.style';
import Label from '../Label/Label';

export interface Props {
  iconBefore?: JSX.Element;
  label?: string;
  description?: string;
  name?: string;
  onChange: (val: string) => void;
  value: string;
  options: Array<Option>;
}

export interface Option {
  value: string;
  label?: string;
}

const Select: React.FC<Props> = ({
  options,
  iconBefore,
  value,
  label,
  description,
  name,
  onChange
}) => {
  const [currentValue, setCurrentValue] = React.useState(value);

  React.useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  return (
    <StyledSelect htmlFor={label}>
      <Label iconBefore={iconBefore} label={label} description={description} />

      <select
        value={currentValue}
        onChange={event => {
          const { value } = event.target;

          setCurrentValue(value);

          if (onChange) {
            onChange(value);
          }
        }}
        name={name}
      >
        {options.map(option => (
          <option value={option.value} key={option.value}>
            {option.label || option.value}
          </option>
        ))}
      </select>
      <div className="select__icon" />
    </StyledSelect>
  );
};

export default Select;
