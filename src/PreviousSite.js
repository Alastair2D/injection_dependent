import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class PreviousSite extends Component {
  render() {
    return (
      <View>
        <Text id="site" style={styles.previous}>{ this.props.site }</Text>
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
