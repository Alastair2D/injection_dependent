import { shallow } from "enzyme";
import { Text } from "react-native";
import React from "react";
import HistoryScreen from "../screens/HistoryScreen";
import HistoryTable from "../components/HistoryTable";
import { createMockStore } from "redux-test-utils";
import moment from 'moment';

describe("HistoryScreen", () => {
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

  describe("Components", () => {
    it("renders a table component", () => {
      expect(historyscreen.props().history[0].site.part).toEqual("left buttock")
    });
  });
});
