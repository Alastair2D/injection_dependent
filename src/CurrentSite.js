import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class CurrentSite extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text id="site" >{ this.props.site }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  current: {
    fontSize: 40,
  }
})

export default CurrentSite;
