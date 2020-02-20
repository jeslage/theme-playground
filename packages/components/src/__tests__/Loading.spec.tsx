import 'jest';
import * as React from 'react';
import { shallow } from 'enzyme';
import Loading from '../components/Loading/Loading';
import StyledLoading from '../components/Loading/Loading.style';
import { darkTheme } from '../theme';

describe('Loading', () => {
  it('Loading should render correctly', () => {
    const component = shallow(<Loading isLoading />);

    expect(component).toMatchSnapshot();
  });

  it('StyledLoading should render correctly', () => {
    const component = shallow(
      <StyledLoading theme={{ colors: darkTheme }} isLoading={true} />
    );

    expect(component).toMatchSnapshot();
  });
});
