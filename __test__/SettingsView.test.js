import {shallow} from 'enzyme';
import React from 'react';
import SettingsView from '../components/SettingsView';
import { CheckBox } from 'react-native-elements';

describe('Sites', () => {
  it('renders the title of the list', () => {
    const app = shallow(<SettingsView />);
    const text = app
    .find("#sites")
    .dive()
    .text();
    expect(text).toEqual("Sites");
  });

  it('changes the state for legs checkbox', () => {
    const app = shallow(<SettingsView />);
    app.find("#legs").simulate('press');
    const checkBox = app.find(CheckBox).at(0);
    expect(checkBox.length).toEqual(1);
    expect(checkBox.props().legsChecked).toEqual(true);
  });

  it('changes the state for arms checkbox', () => {
    const app = shallow(<SettingsView />);
    app.find("#arms").simulate('press');
    const checkBox = app.find(CheckBox).at(1);
    expect(checkBox.length).toEqual(1);
    expect(checkBox.props().armsChecked).toEqual(true);
  });
});
