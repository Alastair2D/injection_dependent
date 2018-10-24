import React, { Component } from 'react';
import moment from 'moment';
import { Modal, Text, TouchableHighlight, View, Alert, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { saveInj } from '../redux/actions/history';
import { nextInjSite, rotateNSites } from '../redux/actions/sites';

export default class ConfirmModal extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
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
              <Text>
                Confirm injection site: {this.props.site.side} {this.props.site.part} {this.props.site.quadrant} {'\n'}
              </Text>
              <TouchableHighlight
                id={"finalConfirm"}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  this.props.onConfirmation();
                }}
              >
                <Text style={styles.text}>Confirm</Text>
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
  }
});
