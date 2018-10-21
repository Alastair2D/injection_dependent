import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

class SettingsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxes: [{
        id: 'legs',
        title: 'legs',
        checked: false,
      }, {
        id: 'arms',
        title: 'arms',
        checked: false,
      }, {
        id: 'abdomen',
        title: 'abdomen',
        checked: false,
      }, {
        id: 'buttocks',
        title: 'buttocks',
        checked: false,
      }, {
        id: 'thighs',
        title: 'thighs',
        checked: false,
      }]
    };
  }

  check(id) {
    const changedCheckbox = this.state.checkboxes.find((cb) => cb.id === id);
    changedCheckbox.checked = !changedCheckbox.checked;
    const checkboxes = Object.assign({}, this.state.checkboxes, changedCheckbox);
    this.setState({ checkboxes });
  }

  render() {
    return (
      this.state.checkboxes.map((cb) => {
        return (
          <CheckBox
            key={cb.id}
            id={cb.id}
            title={cb.title}
            checked={cb.checked}
            onPress={() => this.check(cb.id)}
          />
        )
      })
    )
  }
};

export default SettingsView;
