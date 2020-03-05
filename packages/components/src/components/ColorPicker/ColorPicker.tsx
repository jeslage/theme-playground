import * as React from 'react';
import { ChromePicker } from 'react-color';

import StyledColorPicker from './ColorPicker.style';
import Label from '../Label/Label';

export interface Props {
  iconBefore?: JSX.Element;
  description?: string;
  label: string;
  onChange: (hex: string) => void;
  value: string;
}

const ColorPicker: React.FC<Props> = ({
  iconBefore,
  description,
  label,
  onChange,
  value
}) => {
  const [visible, setVisible] = React.useState(false);
  const content = React.useRef<HTMLDivElement>(null);

  const handleOutsideClick = e => {
    if (content.current && !content.current.contains(e.target) && visible)
      setVisible(false);
  };

  React.useEffect(() => {
    window.addEventListener('mousedown', handleOutsideClick);

    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  const handleChange = ({ hex, rgb }) => {
    if (onChange) {
      let newColor = hex;

      if (rgb.a < 1) {
        newColor = `rgba(${rgb.r},${rgb.g},${rgb.b},${rgb.a})`;
      }

      onChange(newColor);
    }
  };
  return (
    <StyledColorPicker>
      <Label iconBefore={iconBefore} label={label} description={description} />

      <div className="colorPicker__wrapper">
        <button
          type="button"
          onClick={() => setVisible(prev => !prev)}
          aria-label="Open color picker"
          className="colorPicker__open"
        >
          <span style={{ background: value }} />
        </button>

        {visible && (
          <>
            <button
              type="button"
              onClick={() => setVisible(false)}
              aria-label="Close color picker"
              className="colorPicker__cover"
            />
            <div className="colorPicker__content" ref={content}>
              <ChromePicker color={value} onChangeComplete={handleChange} />
            </div>
          </>
        )}
      </div>
    </StyledColorPicker>
  );
};

export default ColorPicker;
