import 'jest';
import * as React from 'react';
import { shallow } from 'enzyme';

import Textarea from '../components/Textarea/Textarea';
import StyledTextarea from '../components/Textarea/Textarea.style';
import { darkTheme } from '../theme';

describe('Textarea', () => {
  it('Textarea should render correctly', () => {
    const component = shallow(
      <Textarea
        onChange={value => console.log(value)}
        label="Label"
        description="Testbeschreibung"
        value="TestTextarea"
        iconBefore={
          <svg height="24" viewBox="0 0 24 24" width="24">
            <rect height="2" rx="1" width="12" x="6" y="11" />
          </svg>
        }
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('StyledTextarea should render correctly', () => {
    const component = shallow(<StyledTextarea theme={{ colors: darkTheme }} />);

    expect(component).toMatchSnapshot();
  });
});
