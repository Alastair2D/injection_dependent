import { shallow } from 'enzyme';
import React from 'react';
import { CheckBox } from 'react-native-elements';
import SettingsScreen from '../screens/SettingsScreen';
import { createMockStore } from 'redux-test-utils';

describe('ConnectedSettingsScreen', () => {
  let settingsScreen
  let store

  beforeEach(() => {
    store = createMockStore({
      sites: [{part: 'Thigh', active: true}, {part: 'Leg', active: false}]
    })
    settingsScreen = shallow(<SettingsScreen store={store} />);
  });

  it('adds checkSites action to props', () => {
    settingsScreen.props().checkSites('Buttock', true)
    expect(store.getActions()).toEqual([{'part': 'Buttock', 'previousCheckedStatus': true, 'type': 'sites-checked'}]);
  })

});
