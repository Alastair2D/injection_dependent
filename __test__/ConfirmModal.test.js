import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import React from 'react';
import { Modal } from 'react-native';
import moment from 'moment';
import ConfirmModal from '../screens/ConfirmModal';

describe('ConfirmModal', () => {
  let cM;
  let store;
  const sitesArray = [{ side: 'Left', part: 'Thigh', quadrant: '1' }, { side: 'Left', part: 'Thigh', quadrant: '2' }, { side: 'Left', part: 'Thigh', quadrant: '3' } ]
  beforeEach(() => {
    store = createMockStore({
      history: [{
        time: moment(),
        site: { part: 'Left Thigh' }
      }]
    });
    cM = shallow(<ConfirmModal store={store} sites={sitesArray} />);
  });
  it('renders site info', () => {
    let cMText = cM.dive(<Modal/>);
    expect(cMText.toEqual('Left Thigh 1'));
  });
})
