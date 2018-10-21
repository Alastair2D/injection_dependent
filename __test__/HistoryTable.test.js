import { shallow } from 'enzyme';
import React from 'react';
import HistoryTable from '../components/HistoryTable';


describe('HistoryTable', () => {
  it('shows a table with Date & Site columns', () => {
    const ht = shallow(<HistoryTable />);
    expect(ht.instance().state.tableHead).toEqual(['Date', 'Site']);
  });
});
