import { shallow } from 'enzyme';
import React from 'react';
import { SettingsScreen } from '../screens/SettingsScreen';
import { CheckBox } from 'react-native-elements';
import injectionsites from "../components/injectionsites";

describe('SettingsScreen', () => {
  let app
  let mockCheckSites

  beforeEach(() => {
    mockCheckSites = jest.fn();
    app = shallow(<SettingsScreen
      checkSites={mockCheckSites}
      sites={injectionsites}
      />)
  })

  it('checks the existence of a checkbox', () => {
    let checkbox = app.find("#Thigh")
    expect(checkbox.length).toEqual(1);
    expect(checkbox.props().checked).toEqual(true);
  });

  it('changes the state for arms checkbox', () => {
    let checkbox = app.find("#Arm");
    checkbox.simulate('press');
    checkbox = app.find("#Arm");
    expect(checkbox.length).toEqual(1);
    expect(mockCheckSites.mock.calls.length).toBe(1);
  });
});
