import {shallow} from 'enzyme';
import React from 'react';
import SettingsView from '../components/SettingsView';

describe('Sites', () => {
  it('renders the title of the list', () => {
    const app = shallow(<SettingsView />);
    const text = app
    .find("#title")
    .dive()
    .text();
    expect(text).toEqual("Sites");
  });
});
