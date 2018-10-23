import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import { checkSites } from '../redux/actions/sites';
import injectionsites from '../components/injectionsites'

export class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings'
  };

  onlyUnique(self) {
    let uniqueParts = []
    let uniqueSites = []
    self.forEach((site, index) => {
      if ( !uniqueParts.includes(site.part) ) {
      uniqueParts.push(site.part)
      uniqueSites.push(site)
      }
    })
    return uniqueSites;
  }

  render() {
    return (
      <View>
        {
          this.onlyUnique(this.props.sites).map((cb) => {
          return (
            <CheckBox
              key={cb.part}
              id={cb.part}
              title={cb.part}
              checked={cb.active}
              onPress={() => this.props.checkSites(cb.part, cb.active)}
            />
          )
        })
      }
      </View>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    sites: state.sites
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkSites: (part, previousCheckedStatus) => { dispatch(checkSites(part, previousCheckedStatus)); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
