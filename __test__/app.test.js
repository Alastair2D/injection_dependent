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

  it("renders a previous site component", () => {
    let wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<PreviousSite />)).toEqual(true);
  });

  describe("#Text", () => {
    it("should render the the text Welcome to React Native! in our first text tag", () => {
      const app = shallow(<App />);
      const text = app
        .find("#welcome")
        .dive()
        .text();
      expect(text).toEqual("Welcome to Injection Dependent");
    });
  });

  describe("Site", () => {
    it("should render the text of the first site location", () => {
      const app = shallow(<App />);
      const text = app
        .find("#currentSite")
        .dive()
        .find('#site')
        .dive()
        .text();
      expect(text).toEqual("Left arm");
    });


    // User clicks confirm button 
    // Site is updated
    // Text visualisation of previous site is updated


    it("should change the site after clicking confirmed", () => {
      const app = shallow(<App />);
      app.find("#confirm").simulate('press')
      const text = app
        .find("#currentSite")
        .dive()
        .find('#site')
        .dive()
        .text();
      expect(text).toEqual("Left leg");
    });

    it("should change the site again after clicking confirmed a second time", () => {
      const app = shallow(<App />);
      app.instance().handleConfirmation();
      app.instance().handleConfirmation();
      const text = app
        .find("#currentSite")
        .dive()
        .find('#site')
        .dive()
        .text();
      expect(text).toEqual("Right arm");
    });
  });

  describe("History", () => {
    // it("should start with a blank history", () => {
    //   const app = shallow(<App />);
    //   const text = app
    //     .find("#previousSite")
    //     .dive()
    //     .find('#site')
    //     .dive()
    //     .text();
    //   expect(text).toEqual("");
    // });
    it("should know the previous injection site once confirmed", () => {
      const app = shallow(<App />);
      app.instance().handleConfirmation();
      const text = app
        .find("#previousSite")
        .dive()
        .find('#site')
        .dive()
        .text();
      expect(text).toEqual("Left arm");
    });
    it("should update previous injection site once confirmed again", () => {
      const app = shallow(<App />);
      app.instance().handleConfirmation();
      app.instance().handleConfirmation();
      const text = app
        .find("#previousSite")
        .dive()
        .find('#site')
        .dive()
        .text();
      expect(text).toEqual("Left leg");
    });
  });
});
