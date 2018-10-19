import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Button } from 'react-native';

import { connect } from 'react-redux'
import { saveInj, nextInjSite, resetDefaults } from '../redux/actions/tasks';

import moment from 'moment';
import CurrentSite from '../components/CurrentSite';
import PreviousSite from '../components/PreviousSite';
import Header from '../components/Header';
// import injectionsites from '../components/injectionsites';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  nextSite() {
    // const rotatedSites = this.state.sites.slice(1).concat(this.state.sites[0]);
    this.props.nextInjSite();
  }

  handleConfirmation() {
    // const newHistory = this.state.history.concat({ site: this.state.sites[0], time: moment() });
    this.props.saveInj({ site: this.props.sites[0], time: moment() });
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
            site={this.props.sites[0]}
          />
          <PreviousSite
            id="previousSite"
            site={this.props.history[this.props.history.length - 1].site}
            time={this.props.history[this.props.history.length - 1].time}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={() => {
              this.handleConfirmation();
            }}
            id="confirm"
            title="Confirm"
          />

          <Button
            style={styles.button}
            onPress={() => {
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

// this.state = {
//   sites: injectionsites,
//   history: [{ site: injectionsites[injectionsites.length - 1], time: moment() }],
// };

// HomeScreen.propTypes = {
//     // sites: PropTypes.arrayOf(PropTypes.strings).isRequired,
//     saveInj: PropTypes.func.isRequired,
//     nextInjSite: PropTypes.func.isRequired
// };

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

const mapStateToProps = (state, ownProps) => {
  return {
    sites: state.tasks.sites,
    history: state.tasks.history
  };
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveInj: (inj) => { dispatch(saveInj(inj)); },
        nextInjSite: () => { dispatch(nextInjSite()); },
        resetDefaults: () => { dispatch(resetDefaults()); },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
