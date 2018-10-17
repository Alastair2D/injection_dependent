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
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    width: 300
  },
  header: {
    fontSize: 30,
    textAlign: 'center'
  }
});

export default Header;
