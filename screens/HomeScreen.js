import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import GestureRecognizer, {
  swipeDirections
} from "react-native-swipe-gestures";

import { connect } from 'react-redux'
import { saveInj, resetHistory } from '../redux/actions/history';
import { nextInjSite, resetSites } from '../redux/actions/sites';

import moment from 'moment';
import CurrentSite from '../components/CurrentSite';
import PreviousSite from '../components/PreviousSite';
import Header from '../components/Header';
import BodyImages from "../components/BodyImages";

// import injectionsites from '../components/injectionsites';

export class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  nextSite() {
    // const rotatedSites = this.state.sites.slice(1).concat(this.state.sites[0]);
    this.props.nextInjSite();
  }

  onSwipeRight(gestureState) {
    this.handleSkip();
  }

  handleConfirmation() {
    // const newHistory = this.state.history.concat({ site: this.state.sites[0], time: moment() });
    this.props.saveInj({ site: this.props.sites[0], time: moment() });
    this.nextSite();
    alert("Confirmed");
  }

  handleSkip() {
    this.nextSite();
  }

  render() {
    const config = {
      velocityThreshold: 0.05,
      directionalOffsetThreshold: 80
    };
    return (
      <View style={styles.container}>
        <View>
          <Header />
          <GestureRecognizer onSwipeRight={state => this.onSwipeRight(state)} config={config}>
            <BodyImages imgNum={this.props.sites[0].imgNum} />
          </GestureRecognizer>
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
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    flexDirection: "row"
  },
  image: {
    width: 110,
    height: 200,
    padding: 10,
    alignSelf: "center"
  }
});

const mapStateToProps = (state, ownProps) => {
  return {
    sites: state.sites,
    history: state.history
  };
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveInj: (inj) => { dispatch(saveInj(inj)); },
        nextInjSite: () => { dispatch(nextInjSite()); }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
