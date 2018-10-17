import React, { Component } from 'react';
import { Text, View } from 'react-native';

class PreviousSite extends Component {
  render() {
    return (
      <View>
        <Text id="site" >{ this.props.site }</Text>
      </View>
    );
  }
}

export default PreviousSite;
