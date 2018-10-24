import { shallow } from 'enzyme';
import React from 'react';

import LongShortSwitch from '../components/LongShortSwitch';
import ToggleSwitch from 'toggle-switch-react-native';

describe('LongShortSwitch', () => {
  let lSS;
  beforeEach(() => {
    lSS = <LongShortSwitch />;
  });
  it('is on by default', () => {
    const toggleSwitch = lSS.find(ToggleSwitch);
    expect(toggleSwitch.state.isOn).toEqual('On');
  })
  it('sets state to short-acting when on', () => {
    const toggleSwitch = lSS.find(ToggleSwitch);
    toggleSwitch.simulate('click');
    toggleSwitch.simulate('click');
    expect(toggleSwitch.state.isOn == 'On').toEqual(true);
  });
  it('sets state to long-acting when off', () => {
    const toggleSwitch = lSS.find(ToggleSwitch);
    toggleSwitch.simulate('click');
    expect(toggleSwitch.state.isOn == 'Off').toEqual(true);
  });
});
