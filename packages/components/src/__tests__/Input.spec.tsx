import 'jest';
import * as React from 'react';
import { shallow } from 'enzyme';

import Input from '../components/Input/Input';
import StyledInput from '../components/Input/Input.style';
import { darkTheme } from '../theme';

describe('Input', () => {
  it('Input should render correctly', () => {
    const component = shallow(
      <Input
        onChange={value => console.log(value)}
        label="Label"
        description="Testbeschreibung"
        value="Testinput"
        iconBefore={
          <svg height="24" viewBox="0 0 24 24" width="24">
            <rect height="2" rx="1" width="12" x="6" y="11" />
          </svg>
        }
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('StyledInput should render correctly', () => {
    const component = shallow(<StyledInput theme={{ colors: darkTheme }} />);

    expect(component).toMatchSnapshot();
  });
});
