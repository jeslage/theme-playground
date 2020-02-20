import 'jest';
import * as React from 'react';
import { shallow } from 'enzyme';
import Range from '../components/Range/Range';
import StyledRange from '../components/Range/Range.style';
import { darkTheme } from '../theme';

describe('Range', () => {
  it('Range should render correctly', () => {
    const component = shallow(
      <Range
        onChange={value => console.log(value)}
        label="Label"
        description="Testbeschreibung"
        value={1}
        steps={0.1}
        min={0}
        max={2}
        suffix="px"
        iconBefore={
          <svg height="24" viewBox="0 0 24 24" width="24">
            <rect height="2" rx="1" width="12" x="6" y="11" />
          </svg>
        }
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('StyledRange should render correctly', () => {
    const component = shallow(<StyledRange theme={{ colors: darkTheme }} />);

    expect(component).toMatchSnapshot();
  });
});
