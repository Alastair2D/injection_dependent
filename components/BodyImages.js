import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";

export default class BodyImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePaths: [
        "../images/Thigh/leftThigh1.png",
        "../images/Thigh/leftThigh2.png",
        "../images/Thigh/leftThigh3.png",
        "../images/Thigh/leftThigh4.png",
        "../images/Thigh/rightThigh1.png",
        "../images/Thigh/rightThigh2.png",
        "../images/Thigh/rightThigh3.png",
        "../images/Thigh/rightThigh4.png",
        "../images/Hip/leftHip1.png",
        "../images/Hip/leftHip2.png",
        "../images/Hip/leftHip3.png",
        "../images/Hip/leftHip4.png",
        "../images/Hip/rightHip1.png",
        "../images/Hip/rightHip2.png",
        "../images/Hip/rightHip3.png",
        "../images/Hip/rightHip4.png",
        "../images/Hip/leftAbs1.png",
        "../images/Hip/leftAbs2.png",
        "../images/Hip/leftAbs3.png",
        "../images/Hip/leftAbs4.png",
        "../images/Hip/rightAbs1.png",
        "../images/Hip/rightAbs2.png",
        "../images/Hip/rightAbs3.png",
        "../images/Hip/rightAbs4.png",
        "../images/Hip/leftArm1.png",
        "../images/Hip/leftArm2.png",
        "../images/Hip/leftArm3.png",
        "../images/Hip/leftArm4.png",
        "../images/Hip/rightArm1.png",
        "../images/Hip/rightArm2.png",
        "../images/Hip/rightArm3.png",
        "../images/Hip/rightArm4.png",
        "../images/Hip/leftButtock1.png",
        "../images/Hip/leftButtock2.png",
        "../images/Hip/leftButtock3.png",
        "../images/Hip/leftButtock4.png",
        "../images/Hip/rightButtock1.png",
        "../images/Hip/rightButtock2.png",
        "../images/Hip/rightButtock3.png",
        "../images/Hip/rightButtock4.png"
      ]
    };
  }
  render() {
    return (
      <Image
        source={require("../images/Abs/leftAbs1.png")}
        style={styles.image}
      />
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
