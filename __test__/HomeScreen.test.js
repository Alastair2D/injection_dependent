<<<<<<< HEAD
import { shallow } from 'enzyme';
import React from 'react';
import moment from 'moment';
import timekeeper from 'timekeeper';
import HomeScreen from '../screens/HomeScreen';
import CurrentSite from '../components/CurrentSite';
import PreviousSite from '../components/PreviousSite';
import injectionsites from '../components/injectionsites';
import BodyImages from '../components/BodyImages';
import GestureRecognizer from 'react-native-swipe-gestures';

describe('Homescreen', () => {
  timekeeper.freeze(new Date(1539760000000));
  let hs;
  beforeEach(() => {
    hs = shallow(<HomeScreen />);
  });
  it('renders a current site component', () => {
    expect(hs.containsMatchingElement(<CurrentSite />)).toEqual(true);
  });

  it('renders a previous site component', () => {
    expect(hs.containsMatchingElement(<PreviousSite />)).toEqual(true);
  });

  it('renders a BodyImage wrapped in a GestureRecognizer component', () => {
    expect(hs.containsMatchingElement(
      <GestureRecognizer><BodyImages /></GestureRecognizer>
    )).toEqual(true);
  });

  describe('Recommended Site', () => {
    it('should render the text of the suggested injection location', () => {
=======
import { shallow } from "enzyme";
import React from "react";
import { Button } from "react-native";
import moment from 'moment';
import timekeeper from 'timekeeper';
import { HomeScreen } from "../screens/HomeScreen";
import CurrentSite from "../components/CurrentSite";
import PreviousSite from "../components/PreviousSite";
import injectionsites from "../components/injectionsites";
// import store from '../redux/store';
import BodyImages from "../components/BodyImages";
import GestureRecognizer, { swipeDirections } from "react-native-swipe-gestures";

describe("Homescreen", () => {
  timekeeper.freeze(new Date(1539760000000))
  let hs
  let mockNextInjSite
  let mockSaveInj

  beforeEach(() => {
    mockNextInjSite = jest.fn();
    mockSaveInj = jest.fn();
    hs = shallow(<HomeScreen
      saveInj={mockSaveInj}
      nextInjSite={mockNextInjSite}
      sites={injectionsites}
      history={[{ site: injectionsites[injectionsites.length - 1], time: moment() }]}
    />)
  })

  describe("Recommended and Previous Site components", () => {
    it("should render the text of the suggested injection location", () => {
>>>>>>> development
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
  });

<<<<<<< HEAD
  describe('Confirmation', () => {
    it('swipe right to confirm', () => {
      hs.instance().onSwipeRight();
=======
  describe("Confirm Button", () => {
    beforeEach(() => {
      window.alert = jest.fn()
    })
    it("should call Save and Next actions after pressing Confirm", () => {
      hs.find("#confirm").simulate('press')
>>>>>>> development
      const currentSite = hs.find(CurrentSite);

      expect(currentSite.length).toEqual(1);
      expect(mockNextInjSite.mock.calls.length).toBe(1)
      expect(mockSaveInj.mock.calls.length).toBe(1)
      // expect(currentSite.props().site).toEqual(injectionsites[1]);
    });
<<<<<<< HEAD
    it('should change the site after confirmation', () => {
      hs.instance().handleConfirmation();
      const currentSite = hs.find(CurrentSite);

      expect(currentSite.length).toEqual(1);
      expect(currentSite.props().site).toEqual(injectionsites[1]);
    });
    it('should change the site again after pressing Confirm a second time', () => {
      hs.instance().handleConfirmation();
      hs.instance().handleConfirmation();
=======
    it("shows the alert when confirmed", () => {
      hs.find("#confirm").simulate('press')
      expect(window.alert).toHaveBeenCalledWith('Confirmed')
    })
    it("should call Save and Next actions again after pressing a second time", () => {
      hs.find("#confirm").simulate('press')
      hs.find("#confirm").simulate('press')
>>>>>>> development
      const currentSite = hs.find(CurrentSite);

      expect(currentSite.length).toEqual(1);
      expect(mockNextInjSite.mock.calls.length).toBe(2)
      expect(mockSaveInj.mock.calls.length).toBe(2)
      // expect(currentSite.props().site).toEqual(injectionsites[2]);
    })
  })

<<<<<<< HEAD
  describe('Skipping', () => {
    it('swipe left to skip', () => {
      hs.instance().onSwipeRight();
      const lastSite = hs.find(PreviousSite);

      hs.instance().onSwipeLeft();
      hs.instance().onSwipeLeft();

      expect(hs.find(PreviousSite)).toEqual(lastSite);
    });
    it('doesn\'t add the suggested site to history', () => {
      const pS = hs.instance().state.history[0].site.part;

      hs.instance().handleSkip();
      hs.instance().handleSkip();
      hs.instance().handleSkip();

      expect(hs.instance().state.history[0].site.part === pS).toEqual(true);
    });
  });

  describe('History', () => {
    it('should know the previous injection site once confirmed', () => {
      const time = moment();
      hs.instance().handleConfirmation();
      const previousSite = hs.find(PreviousSite);

      expect(previousSite.length).toEqual(1);
      expect(previousSite.props().site).toEqual(injectionsites[0].part);
      expect(previousSite.props().time).toEqual(time);
    });
    it('should update previous injection site once confirmed again', () => {
      hs.instance().handleConfirmation();
      const time = moment();
      hs.instance().handleConfirmation();
      const previousSite = hs.find(PreviousSite);

      expect(previousSite.length).toEqual(1);
      expect(previousSite.props().site).toEqual(injectionsites[1].part);
      expect(previousSite.props().time).toEqual(time);
    });
    // it('should start with a blank history', () => {
    //   const hs = shallow(<hs />);
    //   const text = hs
    //     .find('#previousSite')
    //     .dive()
    //     .find('#site')
    //     .dive()
    //     .text();
    //   expect(text).toEqual('');
    // });
=======
  describe("Skip button", () => {
    it('should call the Next action on press', () => {
      hs.find(GestureRecognizer).simulate('swipeRight')
      const currentSite = hs.find(CurrentSite);
      expect(currentSite.length).toEqual(1);
      expect(mockNextInjSite.mock.calls.length).toBe(1)
      expect(mockSaveInj.mock.calls.length).toBe(0)
    })
>>>>>>> development
  });
});
