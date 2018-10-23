import { shallow } from 'enzyme';
import React from 'react';
import moment from 'moment';
import HistoryTable from '../components/HistoryTable';
import { Table } from 'react-native-table-component';


describe('HistoryTable', () => {
  it('shows a table with Date & Site columns', () => {
    let ht = shallow(<HistoryTable history={[{time: moment(), site: {part: 'left buttock'} }]} />);
    let table = ht.find(Table);
    expect(table.length).toEqual(1);
  })
})
