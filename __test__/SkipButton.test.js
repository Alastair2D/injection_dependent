import {shallow} from 'enzyme';
import React from 'react';
import SkipButton from '../src/SkipButton';
import { Button } from 'react-native'

describe('SkipButton', () => {
  it('renders something', () => {
    let wrapper = shallow(<SkipButton />);
    expect(wrapper.length > 0).toBe(true);
  });

  it('has a button', () => {
    let wrapper = shallow(<SkipButton />);
    expect(wrapper.containsMatchingElement(<Button title="Skip"/>)).toEqual(true);
  });
});
