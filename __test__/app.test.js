import { shallow } from 'enzyme';
import React from 'react';
import App from '../App';

describe('App', () => {

  describe('#Text', () => {
    it('should render the the text Welcome to React Native! in our first text tag', () => {
      const app = shallow(<App />)
      const text = app.find('#welcome').dive().text();
      console.log(text);
      expect(text).toEqual('Welcome to Injection Dependent');
    });

    it('should render the text of the first site location', () => {
      const app = shallow(<App />)
      const text = app.find('#siteLocation').dive().text();
      expect(text).toEqual('Left arm');
    });
  });
});
