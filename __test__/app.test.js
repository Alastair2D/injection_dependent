import { shallow } from "enzyme";
import React from "react";
import App from "../App";
import CurrentSite from "../src/CurrentSite";
import PreviousSite from "../src/PreviousSite";

describe("App", () => {
  it("renders a current site component", () => {
    let wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<CurrentSite />)).toEqual(true);
  });

  it("renders a previous site compoent", () => {
    let wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<PreviousSite />)).toEqual(true);
  });

  describe('#Text', () => {
    it('should render the the text Welcome to React Native! in our first text tag', () => {
      const app = shallow(<App />);
      const text = app.find('#welcome').dive().text();
      expect(text).toEqual('Welcome to Injection Dependent');
    });
  });

  describe('Site', () => {
    it('should render the text of the first site location', () => {
      const app = shallow(<App />);
      const text = app.find('#site').dive().text();
      expect(text).toEqual('Left arm');
    });

    it('should change the site after clicking confirmed', () => {
      const app = shallow(<App />);
      handleConfirmation();
      const text = app.find('#site').dive().text();
      expect(text).toEqual('Left leg');
    });
  });
});
