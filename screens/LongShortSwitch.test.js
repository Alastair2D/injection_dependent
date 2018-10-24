import React from 'react';
import { shallow } from 'enzyme';

import { ToggleSwitch } from 'toggle-switch-react-native';
import LongShortSwitch from '../components/LongShortSwitch';

describe('LongShortSwitch', () => {
  let lSS;
  beforeEach(() => {
    lSS = shallow(<LongShortSwitch />);
  });
  it('is short by default', () => {
    const toggleSwitch = lSS.find(ToggleSwitch);
    expect(toggleSwitch.state.switchStatus).toEqual('Short');
  });
  it('sets state to short-acting when on', () => {
    const toggleSwitch = lSS.find(ToggleSwitch);
    toggleSwitch.simulate('click');
    toggleSwitch.simulate('click');
    expect(toggleSwitch.state.switchStatus === 'Short').toEqual(true);
  });
  it('sets state to long-acting when off', () => {
    const toggleSwitch = lSS.find(ToggleSwitch);
    toggleSwitch.simulate('click');
    expect(toggleSwitch.state.switchStatus === 'Long').toEqual(true);
  });
});
