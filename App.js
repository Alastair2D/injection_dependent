import React from "react";
import { AsyncStorage, StyleSheet, Text, View } from "react-native";
import CurrentSite from "./src/CurrentSite";
import PreviousSite from "./src/PreviousSite";

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sites: ["Left arm", "Left leg", "Right arm", "Right leg"],
      history: [],
      previous: {site: ""}
    }
  }

  handleConfirmation() {
    let newHistory = this.state.history.concat(this.state.sites[0])
    let rotatedSites = this.state.sites.slice(1).concat(this.state.sites[0])
    this.setState({
      history: newHistory,
      sites: rotatedSites,
      previous: {site: "random confirmation"}
    })
  }

  render() {
    _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem("1");
        if (value !== null) {
          console.log(value);
          this.setState({ previous: {site: "random string"}})
        }
      } catch (error) {
        console.log(error)
        this.setState({ previous: {site: "random error string"}})
      }
    }
    return (
      <View style={styles.container}>
        <Text id="welcome">Welcome to Injection Dependent</Text>
        <Text id="site">{this.state.sites[0]}</Text>
        <Text id="previousSite">
          Previous site: {this.state.previous.site}
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
