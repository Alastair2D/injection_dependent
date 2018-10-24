import { shallow } from 'enzyme';
import { createMockStore } from 'redux-test-utils';
import React from 'react';
import { Modal, Text } from 'react-native';
import moment from 'moment';
import ConfirmModal from '../components/ConfirmModal';
import injectionsites from '../components/injectionsites';

describe('ConfirmModal', () => {
  let cM;
  let site = injectionsites[0]

  beforeEach(() => {
    cM = shallow(<ConfirmModal site={site} />);
  });

  it('renders confirm this site button', () => {
    const firstConfirm = cM.find("#firstConfirm");
    expect(firstConfirm.length).toEqual(1);
    const text = firstConfirm
      .dive()
      .find(Text)
      .dive()
      .text();
    expect(text).toEqual('Confirm this site')
  });

  // it('renders site info', () => {
  //   let cMText = cM.dive(<Modal/>);
  //   expect(cMText.toEqual('Left Thigh 1'));
  // });
})
