import { shallow } from "enzyme";
import React from "react";
import { Button } from "react-native";
import moment from 'moment';
import timekeeper from 'timekeeper';
import App from "../App";
import CurrentSite from "../src/CurrentSite";
import PreviousSite from "../src/PreviousSite";

describe("App", () => {
  timekeeper.freeze(new Date(1539760000000))
  let app
  beforeEach(() => {
    app = shallow(<App />)
  })
  it("renders a current site component", () => {
    expect(app.containsMatchingElement(<CurrentSite />)).toEqual(true);
  });

  it("renders a previous site component", () => {
    expect(app.containsMatchingElement(<PreviousSite />)).toEqual(true);
  });

  describe("Recommended Site", () => {
    it("should render the text of the suggested injection location", () => {
      const currentSite = app.find(CurrentSite);
      expect(currentSite.length).toEqual(1);
      expect(currentSite.props().site).toEqual("Left arm");
    });
  });

  describe("Confirm Button", () => {
    beforeEach(() => {
      window.alert = jest.fn()
    })
    it("should change the site after pressing Confirm", () => {
      app.find("#confirm").simulate('press')
      const currentSite = app.find(CurrentSite);
      expect(currentSite.length).toEqual(1);
      expect(currentSite.props().site).toEqual("Left leg");
    });
    it("shows the alert when confirmed", () => {
      app.find("#confirm").simulate('press')
      expect(window.alert).toHaveBeenCalledWith('Confirmed')
    })
    it("should change the site again after pressing Confirm a second time", () => {
      app.find("#confirm").simulate('press')
      app.find("#confirm").simulate('press')
      const currentSite = app.find(CurrentSite);
      expect(currentSite.length).toEqual(1);
      expect(currentSite.props().site).toEqual("Right arm");
    })
  })

  describe("Skip button", () => {
    beforeEach(() => {
      window.alert = jest.fn()
    })
    it('Shows the next injection site', () => {
      app.find("#skip").simulate('press')
      const currentSite = app.find(CurrentSite);
      expect(currentSite.length).toEqual(1);
      expect(currentSite.props().site).toEqual("Left leg");
    })
    it('Shows an alert when skipped', () => {
      app.find("#skip").simulate('press')
      expect(window.alert).toHaveBeenCalledWith('Skipped')
    })
  });

  describe("History", () => {
    it("should know the previous injection site once confirmed", () => {
      time = moment()
      app.find("#confirm").simulate('press')
      const previousSite = app.find(PreviousSite);
      expect(previousSite.length).toEqual(1);
      expect(previousSite.props().site).toEqual("Left arm");
      expect(previousSite.props().time).toEqual(time);
    });
    it("should update previous injection site once confirmed again", () => {
      app.find("#confirm").simulate('press')
      time = moment()
      app.find("#confirm").simulate('press')
      const previousSite = app.find(PreviousSite);
      expect(previousSite.length).toEqual(1);
      expect(previousSite.props().site).toEqual("Left leg");
      expect(previousSite.props().time).toEqual(time);
    });
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
  });

});
