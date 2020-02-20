import 'jest';
import * as React from 'react';
import { shallow } from 'enzyme';

import Shorthand from '../components/Shorthand/Shorthand';
import StyledShorthand from '../components/Shorthand/Shorthand.style';
import { darkTheme } from '../theme';

describe('Shorthand', () => {
  it('Shorthand should render correctly', () => {
    const component = shallow(
      <Shorthand
        onChange={value => console.log(value)}
        label="Label"
        description="Testbeschreibung"
        value={{ top: 20, left: 20, right: 20, bottom: 20 }}
        iconBefore={
          <svg height="24" viewBox="0 0 24 24" width="24">
            <rect height="2" rx="1" width="12" x="6" y="11" />
          </svg>
        }
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('StyledShorthand should render correctly', () => {
    const component = shallow(
      <StyledShorthand theme={{ colors: darkTheme }} />
    );

    expect(component).toMatchSnapshot();
  });
});
