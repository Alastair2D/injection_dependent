import { shallow } from "enzyme";
import { Text } from "react-native";
import React from "react";
import { HistoryScreen } from "../screens/HistoryScreen";
import HistoryTable from "../components/HistoryTable";

describe("HistoryScreen", () => {
  let historyscreen;
  beforeEach(() => {
    historyScreen = shallow(<HistoryScreen />);
  });

  describe('Components', () => {
    it('renders a table component', () => {
      expect(historyScreen.containsMatchingElement(<HistoryTable />)).toEqual(true);
    });
  });
});
