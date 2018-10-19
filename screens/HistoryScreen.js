import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import CurrentSite from "../components/CurrentSite";

export default class HistoryScreen extends React.Component {
  static navigationOptions = {
    title: "History"
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={styles.container}>

      <CurrentSite />
      
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
