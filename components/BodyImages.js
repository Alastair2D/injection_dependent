import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default class BodyImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgPaths: {
        0: require('../images/Thigh/leftThigh1.png'),
        1: require('../images/Thigh/rightThigh1.png'),
        2: require('../images/Hip/leftHip1.png'),
        3: require('../images/Hip/rightHip1.png'),
        4: require('../images/Abs/leftAbs1.png'),
        5: require('../images/Abs/rightAbs1.png'),
        6: require('../images/Arm/leftArm1.png'),
        7: require('../images/Arm/rightArm1.png'),
        8: require('../images/Buttock/leftButtock1.png'),
        9: require('../images/Buttock/rightButtock1.png'),
        10: require('../images/Thigh/leftThigh2.png'),
        11: require('../images/Thigh/rightThigh2.png'),
        12: require('../images/Hip/leftHip2.png'),
        13: require('../images/Hip/rightHip2.png'),
        14: require('../images/Abs/leftAbs2.png'),
        15: require('../images/Abs/rightAbs2.png'),
        16: require('../images/Arm/leftArm2.png'),
        17: require('../images/Arm/rightArm2.png'),
        18: require('../images/Buttock/leftButtock2.png'),
        19: require('../images/Buttock/rightButtock2.png'),
        20: require('../images/Thigh/leftThigh3.png'),
        21: require('../images/Thigh/rightThigh3.png'),
        22: require('../images/Hip/leftHip3.png'),
        23: require('../images/Hip/rightHip3.png'),
        24: require('../images/Abs/leftAbs3.png'),
        25: require('../images/Abs/rightAbs3.png'),
        26: require('../images/Arm/leftArm3.png'),
        27: require('../images/Arm/rightArm3.png'),
        28: require('../images/Buttock/leftButtock3.png'),
        29: require('../images/Buttock/rightButtock3.png'),
        30: require('../images/Thigh/leftThigh4.png'),
        31: require('../images/Thigh/rightThigh4.png'),
        32: require('../images/Hip/leftHip4.png'),
        33: require('../images/Hip/rightHip4.png'),
        34: require('../images/Abs/leftAbs4.png'),
        35: require('../images/Abs/rightAbs4.png'),
        36: require('../images/Arm/leftArm4.png'),
        37: require('../images/Arm/rightArm4.png'),
        38: require('../images/Buttock/leftButtock4.png'),
        39: require('../images/Buttock/rightButtock4.png'),
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
    width: 180,
    height: 280,
    padding: 10,
    alignSelf: 'center'
  }
});
