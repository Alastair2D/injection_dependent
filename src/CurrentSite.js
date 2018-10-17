import React, { Component } from "react";
import { Text, View } from "react-native";

class CurrentSite extends Component {

  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <View>
        <Text id={this.props.textID} > { this.props.site } </Text>
      </View>
    );
  }
}

export default CurrentSite;
