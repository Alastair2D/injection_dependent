import {shallow} from 'enzyme';
import React from 'react';
import CurrentSite from '../components/CurrentSite';

describe('CurrentSite', () => {
  const exampleSite = { part: 'Left Hip(2)', active: true, imgNum: 9 };
  it('renders something', () => {
    let wrapper = shallow(<CurrentSite site={exampleSite}/>);
    expect(wrapper.length > 0).toBe(true);
  });

  it("should render the text of the first site location", () => {
    const app = shallow(<CurrentSite site={exampleSite}/>);
    const text = app
      .find("#site")
      .dive()
      .text();
    expect(text).toEqual('Left Hip(2)');
  })

});
