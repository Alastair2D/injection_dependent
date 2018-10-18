import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CurrentSite extends Component {
  render() {
    return (
      <View>
        <Text id="site" style={styles.current}>{ this.props.site }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  current: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default CurrentSite;
