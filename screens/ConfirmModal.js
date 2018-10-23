import React, {Component} from 'react';
import moment from 'moment';
import {Modal, Text, TouchableHighlight, View, Alert, StyleSheet} from 'react-native';
import { saveInj, resetHistory } from '../redux/actions/history';
import { nextInjSite, resetSites, rotateNSites } from '../redux/actions/sites';
import { connect } from 'react-redux'

export class ModalConfirm extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible})
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
          }}>
          <View style={styles.container}>
            <View>
              <Text>Injection site: {this.props.sites[0].part} {this.props.sites[0].quadrant}</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  this.props.saveInj({ site: this.props.sites[0], time: moment() });
                }}>
                <Text>Confirm</Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Cancel</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text style={{textAlign: 'center'}}>Click to confirm</Text>
        </TouchableHighlight>
      </View>
    )
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
    marginTop: 0
  },
});

const mapStateToProps = (state, ownProps) => {
  return {
    sites: state.sites,
    history: state.history
  };
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveInj: (inj) => { dispatch(saveInj(inj)); },
        nextInjSite: () => { dispatch(nextInjSite()); },
        rotateNSites: (n) => { dispatch(rotateNSites(n)); }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalConfirm);