import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CurrentSite from './src/CurrentSite';
import PreviousSite from './src/PreviousSite';
import Header from './src/Header';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: ['Left arm', 'Left leg', 'Right arm', 'Right leg'],
      history: [],
    };
  }

  nextSite() {
    const rotatedSites = this.state.sites.slice(1).concat(this.state.sites[0]);
    this.setState({
      sites: rotatedSites,
    });
  }

  handleConfirmation() {
    const newHistory = this.state.history.concat(this.state.sites[0]);
    this.setState({
      history: newHistory,
    });
    this.nextSite();
    alert('Confirmed');
  }

  handleSkip() {
    this.nextSite();
    alert('Skipped');
  }

  render() {
    return (
      <View style={styles.container}>
      <View />
        <Header />
        <PreviousSite id='previousSite'
          site={this.state.history[this.state.history.length - 1]}
        />
        <CurrentSite id='currentSite'
          site={ this.state.sites[0]}
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
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
