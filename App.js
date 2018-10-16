import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sites: ["Left arm", "Left leg"]
    }
  }

  handleConfirmation() {
    rotatedSites = this.state.sites.slice(1).concat(this.state.sites[0])
    this.setState({
      sites: rotatedSites
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text id="welcome">Welcome to Injection Dependent</Text>
        <Text id="site">{this.state.sites[0]}</Text>
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
