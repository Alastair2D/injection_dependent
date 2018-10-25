import React, { Component } from 'react';
import moment from 'moment';
import { Modal, Text, TouchableHighlight, View, Alert, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { saveInj } from '../redux/actions/history';
import { nextInjSite, rotateNSites } from '../redux/actions/sites';

export default class ConfirmModal extends Component {
  state = {
    modalVisible: false,
    pressStatus: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  _onHideUnderlay() {
    this.setState({pressStatus: false }) 
  }
  _onShowUnderlay() {
    this.setState({pressStatus: true})
  }

  render() {
    return (
      <View style={styles.show}>
        <Modal
          animationType="fade"
          presentationStyle="fullScreen"
          transparent={false}
          visible={this.state.modalVisible}
        >
          <View style={styles.container}>
            <View>
              <Text>
                Confirm injection site: {this.props.site.side} {this.props.site.part} {this.props.site.quadrant} {'\n'}
              </Text>
              <TouchableHighlight
                underlayColor='orange'
                activeOpacity={1}
                id={"finalConfirm"}
                style={
                  this.state.pressStatus
                    ? styles.buttonPress
                    : styles.button
                }
                onHideUnderlay={this._onHideUnderlay.bind(this)}
                onShowUnderlay={this._onShowUnderlay.bind(this)}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  this.props.onConfirmation();
                }}
              >
                <Text style={
                  this.state.pressStatus
                    ? styles.welcomePress
                    : styles.welcome
                }
              
                >Confirm</Text>
              </TouchableHighlight>
              <TouchableHighlight
                id={"cancel"}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text style={styles.text}>Cancel</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          id={"firstConfirm"}
          style={{marginTop: 40}}
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text style={styles.text}>Confirm this site</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  show: {
    marginTop: 0,
  },
  text: {
    textAlign: 'center',
    fontSize: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#000066"
 },
 welcomePress: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#ffffff"
 },
 button: {
  borderColor: "#000066",
  borderWidth: 1,
  borderRadius: 10
},
buttonPress: {
  borderColor: "#000066",
  backgroundColor: "#000066",
  borderWidth: 1,
  borderRadius: 10
}
});
