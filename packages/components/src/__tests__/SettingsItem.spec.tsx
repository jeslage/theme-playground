import 'jest';
import * as React from 'react';
import { shallow } from 'enzyme';

import { StyledSettingsItem } from '../components/SettingsItem/SettingsItem.style';
import { SettingsComponent } from '../components/SettingsItem/SettingsItem';

import { darkTheme } from '../theme';

describe('SettingsItem', () => {
  it('SettingsComponent should render Counter', () => {
    const component = shallow(
      <SettingsComponent
        type="counter"
        path="counter.path"
        overrideProps={{}}
        props={{ label: 'counter.path', value: 20 }}
        update={(path, value) => console.log(path, value)}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('SettingsComponent should render Colorpicker', () => {
    const component = shallow(
      <SettingsComponent
        type="colorpicker"
        path="colorpicker.path"
        overrideProps={{}}
        props={{ label: 'colorpicker.path', value: '#fff' }}
        update={(path, value) => console.log(path, value)}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('SettingsComponent should render Range', () => {
    const component = shallow(
      <SettingsComponent
        type="range"
        path="range.path"
        overrideProps={{}}
        props={{ label: 'range.path', value: 20 }}
        update={(path, value) => console.log(path, value)}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('SettingsComponent should render Input', () => {
    const component = shallow(
      <SettingsComponent
        type="input"
        path="input.path"
        overrideProps={{}}
        props={{ label: 'input.path', value: 'Text' }}
        update={(path, value) => console.log(path, value)}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('SettingsComponent should render Switch', () => {
    const component = shallow(
      <SettingsComponent
        type="switch"
        path="switch.path"
        overrideProps={{}}
        props={{ label: 'switch.path', value: true }}
        update={(path, value) => console.log(path, value)}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('SettingsComponent should render Textarea', () => {
    const component = shallow(
      <SettingsComponent
        type="textarea"
        path="textarea.path"
        overrideProps={{}}
        props={{ label: 'textarea.path', value: 'Textarea value' }}
        update={(path, value) => console.log(path, value)}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('SettingsComponent should render Shorthand', () => {
    const component = shallow(
      <SettingsComponent
        type="shorthand"
        path="shorthand.path"
        overrideProps={{}}
        props={{
          label: 'shorthand.path',
          value: { top: 20, right: 20, left: 20, bottom: 20 }
        }}
        update={(path, value) => console.log(path, value)}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('SettingsComponent should render null', () => {
    const component = shallow(
      <SettingsComponent
        type="unknown"
        path="unknown.path"
        overrideProps={{}}
        props={{
          label: 'unknown.path',
          value: 'not known'
        }}
        update={(path, value) => console.log(path, value)}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('StyledSettingsItem should render correctly', () => {
    const component = shallow(
      <StyledSettingsItem theme={{ colors: darkTheme }} />
    );

    expect(component).toMatchSnapshot();
  });
});
