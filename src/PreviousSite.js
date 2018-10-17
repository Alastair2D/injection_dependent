import React, { Component } from 'react';
import { Text, View } from 'react-native';

class PreviousSite extends Component {
  render() {
    return (
      <View>
        <Text id="site" >Previous: { this.props.site }, {this.props.time}</Text>
      </View>
    );
  }
}

export default PreviousSite;
