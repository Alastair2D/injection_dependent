import React, { Component } from 'react';
import { Text, View } from 'react-native';
import moment from 'moment'

class PreviousSite extends Component {
  render() {
    return (
      <View>
        <Text id="site" >Previous: { this.props.site }, {this.props.time.calendar()}</Text>
      </View>
    );
  }
}

export default PreviousSite;
