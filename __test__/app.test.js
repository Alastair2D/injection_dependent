import { shallow } from "enzyme";
import React from "react";
import App from "../App";
import CurrentSite from "../src/CurrentSite";
import PreviousSite from "../src/PreviousSite";
import MockStorage from "./MockStorage"

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
        .find("#site")
        .dive()
        .text();
      expect(text).toEqual("Left arm");
    });

    it("should change the site after clicking confirmed", () => {
      const app = shallow(<App />);
      app.instance().handleConfirmation();
      const text = app
        .find("#site")
        .dive()
        .text();
      expect(text).toEqual("Left leg");
    });

    it("should change the site again after clicking confirmed a second time", () => {
      const app = shallow(<App />);
      app.instance().handleConfirmation();
      app.instance().handleConfirmation();
      const text = app
        .find("#site")
        .dive()
        .text();
      expect(text).toEqual("Right arm");
    });
  });

  // describe("History", () => {
  //   it("should start with a blank history", () => {
  //     const app = shallow(<App />);
  //     const text = app
  //       .find("#previousSite")
  //       .dive()
  //       .text();
  //     expect(text).toEqual("Previous site: ");
  //   });
  //   it("should know the previous injection site once confirmed", () => {
  //     const app = shallow(<App />);
  //     app.instance().handleConfirmation();
  //     const text = app
  //       .find("#previousSite")
  //       .dive()
  //       .text();
  //     expect(text).toEqual("Previous site: Left arm");
  //   });
  //   it("should update previous injection site once confirmed again", () => {
  //     const app = shallow(<App />);
  //     app.instance().handleConfirmation();
  //     app.instance().handleConfirmation();
  //     const text = app
  //       .find("#previousSite")
  //       .dive()
  //       .text();
  //     expect(text).toEqual("Previous site: Left leg");
  //   });
  // });

  // describe('AsyncStorage', () => {
  //   it('does something', () => {
  //     const storageCache = {"1": "Right leg"};
  //     const AsyncStorage = new MockStorage(storageCache);
  //     jest.setMock('AsyncStorage', AsyncStorage)
  //     const app = shallow(<App />)
  //     expect.assertions(1)
  //     setTimeout(() => {
  //       shallowWrapper.update();
  //       const text = app.find('#previousSite').dive().text();
  //       expect(text).toEqual("Previous site: Left arm");
  //     }), 2000;
  //   });
  // });
});
