import React from 'react';
import { shallow } from 'enzyme';

import ToggleSwitch from 'toggle-switch-react-native';
import LongShortSwitch from '../components/LongShortSwitch';

describe('LongShortSwitch', () => {
  let lSS;
  beforeEach(() => {
    lSS = shallow(<LongShortSwitch />);
  });
  it('is short by default', () => {
    const toggleSwitch = lSS.find(ToggleSwitch);
    expect(toggleSwitch.state.insulinType).toEqual('Short');
  });
  it('sets state to short-acting when on', () => {
    const toggleSwitch = lSS.find(ToggleSwitch);
    toggleSwitch.simulate('click');
    toggleSwitch.simulate('click');
    expect(toggleSwitch.state.insulinType === 'Short').toEqual(true);
  });
  it('sets state to long-acting when off', () => {
    const toggleSwitch = lSS.find(ToggleSwitch);
    toggleSwitch.simulate('click');
    expect(toggleSwitch.state.insulinType === 'Long').toEqual(true);
  });
});
