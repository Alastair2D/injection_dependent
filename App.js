import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import CurrentSite from "./src/CurrentSite";
import PreviousSite from "./src/PreviousSite";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: ["Left arm", "Left leg", "Right arm", "Right leg"],
      history: []
    };
  }

  confirmButtonClick = () => {
    this.handleConfirmation();
    alert("Confirmed");
  };

  skipButtonClick = () => {
    alert("Skipped");
  };

  nextSite() {
    let rotatedSites = this.state.sites.slice(1).concat(this.state.sites[0]);
    this.setState({
      sites: rotatedSites
    });
  }

  handleConfirmation() {
    let newHistory = this.state.history.concat(this.state.sites[0]);
    this.setState({
      history: newHistory
    });
    this.nextSite();
  }

  handleSkip() {
    this.nextSite();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text id="welcome">Welcome to Injection Dependent</Text>
        <CurrentSite id='currentSite'
          site={ this.state.sites[0] }
        />
      <PreviousSite id='previousSite'
          site={ this.state.history[this.state.history.length - 1] }
        />

        <Button
          onPress={event => {
            this.handleConfirmation();
          }}
          id="confirm" title="Confirm"
        />

        <Button
          onPress={event => {
            this.handleSkip();
          }}
          id="skip" title="Skip"
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
