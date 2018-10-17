import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CurrentSite extends Component {
  render() {
    return (
      <View>
        <Text style={styles.current}>Upper Arm Left</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  current: {
    fontSize: 40,
  }
})

export default CurrentSite;
