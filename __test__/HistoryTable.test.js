import { shallow } from 'enzyme';
import React from 'react';
import moment from 'moment';
import HistoryTable from '../components/HistoryTable';
import { Table } from 'react-native-table-component';
import DefaultFirstInj from '../components/defaultFirstInj';


describe('HistoryTable', () => {
  it('shows a table with Date & Site columns', () => {
    console.log(history);
    let ht = shallow(<HistoryTable history={[new DefaultFirstInj().defaultFirstInj]} />);
    let table = ht.find(Table);
    expect(table.length).toEqual(1);
  })
})
