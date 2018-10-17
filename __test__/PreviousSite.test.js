import {shallow} from 'enzyme';
import React from 'react';
import PreviousSite from '../src/PreviousSite';

describe('PreviousSite', () => {
  it('renders something', () => {
    let wrapper = shallow(<PreviousSite />);
    expect(wrapper.length > 0).toBe(true);
  });
  it('renders text of previous site location', () => {
    const app = shallow(<PreviousSite site={"Left arm"} />);
    const text = app
      .find("#site")
      .dive()
      .text();
    expect(text).toEqual("Left arm");
  })

});


