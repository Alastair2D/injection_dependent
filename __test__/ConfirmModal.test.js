import { shallow } from 'enzyme';
import React from 'react';
import { Modal, Text } from 'react-native';
import moment from 'moment';
import ConfirmModal from '../components/ConfirmModal';
import injectionsites from '../components/injectionsites';

describe('ConfirmModal', () => {
  let cM;
  let site = injectionsites[0];
  let mockHandleConfirmation;

  beforeEach(() => {
    mockHandleConfirmation = jest.fn();
    cM = shallow(<ConfirmModal site={site} onConfirmation={mockHandleConfirmation} />);
  });

  it('renders confirm this site button', () => {
    const firstConfirm = cM.find("#firstConfirm");
    expect(firstConfirm.length).toEqual(1);
    const text = firstConfirm
      .dive()
      .find(Text)
      .dive()
      .text();
    expect(text).toEqual('Confirm this site');
  });

  it('renders cancel button', () => {
    const cancel = cM.find("#cancel");
    expect(cancel.length).toEqual(1);
    const text = cancel
      .dive()
      .find(Text)
      .dive()
      .text();
    expect(text).toEqual('Cancel');
  });

  it('renders confirm button', () => {
    const finalConfirm = cM.find("#finalConfirm");
    expect(finalConfirm.length).toEqual(1);
    const text = finalConfirm
      .dive()
      .find(Text)
      .dive()
      .text();
    expect(text).toEqual('Confirm');
  })

  it('changes the state of modalVisible', () => {
    let finalConfirm = cM.find("#finalConfirm");
    finalConfirm.simulate('press');
    finalConfirm = cM.find("#finalConfirm");
    expect(finalConfirm.length).toEqual(1);
    expect(mockHandleConfirmation.mock.calls.length).toBe(1)
  });
})
