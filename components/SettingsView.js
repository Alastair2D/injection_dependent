import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import injectionsites from './injectionsites'

class SettingsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: injectionsites,
    };
  }

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

  check(title, checked) {
    let injsitesNew = this.state.sites.map((site) => {
      if (site.part === title) {
        site.active = !checked
      }
      return site
    })
    this.setState({
      sites: injsitesNew
    })
  }

  render() {
    return (
      this.onlyUnique(this.state.sites).map((cb) => {
        return (
          <CheckBox
            key={cb.part}
            id={cb.part}
            title={cb.part}
            checked={cb.active}
            onPress={() => this.check(cb.part, cb.active)}
          />
        )
      })
    )
  }
};

export default SettingsView;
