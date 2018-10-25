import { shallow } from 'enzyme';
import React from 'react';
import { Modal, Text, TouchableHighlight, View, Alert } from 'react-native';
import moment from 'moment';
import ConfirmModal from '../components/ConfirmModal';
import injectionsites from '../components/injectionsites';

describe('ConfirmModal', () => {
  let cM;
  let site = injectionsites[0];
  let mockHandleConfirmation;
  let mockAlert;

  beforeEach(() => {
    mockHandleConfirmation = jest.fn();
    cM = shallow(<ConfirmModal site={site}
      onConfirmation={mockHandleConfirmation} />);;
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

  describe('cancel and finalConfirm', () => {
    beforeEach(() => {
      cM.find("#firstConfirm").simulate('press');
    });

    it('modal visibility is true after first confirm', () => {
      expect(cM.state().modalVisible).toEqual(true);
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

    it('sets Modal visible', () => {
      let cancel = cM.find("#cancel");
      cancel.simulate('press');
      expect(cM.state().modalVisible).toEqual(false)
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
      expect(finalConfirm.length).toEqual(1);
      expect(mockHandleConfirmation.mock.calls.length).toBe(1);
    });
  })

  describe('Modal', () => {
    it('throws an Alert on Android devices when closed', () => {
      Alert.alert = jest.fn();
      modal = cM.find(Modal)
      // expect(modal.props().onRequestClose).toEqual(A)
      modal.simulate('requestClose')
      expect(Alert.alert).toHaveBeenCalledWith('Modal has been closed.')
    });
  });

  describe('clicking to change style', () => {
    it('changes confirmPressStatus when clicked', () => {
      cM.find('#finalConfirm').simulate('press');
      expect(cM.state().confirmPressStatus).toEqual(true);
    });
  });

  describe('state', () => {
    it('is a method to return the state', () => {
      const returnedState = cM.state();
      expect(returnedState).toEqual({
        modalVisible: false,
        confirmPressStatus: true,
        cancelPressStatus: true,
      });
    });
  });
});
