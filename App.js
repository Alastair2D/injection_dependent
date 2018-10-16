import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CurrentSite from "./src/CurrentSite";
import PreviousSite from "./src/PreviousSite";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CurrentSite />;<PreviousSite />;
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
