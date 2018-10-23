import {shallow} from 'enzyme';
import React from 'react';
import SettingsScreen from '../screens/SettingsScreen';
import { CheckBox } from 'react-native-elements';

describe('SettingsScreen', () => {
  it('checks the existence of a checkbox', () => {
    const app = shallow(<SettingsScreen />);
    const checkbox = app.find("#Thigh")
    expect(checkbox.length).toEqual(1);
    expect(checkbox.props().checked).toEqual(true);
  });

  it('changes the state for arms checkbox', () => {
    const app = shallow(<SettingsScreen />);
    let checkbox = app.find("#Arm");
    checkbox.simulate('press');
    checkbox = app.find("#Arm");
    expect(checkbox.length).toEqual(1);
    expect(checkbox.props().checked).toEqual(false);
  });
});
