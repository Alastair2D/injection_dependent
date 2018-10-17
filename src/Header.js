import React, { Component } from "react";
import { Text, View, Image, StyleSheet } from "react-native";

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text id="welcome" style={styles.header}>Welcome to Injection Dependent</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 5
  }
});

export default Header;
