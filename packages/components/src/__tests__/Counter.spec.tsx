import 'jest';
import * as React from 'react';
import { shallow } from 'enzyme';
import Counter from '../components/Counter/Counter';
import StyledCounter from '../components/Counter/Counter.style';
import { darkTheme } from '../theme';

describe('Counter', () => {
  it('Counter with decimal steps should render correctly', () => {
    const component = shallow(
      <Counter
        onChange={value => console.log(value)}
        label="Label"
        description="Testbeschreibung"
        value={1}
        steps={0.1}
        min={0}
        max={2}
        suffix="px"
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('Counter with fixed steps should render correctly', () => {
    const component = shallow(
      <Counter
        onChange={value => console.log(value)}
        label="Label"
        description="Testbeschreibung"
        value={1}
        steps={1}
        min={0}
        max={2}
        suffix="px"
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('StyledCounter should render correctly', () => {
    const component = shallow(<StyledCounter theme={{ colors: darkTheme }} />);

    expect(component).toMatchSnapshot();
  });
});
