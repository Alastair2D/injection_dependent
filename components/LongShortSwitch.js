import React, { Component } from 'react';
import { View } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

class LongShortSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      insulinType: 'Short',
      switchStatus: true
    };
  }

  // componentDidUpdate() {
  //   return false;
  // }

  flickSwitch = (status) => {
    if (status === true) {
      this.setState({
        insulinType: 'Short',
        switchStatus: true
      });
    } else {
      this.setState({
        insulinType: 'Long',
        switchStatus: false
      });
    }
  }

  render() {
    const tS = <ToggleSwitch
      isOn={this.state.switchStatus}
      onColor='green'
      offColor='red'
      label={this.state.insulinType}
      labelStyle={{ color: 'black', fontWeight: '900' }}
      size='large'
      onToggle={() => this.flickSwitch(!this.state.switchStatus)}
    />
    return (
      <View>
        {tS}
      </View>
    );
  }
}

export default LongShortSwitch;
