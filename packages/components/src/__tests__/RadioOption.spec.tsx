import 'jest';
import * as React from 'react';
import { shallow } from 'enzyme';

import RadioOption from '../components/RadioOption/RadioOption';
import StyledRadioOption from '../components/RadioOption/RadioOption.style';
import { darkTheme } from '../theme';

describe('RadioOption', () => {
  it('RadioOption should render correctly', () => {
    const component = shallow(<RadioOption label="primary" value="primary" />);

    expect(component).toMatchSnapshot();
  });

  it('RadioOption without label should render correctly', () => {
    const component = shallow(<RadioOption value="primary" />);

    expect(component).toMatchSnapshot();
  });

  it('StyledRadioOption should render correctly', () => {
    const component = shallow(
      <StyledRadioOption theme={{ colors: darkTheme }} />
    );

    expect(component).toMatchSnapshot();
  });
});
