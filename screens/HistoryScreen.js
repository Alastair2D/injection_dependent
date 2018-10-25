import React from 'react';
import { ScrollView, StyleSheet, Button, Text, TextInput } from 'react-native';
import axios from 'axios'
import HistoryTable from '../components/HistoryTable';
import moment from 'moment'

import { connect } from 'react-redux'
import { saveInj, resetHistory, updateSyncStatus } from '../redux/actions/history';

export class HistoryScreen extends React.Component {


  static navigationOptions = {
    title: 'History'
  };


  render() {
    return (
      <ScrollView style={styles.container}>

        <HistoryTable history={this.props.history} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff'
  }
});


const mapStateToProps = (state, ownProps) => {
  return {
    history: state.history
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveInj: (inj) => { dispatch(saveInj(inj)); },
    updateSyncStatus: () => { dispatch(updateSyncStatus()); },
    resetHistory: () => { dispatch(resetHistory()); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen);
