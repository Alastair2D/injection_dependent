import {shallow} from 'enzyme';
import React from 'react';
import moment from 'moment'
import PreviousSite from '../components/PreviousSite';
import injectionsites from "../components/injectionsites";

describe('PreviousSite', () => {
  it('renders text of previous site location and time', () => {
    const time = moment()
    const calTime = time.calendar()
    const app = shallow(<PreviousSite site={ injectionsites[0] } time={time}/>);
    const text = app
      .find("#site")
      .dive()
      .text();
    expect(text).toEqual("Previous: Left Thigh 1, " + calTime);
  })
});
