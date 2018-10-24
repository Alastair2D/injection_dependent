import { shallow } from "enzyme";
import React from "react";
import { Button } from "react-native";
import moment from 'moment';
import timekeeper from 'timekeeper';
import GestureRecognizer, { swipeDirections } from "react-native-swipe-gestures";

import { HomeScreen } from "../screens/HomeScreen";
import CurrentSite from "../components/CurrentSite";
import PreviousSite from "../components/PreviousSite";
import injectionsites from "../components/injectionsites";
import BodyImages from "../components/BodyImages";

describe("Homescreen", () => {
  timekeeper.freeze(new Date(1539760000000))
  let hs
  let mockNextInjSite
  let mockSaveInj
  let mockRotateNSites

  beforeEach(() => {
    mockNextInjSite = jest.fn();
    mockSaveInj = jest.fn();
    mockRotateNSites = jest.fn();
    hs = shallow(<HomeScreen
      saveInj={mockSaveInj}
      nextInjSite={mockNextInjSite}
      rotateNSites={mockRotateNSites}
      sites={injectionsites}
      history={[{ site: injectionsites[injectionsites.length - 1], time: moment() }]}
    />)
  })

  describe("Recommended and Previous Site components", () => {
    it("should render the text of the suggested injection location", () => {
      const currentSite = hs.find(CurrentSite);
      expect(currentSite.length).toEqual(1);
      expect(currentSite.props().site).toEqual(injectionsites[0]);
    });
    it("should render the text of the previous injection location, with a time", () => {
      time = moment()
      const previousSite = hs.find(PreviousSite);
      expect(previousSite.length).toEqual(1);
      expect(previousSite.props().site).toEqual(injectionsites[injectionsites.length - 1]);
      expect(previousSite.props().time).toEqual(time);
    });
    it("wont render a site that is not active", () => {
      let inactive = [
        { part: 'Thigh', side: 'Left', quadrant: 1, active: false, imgNum: 0 },
        { part: 'Thigh', side: 'Left', quadrant: 2, active: true, imgNum: 1 }
      ]
      hs = shallow(<HomeScreen
        rotateNSites={mockRotateNSites}
        sites={inactive}
        history={[{ site: injectionsites[injectionsites.length - 1], time: moment() }]}
      />)
      const currentSite = hs.find(CurrentSite);
      expect(currentSite.length).toEqual(1);
      // expect(hs.props().sites[0].active).toBe(false)
      expect(mockRotateNSites.mock.calls.length).toBe(1)
      expect(currentSite.props().site).toEqual(inactive[1]);
    });
  });

  describe("Confirmation swipe right", () => {
    it("should call Save and Next actions after pressing Confirm", () => {
      hs.find(GestureRecognizer).simulate('swipeRight');
      const currentSite = hs.find(CurrentSite);
      expect(currentSite.length).toEqual(1);
      expect(mockNextInjSite.mock.calls.length).toBe(1)
      expect(mockSaveInj.mock.calls.length).toBe(1)
      // expect(currentSite.props().site).toEqual(injectionsites[1]);
    });
    it("should call Save and Next actions again after pressing a second time", () => {
      hs.find(GestureRecognizer).simulate('swipeRight');
      hs.find(GestureRecognizer).simulate('swipeRight');
      const currentSite = hs.find(CurrentSite);
      expect(currentSite.length).toEqual(1);
      expect(mockNextInjSite.mock.calls.length).toBe(2)
      expect(mockSaveInj.mock.calls.length).toBe(2)
      // expect(currentSite.props().site).toEqual(injectionsites[2]);
    })
  })

  describe("Skip swipe left", () => {
    it('should call the Next action on press', () => {
      hs.find(GestureRecognizer).simulate('swipeLeft')
      const currentSite = hs.find(CurrentSite);
      expect(currentSite.length).toEqual(1);
      expect(mockNextInjSite.mock.calls.length).toBe(1)
      expect(mockSaveInj.mock.calls.length).toBe(0)
    })
  });

  describe('ConfirmModal', () => {
    it('renders a confirm modal', () => {
      expect(hs.find(<ConfirmModal />).length).toBe(1);
    })
  })
});
