import { shallow } from "enzyme";
import { Text, Button } from "react-native";
import React from "react";
import { HistoryScreen } from "../screens/HistoryScreen";
import HistoryTable from "../components/HistoryTable";
import mockAxios from "../__mocks__/axios"

describe("HistoryScreen", () => {
  let historyScreen;
  beforeEach(() => {
    historyScreen = shallow(<HistoryScreen />);
  });

  describe('Components', () => {
    it('renders a table component', () => {
      expect(historyScreen.containsMatchingElement(<HistoryTable />)).toEqual(true);
    });
  });

  describe('DB save and load', () => {
    // it('renders a save button', () => {
    //   let axios = jest.fn()
    //   historyScreen.find('#save').simulate('press')
    //   expect(axios.post()).toHaveBeenCalledWith('http://localhost:9292/injections')
    // })
    it('renders a load button', () => {
      let mockAxios = { get: jest.fn() }
      historyScreen.find('#load').simulate('press')
      expect(mockAxios.get).toHaveBeenCalledTimes(1);
      expect(mockAxios.get).toHaveBeenCalledWith('http://localhost:9292/injections?user_id=1')
    })
  });
});
