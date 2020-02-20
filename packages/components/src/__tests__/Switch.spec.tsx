import 'jest';
import * as React from 'react';
import { shallow } from 'enzyme';
import Switch from '../components/Switch/Switch';
import StyledSwitch from '../components/Switch/Switch.style';
import { darkTheme } from '../theme';

describe('Switch', () => {
  it('Enabled Switch should render correctly', () => {
    const component = shallow(
      <Switch
        onChange={value => console.log(value)}
        label="Label"
        description="Testbeschreibung"
        value={true}
        iconBefore={
          <svg height="24" viewBox="0 0 24 24" width="24">
            <rect height="2" rx="1" width="12" x="6" y="11" />
          </svg>
        }
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('Disabled Switch should render correctly', () => {
    const component = shallow(
      <Switch
        onChange={value => console.log(value)}
        label="Label"
        description="Testbeschreibung"
        value={false}
        iconBefore={
          <svg height="24" viewBox="0 0 24 24" width="24">
            <rect height="2" rx="1" width="12" x="6" y="11" />
          </svg>
        }
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('StyledSwitch should render correctly', () => {
    const component = shallow(<StyledSwitch theme={{ colors: darkTheme }} />);

    expect(component).toMatchSnapshot();
  });
});
