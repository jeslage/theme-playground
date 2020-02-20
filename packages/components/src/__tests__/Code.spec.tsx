import 'jest';
import * as React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';

import { darkTheme } from '../theme';
import Code from '../components/Code/Code';
import StyledCode from '../components/Code/Code.style';

describe('Code', () => {
  it('Code should render correctly', () => {
    const component = shallow(<Code value={{ theme: { color: 'red' } }} />);

    expect(component).toMatchSnapshot();
  });

  it('StyledCode should render correctly', () => {
    const component = shallow(<StyledCode theme={{ colors: darkTheme }} />);

    expect(component).toMatchSnapshot();
  });

  it('Code should be copied', () => {
    const component = mount(
      <ThemeProvider theme={{ colors: darkTheme }}>
        <Code value={{ theme: { color: 'red' } }} />
      </ThemeProvider>
    );

    component.find('button').simulate('click');

    expect(component).toMatchSnapshot();
  });
});
