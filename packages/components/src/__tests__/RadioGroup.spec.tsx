import 'jest';
import * as React from 'react';
import { shallow } from 'enzyme';
import RadioGroup from '../components/RadioGroup/RadioGroup';
import StyledRadioGroup from '../components/RadioGroup/RadioGroup.style';
import { darkTheme } from '../theme';

describe('RadioGroup', () => {
  it('RadioGroup should render correctly', () => {
    const component = shallow(
      <RadioGroup
        label="Active Theme"
        name="themes"
        value={name}
        onChange={val => console.log(val)}
        options={[
          { label: 'default', value: 'default' },
          { label: 'primary', value: 'primary' }
        ]}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('StyledRadioGroup should render correctly', () => {
    const component = shallow(
      <StyledRadioGroup theme={{ colors: darkTheme }} />
    );

    expect(component).toMatchSnapshot();
  });
});
