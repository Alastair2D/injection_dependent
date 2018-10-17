import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CurrentSite extends Component {
  render() {
    return (
      <View>
        <Text style={styles.previous}>Upper Arm Right</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  previous: {
    fontSize: 20,
  }
});

export default CurrentSite;
