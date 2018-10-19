import { shallow } from "enzyme";
import { Text } from "react-native";
import React from "react";
import HistoryScreen from "../screens/HistoryScreen";

import CurrentSite from "../components/CurrentSite";

describe("HistoryScreen", () => {
  beforeEach(() => {
    historyscreen = shallow(<HistoryScreen />);
  });

  xdescribe("Components", () => {
    it("renders a text component", () => {
      expect(historyscreen.containsMatchingElement(<Text />).toEqual(true));
    });
  });


});
