import {shallow} from 'enzyme';
import React from 'react';
import CurrentSite from '../src/CurrentSite';

describe('CurrentSite', () => {
  it('renders something', () => {
    let wrapper = shallow(<CurrentSite />);
    expect(wrapper.length > 0).toBe(true);
  });
});
