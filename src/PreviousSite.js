import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment'

class PreviousSite extends Component {
  render() {
    return (
      <View>
        <Text id="site" style={styles.previous}>Previous: { this.props.site }, {this.props.time.calendar()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  previous: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default PreviousSite;
