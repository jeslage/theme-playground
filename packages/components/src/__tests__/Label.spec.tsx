import 'jest';
import * as React from 'react';
import { shallow } from 'enzyme';
import Label from '../components/Label/Label';
import StyledLabel from '../components/Label/Label.style';
import { darkTheme } from '../theme';

describe('Label', () => {
  it('Label should render correctly', () => {
    const component = shallow(
      <Label
        label="Label"
        description="Testbeschreibung"
        iconBefore={
          <svg height="24" viewBox="0 0 24 24" width="24">
            <rect height="2" rx="1" width="12" x="6" y="11" />
          </svg>
        }
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('StyledLabel should render correctly', () => {
    const component = shallow(<StyledLabel theme={{ colors: darkTheme }} />);

    expect(component).toMatchSnapshot();
  });
});
