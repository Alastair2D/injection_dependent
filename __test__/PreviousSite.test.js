import {shallow} from 'enzyme';
import React from 'react';
import PreviousSite from '../src/PreviousSite';
import { equal } from 'assert';

describe('PreviousSite', () => {
  it('renders something', () => {
    let wrapper = shallow(<PreviousSite />);
    expect(wrapper.length > 0).toBe(true);
  });
});
