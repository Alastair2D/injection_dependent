import { shallow } from "enzyme";
import { Text } from "react-native";
import React from "react";
import HistoryScreen from "../screens/HistoryScreen";
import HistoryTable from "../components/HistoryTable";

describe("HistoryScreen", () => {
  beforeEach(() => {
    historyscreen = shallow(<HistoryScreen />);
  });

  describe("Components", () => {
    it("renders a table component", () => {
      expect(historyscreen.containsMatchingElement(<HistoryTable />)).toEqual(
        true
      );
    });
  });
});
