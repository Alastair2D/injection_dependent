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

  confirmButtonClick = () => {
    alert('Confirmed');
  };

  skipButtonClick = () => {
    alert('Skipped');
  };

  handleConfirmation() {
    const newHistory = this.state.history.concat(this.state.sites[0]);
    const rotatedSites = this.state.sites.slice(1).concat(this.state.sites[0]);
    this.setState({
      history: newHistory,
      sites: rotatedSites,
    });
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
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    height: 820
  }
});
