import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    state = {
      sites: ["Left arm", "Left leg"]
    }
  }

  handleConfirmation() {
    rotatedSites =
    this.setState({
      sites: rotatedSites
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text id="welcome">Welcome to Injection Dependent</Text>
        <Text id="site">Left arm</Text>
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
