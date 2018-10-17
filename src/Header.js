import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Header extends Component {
  render() {
    return (
      <View>
        <Text id="welcome" style={styles.header}>Welcome to Injection Dependent</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Header;
