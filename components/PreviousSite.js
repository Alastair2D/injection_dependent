import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class PreviousSite extends Component {
  render() {
    return (
      <View>
        <Text id="site" style={styles.previous}>
<<<<<<< HEAD
        Previous: { this.props.site },
          {'\n'}
          {this.props.time.calendar()}
=======
        Previous: { this.props.site.side } { this.props.site.part } { this.props.site.quadrant }, {this.props.time.calendar()}
>>>>>>> development
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  previous: {
    fontSize: 25,
    textAlign: 'center',
  },
});

export default PreviousSite;
