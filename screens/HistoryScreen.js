import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import CurrentSite from "../components/CurrentSite";

export default class HistoryScreen extends React.Component {
  static navigationOptions = {
    title: "History"
  };

  constructor(props) {
    super(props);
    this.state = {
      exampleData: ['{site: Right Arm, time: 9:47 }', '{site: Left Leg, time: 10:47 }' ],

    };  
  }


  render() {
    return (
      <ScrollView style={styles.container}>

      <CurrentSite />
        <Text> {this.state.exampleData} 
        </Text>   
      
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
