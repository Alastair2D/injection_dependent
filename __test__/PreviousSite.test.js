import {shallow} from 'enzyme';
import React from 'react';
import moment from 'moment'
import PreviousSite from '../src/PreviousSite';

describe('PreviousSite', () => {
  it('renders something', () => {
    let wrapper = shallow(<PreviousSite />);
    expect(wrapper.length > 0).toBe(true);
  });
  it('renders text of previous site location and time', () => {
    const time = moment().calendar()
    const app = shallow(<PreviousSite site={"Left arm"} time={time}/>);
    const text = app
      .find("#site")
      .dive()
      .text();
    expect(text).toEqual("Previous: Left arm, " + time);
  })

});
