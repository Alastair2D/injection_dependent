import React from "react";
import { StyleSheet, View, Button, Image } from "react-native";
import moment from "moment";
import CurrentSite from "../components/CurrentSite";
import PreviousSite from "../components/PreviousSite";
import Header from "../components/Header";
import injectionsites from "../components/injectionsites";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: injectionsites,
      history: [
        { site: injectionsites[injectionsites.length - 1], time: moment() }
      ]
    };
  }

  nextSite() {
    // const rotatedSites = this.state.sites.slice(1).concat(this.state.sites[0]);
    this.setState(prevState => ({
      sites: prevState.sites.slice(1).concat(prevState.sites[0])
    }));
  }

  handleConfirmation() {
    // const newHistory = this.state.history.concat({ site: this.state.sites[0], time: moment() });
    this.setState(prevState => ({
      history: prevState.history.concat({
        site: prevState.sites[0],
        time: moment()
      })
    }));
    this.nextSite();
    alert("Confirmed");
  }

  handleSkip() {
    this.nextSite();
    alert("Skipped");
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Header />
          <Image
            source={{ uri: "../images/Abs/leftAbs1.png" }}
            style={styles.image}
          />
          <CurrentSite id="currentSite" site={this.state.sites[0]} />
          <PreviousSite
            id="previousSite"
            site={this.state.history[this.state.history.length - 1].site}
            time={this.state.history[this.state.history.length - 1].time}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={() => {
              this.handleConfirmation();
            }}
            id="confirm"
            title="Confirm"
          />

          <Button
            style={styles.button}
            onPress={() => {
              this.handleSkip();
            }}
            id="skip"
            title="Skip"
          />
        </View>
      </View>
    );
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
