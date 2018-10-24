import React, { Component } from 'react';
import moment from 'moment';
import { Modal, Text, TouchableHighlight, View, Alert, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { saveInj, resetHistory } from '../redux/actions/history';
import { nextInjSite, resetSites, rotateNSites } from '../redux/actions/sites';

class ModalConfirm extends Component {
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
                Confirm injection site: {this.props.sites[0].side} {this.props.sites[0].part} {this.props.sites[0].quadrant} {'\n'}
              </Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.setModalVisible);
                }}
              >
                <Text style={styles.text}>Cancel {'\n'}</Text>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                  this.props.saveInj({ site: this.props.sites[0], time: moment() });
                }}
              >
                <Text style={styles.text}>Confirm</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text style={styles.text}>Confirm this Site</Text>
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
    marginTop: 22
  },
  text: {
    textAlign: 'center',
    fontSize: 20
  }
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
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalConfirm);
