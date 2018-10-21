import { shallow } from 'enzyme';
import React from 'react';
import HistoryScreen from '../screens/HistoryScreen';
import HistoryTable from '../components/HistoryTable';

describe('HistoryScreen', () => {
  let historyScreen;
  beforeEach(() => {
    historyScreen = shallow(<HistoryScreen />);
  });

  describe('Components', () => {
    it('renders a table component', () => {
      expect(historyScreen.containsMatchingElement(<HistoryTable />)).toEqual(true);
    });
  });
});
