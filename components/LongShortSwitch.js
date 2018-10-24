import React, { Component } from 'react';
import { View } from 'react-native';
import { ToggleSwitch } from 'toggle-switch-react-native';

class LongShortSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medType: 'Short',
      switchStatus: true
    };
  }

  flickSwitch = (status) => {
    if (status === true) {
      this.setState({
        medType: 'Short',
        switchStatus: true
      });
    } else {
      this.setState({
        medType: 'Long',
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
