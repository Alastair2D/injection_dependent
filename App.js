import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CurrentSite from "./src/CurrentSite";
import PreviousSite from "./src/PreviousSite";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sites: ["Left arm", "Left leg", "Right arm", "Right leg"],
      history: []
    }
  }

  handleConfirmation() {
    let newHistory = this.state.history.concat(this.state.sites[0])
    let rotatedSites = this.state.sites.slice(1).concat(this.state.sites[0])
    this.setState({
      history: newHistory,
      sites: rotatedSites
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text id="welcome">Welcome to Injection Dependent</Text>
        <Text id="site">{this.state.sites[0]}</Text>
        <Text id="previousSite">
          {this.state.history[this.state.history.length - 1]}
        </Text>
        <CurrentSite />
        <PreviousSite />
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
