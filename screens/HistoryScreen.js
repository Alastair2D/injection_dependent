import React from 'react';
import { ScrollView, StyleSheet, Button, Text } from 'react-native';
import axios from 'axios'
import HistoryTable from '../components/HistoryTable';
import moment from 'moment'

import { connect } from 'react-redux'
import { saveInj, resetHistory, updateSyncStatus } from '../redux/actions/history';

export class HistoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  static navigationOptions = {
    title: 'History'
  };

  saveData() {
    this.props.history.forEach((inj) => {
      if (inj.dbsync === false) {
        axios.post(`http://localhost:9292/injections`, {
          injection: {
            user_id: "1",
            site: JSON.stringify(inj.site),
            time: inj.time.unix() * 1000,
            medtype: "short"
          }
        })
      }
    })
    this.props.updateSyncStatus();
  }

  loadData() {
    self = this
    axios.get(`http://localhost:9292/injections?user_id=${1}`)
    .then(data => {
      for (i in data) {
        data[i].forEach((inj) => {
          self.props.saveInj({site: JSON.parse(inj.site), time: moment.unix(parseInt(inj.time, 10)/1000)})
        })
      }
    })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <HistoryTable history={this.props.history}/>
        <Button
          title={'Load'}
          id={'load'}
          onPress={() => this.loadData()}
        />
        <Button
          title={'Save'}
          id={'save'}
          onPress={() => this.saveData()}
        />
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
    updateSyncStatus: () => { dispatch(updateSyncStatus()); }
    // resetHistory: () => { dispatch(resetHistory()); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen);
