import { shallow } from "enzyme";
import { Text, Button, TextInput } from "react-native";
import React from "react";
import { HistoryScreen } from "../screens/HistoryScreen";
import HistoryTable from "../components/HistoryTable";
import mockAxios from "../__mocks__/axios"

describe("HistoryScreen", () => {
  let historyScreen;
  beforeEach(() => {
    historyScreen = shallow(<HistoryScreen history={'SomeMockHistory'} />);
  });

  describe('HistoryTable', () => {
    it('renders a table component', () => {
      expect(historyScreen.containsMatchingElement(<HistoryTable />)).toEqual(true);
    });
    it('passes the Table the history data', () => {
      let table = historyScreen.find(HistoryTable)
      expect(table.props().history).toEqual('SomeMockHistory')
    })
  });

  describe('Username', () => {
    it('should have a text label', () => {
      expect(historyScreen.find(Text).dive().text()).toEqual('Username:')
    })

    it('should be able to enter user name in a text box', () => {
      userInput = historyScreen.find(TextInput)
      userInput.simulate('changeText', 'Bob')
      expect(historyScreen.state().user_id).toEqual('Bob')
    })
  })

  describe('DB save and load', () => {
    beforeEach(() => {
      let axios = mockAxios;
      jest.setMock("axios", axios);
    })
    it('saveData calls axios post', () => {
      historyScreen.find('#save').simulate('press')
      expect(mockAxios.post).toHaveBeenCalledWith(
        'https://guarded-caverns-16437.herokuapp.com/injections'
      )
    })
    it('loadData calls axios get', () => {
      historyScreen.find('#load').simulate('press')
      expect(mockAxios.get).toHaveBeenCalledWith(
        'https://guarded-caverns-16437.herokuapp.com/injections?user_id=1'
      )
    })
  });
});
