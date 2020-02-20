import 'jest';
import * as React from 'react';
import { shallow } from 'enzyme';

import ColorPicker from '../components/ColorPicker/ColorPicker';
import StyledColorPicker from '../components/ColorPicker/ColorPicker.style';
import { darkTheme } from '../theme';

describe('ColorPicker', () => {
  it('ColorPicker should render correctly', () => {
    const component = shallow(
      <ColorPicker
        onChange={value => console.log(value)}
        label="Label"
        description="Testbeschreibung"
        value="#000"
        iconBefore={
          <svg height="24" viewBox="0 0 24 24" width="24">
            <rect height="2" rx="1" width="12" x="6" y="11" />
          </svg>
        }
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('StyledColorPicker should render correctly', () => {
    const component = shallow(
      <StyledColorPicker theme={{ colors: darkTheme }} />
    );

    expect(component).toMatchSnapshot();
  });
});
