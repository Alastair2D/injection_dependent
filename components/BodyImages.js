import React, { Component } from "react";
import { Image, StyleSheet, View, Text } from "react-native";

export default class BodyImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgPaths: {
        0: require("../images/Thigh/leftThigh1.png"),
        1: require("../images/Thigh/leftThigh2.png"),
        2: require("../images/Thigh/leftThigh3.png"),
        3: require("../images/Thigh/leftThigh4.png"),
        4: require("../images/Thigh/rightThigh1.png"),
        5: require("../images/Thigh/rightThigh2.png"),
        6: require("../images/Thigh/rightThigh3.png"),
        7: require("../images/Thigh/rightThigh4.png"),
        8: require("../images/Hip/leftHip1.png"),
        9: require("../images/Hip/leftHip2.png"),
        10: require("../images/Hip/leftHip3.png"),
        11: require("../images/Hip/leftHip4.png"),
        12: require("../images/Hip/rightHip1.png"),
        13: require("../images/Hip/rightHip2.png"),
        14: require("../images/Hip/rightHip3.png"),
        15: require("../images/Hip/rightHip4.png"),
        16: require("../images/Abs/leftAbs1.png"),
        17: require("../images/Abs/leftAbs2.png"),
        18: require("../images/Abs/leftAbs3.png"),
        19: require("../images/Abs/leftAbs4.png"),
        20: require("../images/Abs/rightAbs1.png"),
        21: require("../images/Abs/rightAbs2.png"),
        22: require("../images/Abs/rightAbs3.png"),
        23: require("../images/Abs/rightAbs4.png"),
        24: require("../images/Arm/leftArm1.png"),
        25: require("../images/Arm/leftArm2.png"),
        26: require("../images/Arm/leftArm3.png"),
        27: require("../images/Arm/leftArm4.png"),
        28: require("../images/Arm/rightArm1.png"),
        29: require("../images/Arm/rightArm2.png"),
        30: require("../images/Arm/rightArm3.png"),
        31: require("../images/Arm/rightArm4.png"),
        32: require("../images/Buttock/leftButtock1.png"),
        33: require("../images/Buttock/leftButtock2.png"),
        34: require("../images/Buttock/leftButtock3.png"),
        35: require("../images/Buttock/leftButtock4.png"),
        36: require("../images/Buttock/rightButtock1.png"),
        37: require("../images/Buttock/rightButtock2.png"),
        38: require("../images/Buttock/rightButtock3.png"),
        39: require("../images/Buttock/rightButtock4.png")
      }
    };
  }

  render() {
    return (
      <View>
        <Image
          style={styles.image}
          source={this.state.imgPaths[this.props.imgNum]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 200,
    padding: 10,
    alignSelf: "center"
  }
});
