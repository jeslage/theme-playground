import 'jest';
import * as React from 'react';
import { shallow } from 'enzyme';
import Panel from '../components/Panel/Panel';
import StyledPanel from '../components/Panel/Panel.style';
import { darkTheme } from '../theme';
import ThemePlaygroundProvider from '../contexts/ThemePlaygroundProvider';

describe('Panel', () => {
  it('Panel should render correctly', () => {
    const component = shallow(
      <ThemePlaygroundProvider options={{ theme: { color: 'red' } }}>
        {() => <Panel className="panel__classname" />}
      </ThemePlaygroundProvider>
    );

    expect(component).toMatchSnapshot();
  });

  it('StyledPanel should render correctly', () => {
    const component = shallow(<StyledPanel theme={{ colors: darkTheme }} />);

    expect(component).toMatchSnapshot();
  });
});
