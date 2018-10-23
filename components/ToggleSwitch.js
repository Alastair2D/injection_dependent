import React, { Component } from 'react'
import Switch from "react-switch";
import { View, StyleSheet } from 'react-native'


class ToggleSwitch extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <label htmlFor="normal-switch">
        <span>Switch with default style</span>
        <Switch
          onChange={this.handleChange}
          checked={this.state.checked}
          id="normal-switch"
        />
      </label>
    );
  }
}

export default ToggleSwitch