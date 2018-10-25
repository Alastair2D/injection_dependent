import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class PreviousSite extends Component {
  render() {
    return (
      <View>
        <Text id="site" >
          <Text style={styles.previous}>Previous: </Text> { this.props.site.side } { this.props.site.part } { this.props.site.quadrant }{'\n'}
          <Text style={styles.time}>{this.props.time.calendar()}</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  previous: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 10,
    fontStyle: 'italic',
  },
  time: {
   textAlign: 'center',
  }
});

export default PreviousSite;
