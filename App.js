import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import moment from 'moment'
import CurrentSite from './src/CurrentSite';
import PreviousSite from './src/PreviousSite';
import injectionsites from './src/injectionsites';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: injectionsites,
      history: [{site: injectionsites[injectionsites.length - 1], time: moment()}]
    };
  }

  nextSite() {
    let rotatedSites = this.state.sites.slice(1).concat(this.state.sites[0]);
    this.setState({
      sites: rotatedSites
    });
  }

  handleConfirmation() {
    let newHistory = this.state.history.concat({site: this.state.sites[0], time: moment()});
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
        <Text id="welcome">Welcome to Injection Dependent</Text>
        <CurrentSite id='currentSite'
          site={ this.state.sites[0] }
        />
        <PreviousSite id='previousSite'
          site={ this.state.history[this.state.history.length - 1].site }
          time={ this.state.history[this.state.history.length - 1].time }
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
