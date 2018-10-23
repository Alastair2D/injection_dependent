import React, { Component, PropTypes } from 'react';
import { StyleSheet, View } from 'react-native';
import moment from 'moment';
import CurrentSite from '../components/CurrentSite';
import PreviousSite from '../components/PreviousSite';
import Header from '../components/Header';
import injectionsites from '../components/injectionsites';
import BodyImages from '../components/BodyImages';
import GestureRecognizer, {
  swipeDirections
} from 'react-native-swipe-gestures';

import { connect } from 'react-redux'
import { saveInj, resetHistory } from '../redux/actions/history';
import { nextInjSite, resetSites } from '../redux/actions/sites';

// import injectionsites from '../components/injectionsites';

export class HomeScreen extends React.Component {
  
  nextSite() {
    // const rotatedSites = this.state.sites.slice(1).concat(this.state.sites[0]);
    this.props.nextInjSite();
  }

  onSwipeLeft = () => {
    this.handleSkip();
  }

  onSwipeRight = () => {
    this.handleConfirmation();
  }

  handleConfirmation() {
    // const newHistory = this.state.history.concat({ site: this.state.sites[0], time: moment() });
    this.props.saveInj({ site: this.props.sites[0], time: moment() });
    this.nextSite();
    alert('Confirmed');
  }

  handleSkip() {
    this.nextSite();
  }

  render() {
    const config = {
      velocityThreshold: 0.05,
      directionalOffsetThreshold: 200
    };
    return (
      <View style={styles.container}>
        <View>
          <Header />
          <GestureRecognizer
            onSwipeLeft={state => this.onSwipeLeft(state)}
            onSwipeRight={state => this.onSwipeRight(state)}
            config={config}
          >
            <BodyImages imgNum={this.state.sites[0].imgNum} />
          </GestureRecognizer>
          <CurrentSite id='currentSite' site={this.state.sites[0]} />
          <PreviousSite
            id='previousSite'
            site={this.state.history[this.state.history.length - 1].site.part}
            time={this.state.history[this.state.history.length - 1].time}
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
    justifyContent: 'center'
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  image: {
    width: 110,
    height: 200,
    padding: 10,
    alignSelf: 'center'
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
