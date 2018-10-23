import { shallow } from 'enzyme';
import React from 'react';
import CurrentSite from '../components/CurrentSite';
import injectionsites from "../components/injectionsites";

describe('CurrentSite', () => {
  const exampleSite = injectionsites[0];
  it('renders something', () => {
    const wrapper = shallow(<CurrentSite site={exampleSite} />);
    
    expect(wrapper.length > 0).toBe(true);
  });

  it('should render the text of the first site location', () => {
    const app = shallow(<CurrentSite site={exampleSite} />);
    const text = app
      .find('#site')
      .dive()
      .text();
    expect(text).toEqual('Left Thigh 1');
  })
});
