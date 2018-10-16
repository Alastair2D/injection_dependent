import {shallow} from 'enzyme';
import React from 'react';
import App from '../App';
import { equal } from 'assert';

describe('App', () => {
  it('renders something', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.length > 0).toBe(true);
  });
});
