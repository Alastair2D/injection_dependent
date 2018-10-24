import React from "react";
import { shallow } from "enzyme";
import { ToggleSwitch } from 'toggle-switch-react-native';
import LongShortSwitch from '../components/LongShortSwitch';

describe('LongShortSwitch', () => {
  let lSS;
  beforeEach(() => {
    lSS = shallow(<LongShortSwitch />);
  });
  it('is short by default', () => {
    const toggleSwitch = lSS.find(ToggleSwitch);
    expect(toggleSwitch.state.medType).toEqual('Short');
  });
  xit('sets state to short-acting when on', () => {
    const toggleSwitch = lSS.find(ToggleSwitch);
    toggleSwitch.simulate('click');
    toggleSwitch.simulate('click');
    expect(toggleSwitch.state.medType === 'Short').toEqual(true);
  });
  xit('sets state to long-acting when off', () => {
    const toggleSwitch = lSS.find(ToggleSwitch);
    toggleSwitch.simulate('click');
    expect(toggleSwitch.state.medType === 'Long').toEqual(true);
  });
});
