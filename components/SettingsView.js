import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

class SettingsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      legsChecked: false,
      armsChecked: false,
      abdomenChecked: false,
      buttocksChecked: false,
      thighsChecked: false,
    };

    this.check = this.check.bind(this);
  }

  check() {
    this.setState({legsChecked: !this.state.checked});
    this.setState({armsChecked: !this.state.checked});
  }

  render() {
    return (
      <View>
      <Text id="sites">Sites</Text>
      <CheckBox
        id="legs"
        title="legs"
        onPress={event => {
          this.check()}}
        legsChecked={this.state.legsChecked}
        />

      <CheckBox
        id="arms"
        title="arms"
        onPress={event => {
          this.check()}}
        armsChecked={this.state.armsChecked}
      />
      </View>
    )
  }

};

export default SettingsView;
