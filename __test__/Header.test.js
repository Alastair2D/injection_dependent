import { shallow } from 'enzyme';
import React from 'react';
import Header from '../components/Header';

describe('#Welcome', () => {
  it('should render the text Welcome to Injection Dependent in our first text tag', () => {
    const app = shallow(<Header />);
    const text = app
      .find('#welcome')
      .dive()
      .text();
    expect(text).toEqual('Welcome to Injection Dependent');
  });
});
