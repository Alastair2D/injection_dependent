import {shallow} from 'enzyme';
import React from 'react';
import GenerateButton from '../src/GenerateButton';

describe('GenerateButton', () => {
  it('renders something', () => {
    let wrapper = shallow(<GenerateButton />);
    expect(wrapper.length > 0).toBe(true);
  });
});
