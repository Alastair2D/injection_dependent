import { shallow } from "enzyme";
import { Text } from "react-native";
import React from "react";
import moment from 'moment';
import { createMockStore } from "redux-test-utils";
import HistoryScreen from "../screens/HistoryScreen";
import HistoryTable from "../components/HistoryTable";
import { resetHistory } from '../redux/actions/history';

describe("ConnectedHistoryScreen", () => {
  let historyscreen;
  let store
  beforeEach(() => {
    store = createMockStore({
      history: [{
        time: moment(),
        site: {part: "left buttock"}
      }]
    });
    historyscreen = shallow(<HistoryScreen store={store} />);
  });

  it("adds store history to props", () => {
    expect(historyscreen.props().history[0].site.part).toEqual("left buttock")
  });

  it("adds saveInj action to props", () => {
    historyscreen.props().saveInj('test')
    expect(store.getActions()).toEqual([{"item": "test", "type": "history-save-injection"}]);
  })

  it("adds updateSyncStatus action to props", () => {
    historyscreen.props().updateSyncStatus()
    expect(store.getActions()).toEqual([{"type": "history-sync-status"}]);
  })

  it("adds resetHistory action to props", () => {
    homescreen.props().resetHistory()
    expect(store.getActions()).toEqual([{"type": "history-reset-defaults"}]);
  })
});
