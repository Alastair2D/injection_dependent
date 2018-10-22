import { shallow } from "enzyme";
import { Text } from "react-native";
import React from "react";
import moment from 'moment';
import { createMockStore } from "redux-test-utils";
import HomeScreen from "../screens/HomeScreen";
import { saveInj } from '../redux/actions/history';
import { nextInjSite } from '../redux/actions/sites';

describe("ConnectedHomeScreen", () => {
  let homescreen;
  let store
  beforeEach(() => {
    store = createMockStore({
      sites: [{part: 'Thigh'}, {part: 'Buttock'}],
      history: [{
        time: moment(),
        site: {part: "Buttock"}
      }]
    });
    homescreen = shallow(<HomeScreen store={store} />);
  });

  it("adds store history to props", () => {
    expect(homescreen.props().history[0].site.part).toEqual("Buttock")
  });
  it("adds store sites to props", () => {
    expect(homescreen.props().sites[0].part).toEqual("Thigh")
  });

  it("adds saveInj action to props", () => {
    homescreen.props().saveInj('test')
    expect(store.getActions()).toEqual([{"item": "test", "type": "history-save-injection"}]);
  })

  it("adds saveInj action to props", () => {
    homescreen.props().nextInjSite()
    expect(store.getActions()).toEqual([{"type": "sites-next-injection-site"}]);
  })
});
