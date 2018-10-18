import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import moment from 'moment';
import CurrentSite from './src/CurrentSite';
import PreviousSite from './src/PreviousSite';
import Header from './src/Header';
import injectionsites from './src/injectionsites';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: injectionsites,
      history: [{ site: injectionsites[injectionsites.length - 1], time: moment() }],
    };
  }

  nextSite() {
    const rotatedSites = this.state.sites.slice(1).concat(this.state.sites[0]);
    this.setState({
      sites: rotatedSites,
    });
  }

  handleConfirmation() {
    const newHistory = this.state.history.concat({ site: this.state.sites[0], time: moment() });
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
        <View>
          <Header />
          <CurrentSite
            id="currentSite"
            site={this.state.sites[0]}
          />
          <PreviousSite
            id="previousSite"
            site={this.state.history[this.state.history.length - 1].site}
            time={this.state.history[this.state.history.length - 1].time}
          />
        </View>

        <View
          style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={event => {
              this.handleConfirmation();
            }}
            id="confirm"
            title="Confirm"
          />

          <Button
            style={styles.button}
            onPress={event => {
              this.handleSkip();
            }}
            id="skip"
            title="Skip"
          />
        </View>
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
  buttonContainer: {
    flexDirection: 'row',
  },
});
