import {shallow} from 'enzyme';
import React from 'react';
import SettingsView from '../components/SettingsView';
import { CheckBox } from 'react-native-elements';

describe('Sites', () => {
  // it('renders the title of the list', () => {
  //   const app = shallow(<SettingsView />);
  //   const text = app
  //   .find("#sites")
  //   .dive()
  //   .text();
  //   expect(text).toEqual("Sites");
  // });

  it('changes the state for legs checkbox', () => {
    const app = shallow(<SettingsView />);
    app.find("#legs").simulate('press');
    const checkBox = app.find(CheckBox).at(0);
    console.log(checkBox.props());
    console.log(checkBox.props().checked);
    expect(checkBox.length).toEqual(1);
    expect(checkBox.props().legsChecked).toEqual(true);
  });

  // it('changes the state for arms checkbox', () => {
  //   const app = shallow(<SettingsView />);
  //   app.find("#arms").simulate('press');
  //   const checkBox = app.find(CheckBox).at(1);
  //   console.log(checkBox.props().checked);
  //   expect(checkBox.length).toEqual(1);
  //   expect(checkBox.props().armsChecked).toEqual(true);
  // });

  // it('changes the state for abdomen checkbox', () => {
  //   const app = shallow(<SettingsView />);
  //   app.find("#abdomen").simulate('press');
  //   const checkBox = app.find(CheckBox).at(2);
  //   expect(checkBox.length).toEqual(1);
  //   expect(checkBox.props().abdomenChecked).toEqual(true);
  // });

  // it('changes the state for buttocks checkbox', () => {
  //   const app = shallow(<SettingsView />);
  //   app.find("#buttocks").simulate('press');
  //   const checkBox = app.find(CheckBox).at(3);
  //   expect(checkBox.length).toEqual(1);
  //   expect(checkBox.props().buttocksChecked).toEqual(true);
  // });

  // it('changes the state for thighs checkbox', () => {
  //   const app = shallow(<SettingsView />);
  //   app.find("#thighs").simulate('press');
  //   const checkBox = app.find(CheckBox).at(4);
  //   expect(checkBox.length).toEqual(1);
  //   expect(checkBox.props().thighsChecked).toEqual(true);
  // });
});
