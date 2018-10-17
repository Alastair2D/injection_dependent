import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import CurrentSite from "./src/CurrentSite";
import PreviousSite from "./src/PreviousSite";
import Header from './src/Header'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: ['Left arm', 'Left leg', 'Right arm', 'Right leg'],
      history: [],
    };
  }

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
    alert("Confirmed")
  }

  handleSkip() {
    this.nextSite();
    alert("Skipped");
  }

  render() {
    return (
      <View style={styles.container}>
      <View />
        <Image source={require('./assets/makers-icon.png')} style={{width: 200, height: 200}}/>
        <Header />
        <Text id="site">{this.state.sites[0]}</Text>
        <Text id="previousSite">
          {this.state.history[this.state.history.length - 1]}
        </Text>
        <PreviousSite />
        <CurrentSite />

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
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    }
});
