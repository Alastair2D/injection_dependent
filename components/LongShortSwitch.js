import React, { Component } from 'react';
import { View } from 'react-native';
import { ToggleSwitch } from 'toggle-switch-react-native';

class LongShortSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchStatus: 'Short'
    };
  }

  flickSwitch = () => {
    if (this.state.switchStatus === 'Short') {
      this.setState({
        switchStatus: 'Long'
      });
    } else {
      this.setState({
        switchStatus: 'Short'
      });
    }
  }

  render() {
    let tS = <ToggleSwitch
      isOn={true}
      onColor='green'
      offColor='red'
      label='Example label'
      labelStyle={{color: 'black', fontWeight: '900'}}
      size='large'
      onToggle={ this.flickSwitch() }
    />
    return(
      <View>
        {tS};
      </View>
    );
  }
}

export default LongShortSwitch;
