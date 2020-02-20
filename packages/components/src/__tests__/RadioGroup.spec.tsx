import 'jest';
import * as React from 'react';
import { shallow } from 'enzyme';
import RadioGroup from '../components/RadioGroup/RadioGroup';
import RadioOption from '../components/RadioOption/RadioOption';
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
      >
        <RadioOption label="default" value="default" />
        <RadioOption label="primary" value="primary" />
      </RadioGroup>
    );

    expect(component).toMatchSnapshot();
  });

  it('RadioGroup should render nothing', () => {
    const component = shallow(
      <RadioGroup
        label="Active Theme"
        name="themes"
        value={name}
        onChange={val => console.log(val)}
      >
        <p>Another child</p>
      </RadioGroup>
    );

    expect(component).toMatchObject({});
    expect(component).toMatchSnapshot();
  });

  it('StyledRadioGroup should render correctly', () => {
    const component = shallow(
      <StyledRadioGroup theme={{ colors: darkTheme }} />
    );

    expect(component).toMatchSnapshot();
  });
});
