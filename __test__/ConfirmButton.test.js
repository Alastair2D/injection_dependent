import {shallow} from 'enzyme';
import React from 'react';
import ConfirmButton from '../src/ConfirmButton';
import { Button } from 'react-native';

describe('ConfirmButton', () => {
  it('renders something', () => {
    let wrapper = shallow(<ConfirmButton />);
    expect(wrapper.length > 0).toBe(true);
  });

  it('has a button', () => {
    let wrapper = shallow(<ConfirmButton />);
    expect(wrapper.containsMatchingElement(<Button title="Confirm"/>)).toEqual(true);
  });
});
