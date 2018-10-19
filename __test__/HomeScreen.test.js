import { shallow } from "enzyme";
import React from "react";
import { Button } from "react-native";
import moment from 'moment';
import timekeeper from 'timekeeper';
import HomeScreen from "../screens/HomeScreen";
import CurrentSite from "../components/CurrentSite";
import PreviousSite from "../components/PreviousSite";
import injectionsites from "../components/injectionsites";
import store from '../redux/store';

describe("Homescreen", () => {
  timekeeper.freeze(new Date(1539760000000))
  let hs
  beforeEach(() => {
    hs = shallow(<HomeScreen store={store}/>).dive()
    hs.instance().props.resetDefaults()
  })
  it("renders a current site component", () => {
    expect(hs.containsMatchingElement(<CurrentSite />)).toEqual(true);
  });

  it("renders a previous site component", () => {
    expect(hs.containsMatchingElement(<PreviousSite />)).toEqual(true);
  });

  describe("Recommended Site", () => {
    it("should render the text of the suggested injection location", () => {
      const currentSite = hs.find(CurrentSite);
      expect(currentSite.length).toEqual(1);
      expect(currentSite.props().site).toEqual(injectionsites[0]);
    });
  });

  describe("Confirm Button", () => {
    beforeEach(() => {
      window.alert = jest.fn()
    })
    it("should change the site after pressing Confirm", () => {
      hs.find("#confirm").simulate('press')
      const currentSite = hs.find(CurrentSite);
      expect(currentSite.length).toEqual(1);
      expect(currentSite.props().site).toEqual(injectionsites[1]);
    });
    it("shows the alert when confirmed", () => {
      hs.find("#confirm").simulate('press')
      expect(window.alert).toHaveBeenCalledWith('Confirmed')
    })
    it("should change the site again after pressing Confirm a second time", () => {
      hs.find("#confirm").simulate('press')
      hs.find("#confirm").simulate('press')
      const currentSite = hs.find(CurrentSite);
      expect(currentSite.length).toEqual(1);
      expect(currentSite.props().site).toEqual(injectionsites[2]);
    })
  })

  describe("Skip button", () => {
    beforeEach(() => {
      window.alert = jest.fn()
    })
    it('Shows the next injection site', () => {
      hs.find("#skip").simulate('press')
      const currentSite = hs.find(CurrentSite);
      expect(currentSite.length).toEqual(1);
      expect(currentSite.props().site).toEqual(injectionsites[1]);
    })
    it('Shows an alert when skipped', () => {
      hs.find("#skip").simulate('press')
      expect(window.alert).toHaveBeenCalledWith('Skipped')
    })
  });

  describe("History", () => {
    it("should know the previous injection site once confirmed", () => {
      time = moment()
      hs.find("#confirm").simulate('press')
      const previousSite = hs.find(PreviousSite);
      expect(previousSite.length).toEqual(1);
      expect(previousSite.props().site).toEqual(injectionsites[0]);
      expect(previousSite.props().time).toEqual(time);
    });
    it("should update previous injection site once confirmed again", () => {
      hs.find("#confirm").simulate('press')
      time = moment()
      hs.find("#confirm").simulate('press')
      const previousSite = hs.find(PreviousSite);
      expect(previousSite.length).toEqual(1);
      expect(previousSite.props().site).toEqual(injectionsites[1]);
      expect(previousSite.props().time).toEqual(time);
    });
    // it("should start with a blank history", () => {
    //   const hs = shallow(<hs />);
    //   const text = hs
    //     .find("#previousSite")
    //     .dive()
    //     .find('#site')
    //     .dive()
    //     .text();
    //   expect(text).toEqual("");
    // });
  });

});
