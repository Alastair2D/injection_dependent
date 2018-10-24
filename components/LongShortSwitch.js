import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import ToggleSwitch from 'toggle-switch-react-native';

class LongShortSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medType: 'Short',
      switchStatus: false
    };
  }

  flickSwitch = (status) => {
    if (status === true) {
      this.setState({
        medType: 'Long',
        switchStatus: true
      });
    } else {
      this.setState({
        medType: 'Short',
        switchStatus: false
      });
    }
  }

  render() {
    const tS = <ToggleSwitch
      isOn={this.state.switchStatus}
      onColor='black'
      offColor='black'
      label={this.state.medType}
      labelStyle={{ color: 'black', fontWeight: '900' }}
      size='large'
      onToggle={() => this.flickSwitch(!this.state.switchStatus)}
    />
    return (
      <View style={styles.container}> 
        {tS}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center'
  }
});



export default LongShortSwitch;
