import {shallow} from 'enzyme';
import React from 'react';
import CurrentSite from '../src/CurrentSite';

describe('CurrentSite', () => {
  it('renders something', () => {
    let wrapper = shallow(<CurrentSite />);
    expect(wrapper.length > 0).toBe(true);
  });

  it("should render the text of the first site location", () => {
    const app = shallow(<CurrentSite site={"Left arm"}/>);
    const text = app
      .find("#site")
      .dive()
      .text();
    expect(text).toEqual("Left arm");
  })
});
