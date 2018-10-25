import React, { Component } from 'react';
import moment from 'moment';
import { Modal, Text, TouchableHighlight, View, Alert, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { saveInj } from '../redux/actions/history';
import { nextInjSite, rotateNSites } from '../redux/actions/sites';

export default class ConfirmModal extends Component {
  state = {
    modalVisible: false,
    confirmPressStatus: true,
    cancelPressStatus: true,
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
          onRequestClose={() => {
            // this is for Android
            Alert.alert('Modal has been closed.');
          }}
        >
          <View style={styles.container}>
            <View>
              <Text style={{fontSize: 20, fontStyle: 'italic'}}>
                Confirm injection site:{'\n'}
              </Text>
              <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 20 }}>
                {this.props.site.side} {this.props.site.part} {this.props.site.quadrant} {'\n'}
              </Text>
              <TouchableHighlight
                underlayColor={'orange'}
                activeOpacity={1}
                id={"finalConfirm"}
                style={
                  this.state.confirmPressStatus
                    ? styles.buttonPress
                    : styles.button
                }
                onHideUnderlay={() => this._onHideUnderlay()}
                onShowUnderlay={() => this._onShowUnderlay()}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  this.props.onConfirmation();
                }}
              >
                <Text style={
                  this.state.confirmPressStatus
                    ? styles.welcomePress
                    : styles.welcome
                }
              
                >Confirm</Text>
              </TouchableHighlight>
              <Text>
                {'\n'}
              </Text>
              <TouchableHighlight
                underlayColor={'#000066'}
                activeOpacity={1}
                id={"cancel"}
                style={
                  this.state.cancelPressStatus
                    ? styles.button
                    : styles.buttonPress
                }
                onHideUnderlay={() => this._onShowUnderlay()}
                onShowUnderlay={() => this._onHideUnderlay()}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text style={
                  this.state.cancelPressStatus
                    ? styles.welcome
                    : styles.welcomePress
               }>
                  Cancel
                </Text>
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
    color: "#ffffff"
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
    borderRadius: 10,
  },
  buttonPress: {
    borderColor: "#000066",
    backgroundColor: "#000066",
    borderWidth: 1,
    borderRadius: 10,
  }
});
