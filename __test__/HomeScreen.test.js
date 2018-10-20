import { shallow } from 'enzyme';
import React from 'react';
import { Button } from 'react-native';
import moment from 'moment';
import timekeeper from 'timekeeper';
import HomeScreen from '../screens/HomeScreen';
import CurrentSite from '../components/CurrentSite';
import PreviousSite from '../components/PreviousSite';
import injectionsites from '../components/injectionsites';
import BodyImages from '../components/BodyImages';

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

  describe('Recommended Site', () => {
    it('should render the text of the suggested injection location', () => {
      const currentSite = hs.find(CurrentSite);
      expect(currentSite.length).toEqual(1);
      expect(currentSite.props().site).toEqual(injectionsites[0]);
    });
  });

  describe('Confirmation', () => {
    it('swipe right to confirm', () => {
      hs.instance().onSwipeRight();
      const currentSite = hs.find(CurrentSite);
      expect(currentSite.length).toEqual(1);
      expect(currentSite.props().site).toEqual(injectionsites[1]);
    })
    it('should change the site after confirmation', () => {
      hs.instance().handleConfirmation();
      const currentSite = hs.find(CurrentSite);
      expect(currentSite.length).toEqual(1);
      expect(currentSite.props().site).toEqual(injectionsites[1]);
    });
    it('should change the site again after pressing Confirm a second time', () => {
      hs.instance().handleConfirmation();
      hs.instance().handleConfirmation();
      const currentSite = hs.find(CurrentSite);
      expect(currentSite.length).toEqual(1);
      expect(currentSite.props().site).toEqual(injectionsites[2]);
    });
  });

  xdescribe('Skipping', () => {
    it('handleSkip', () => {
      hs.instance().handleSkip();
      const currentSite = hs.find(CurrentSite);
      expect(currentSite.length).toEqual(1);
      expect(currentSite.props().site).toEqual(injectionsites[1]);
    });
    it('doesn\'t add the suggested site to history', () => {
      const pS = hs.find(PreviousSite).props().site.part;
      hs.instance().handleSkip();
      hs.instance().handleSkip();
      hs.instance().handleSkip();
      expect(hs.instance().state.history[0].site.part === pS).toEqual(true);
    });
  })

  describe('History', () => {
    it('should know the previous injection site once confirmed', () => {
      time = moment();
      hs.instance().handleConfirmation();
      const previousSite = hs.find(PreviousSite);
      expect(previousSite.length).toEqual(1);
      expect(previousSite.props().site).toEqual(injectionsites[0].part);
      expect(previousSite.props().time).toEqual(time);
    });
    it('should update previous injection site once confirmed again', () => {
      hs.instance().handleConfirmation();
      time = moment();
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
  });
});
