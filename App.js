import React from "react";
import { AsyncStorage, StyleSheet, Text, View, Button } from "react-native";
import CurrentSite from "./src/CurrentSite";
import PreviousSite from "./src/PreviousSite";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: ["Left arm", "Left leg", "Right arm", "Right leg"],
      history: [],
      previous: ""
    }
  }

  confirmButtonClick = () => {
    alert("Confirmed");
  };

  skipButtonClick = () => {
    alert("Skipped");
  };

  handleConfirmation() {
    let newHistory = this.state.history.concat(this.state.sites[0]);
    let rotatedSites = this.state.sites.slice(1).concat(this.state.sites[0]);
    this.setState({
      history: newHistory,
      sites: rotatedSites,
      previous: "random confirmation"
    })
  }

  componentDidMount = () => AsyncStorage.getItem("1").then((value) =>
    this.setState({previous: value}))

  render() {
    AsyncStorage.getItem("1").then((value) =>
      this.setState({previous: value}))
    return (
      <View style={styles.container}>
        <Text id="welcome">Welcome to Injection Dependent</Text>
        <Text id="site">{this.state.sites[0]}</Text>
        <Text id="previousSite">
          Previous site: {this.state.previous}
        </Text>
        <CurrentSite />
        <PreviousSite />

        <Button
          onPress={event => {
            event.preventDefault();
            this.confirmButtonClick();
          }}
          title="Confirm"
        />

        <Button
          onPress={event => {
            event.preventDefault();
            this.skipButtonClick();
          }}
          title="Skip"
        />
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
