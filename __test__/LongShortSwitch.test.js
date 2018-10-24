import React from 'react';
import { shallow } from 'enzyme';

import LongShortSwitch from '../components/LongShortSwitch';
import ToggleSwitch from 'toggle-switch-react-native';

describe('LongShortSwitch', () => {
  // let lSS;
  // beforeEach(() => {
  //   lSS = shallow(<LongShortSwitch />);
  // });
  it('is short by default', () => {
    lSS = shallow(<LongShortSwitch />)
    const toggleSwitch = lSS.find(ToggleSwitch);
    expect(toggleSwitch.state.insulinType).toEqual('Short');
  });
  xit('sets state to short-acting when on', () => {
    const toggleSwitch = lSS.find(ToggleSwitch);
    toggleSwitch.simulate('click');
    toggleSwitch.simulate('click');
    expect(toggleSwitch.state.insulinType === 'Short').toEqual(true);
  });
  xit('sets state to long-acting when off', () => {
    const toggleSwitch = lSS.find(ToggleSwitch);
    toggleSwitch.simulate('click');
    expect(toggleSwitch.state.insulinType === 'Long').toEqual(true);
  });
});
