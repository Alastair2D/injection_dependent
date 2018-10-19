import React from 'react';
import { Image } from "react-native";


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    return(
      <Image
        source={{ uri: "../images/Abs/leftAbs1.png" }}
        style={styles.image}
      />
    ) 
  }
}


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
    padding: 10
  }
});