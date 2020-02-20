import 'jest';
import * as React from 'react';
import { shallow } from 'enzyme';

import Button from '../components/Button/Button';
import StyledButton from '../components/Button/Button.style';
import { darkTheme } from '../theme';

describe('Button', () => {
  it('Button should render correctly', () => {
    const component = shallow(
      <Button onClick={() => console.log('Test')}>Test</Button>
    );

    expect(component).toMatchSnapshot();
  });

  it('StyledButton should render correctly', () => {
    const component = shallow(<StyledButton theme={{ colors: darkTheme }} />);

    expect(component).toMatchSnapshot();
  });
});
