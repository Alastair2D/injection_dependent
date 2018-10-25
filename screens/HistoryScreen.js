import React from 'react';
import { ScrollView, StyleSheet, Button, Text, TextInput } from 'react-native';
import axios from 'axios'
import HistoryTable from '../components/HistoryTable';
import moment from 'moment'

import { connect } from 'react-redux'
import { saveInj, resetHistory, updateSyncStatus } from '../redux/actions/history';

export class HistoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: 'Enter username here...'
    }
  }

  static navigationOptions = {
    title: 'History'
  };

  prepareLoad() {
    if (this.state.user_id != 'Enter username here...' && this.state.user_id != 'Change me down here') {
      this.saveData()
      this.props.resetHistory()
      this.loadData()
    } else {
      this.setState({ user_id: 'Change me down here' })
    }
  }

  saveData() {
    if (this.state.user_id != 'Enter username here...' && this.state.user_id != 'Change me down here') {
      this.props.history.forEach((inj) => {
        if (inj.dbsync === false) {
          axios.post(`https://guarded-caverns-16437.herokuapp.com/injections`, {
            injection: {
              user_id: this.state.user_id,
              site: JSON.stringify(inj.site),
              time: inj.time.unix() * 1000,
              medtype: inj.medType
            }
          })
        }
      })
      this.props.updateSyncStatus();
    } else {
      this.setState({ user_id: 'Change me down here' })
    }
  }

  loadData() {
    self = this
    axios.get(`https://guarded-caverns-16437.herokuapp.com/injections?user_id=${this.state.user_id}`)
    .then(data => {
      for (i in data) {
        data[i].forEach((inj) => {
          self.props.saveInj({
            site: JSON.parse(inj.site),
            time: moment.unix(parseInt(inj.time, 10)/1000),
            dbsync: true,
            medType: inj.medtype
          })
        })
      }
    })
  }

  render() {
    return (
      <ScrollView style={styles.container}>

        <HistoryTable history={this.props.history} />
          <Button
            title={'Load'}
            id={'load'}
            onPress={ () => {
              this.prepareLoad()
            }}
          />
          <Button
            title={'Save'}
            id={'save'}
            onPress={() => this.saveData()}
          />
        <Text>Username:</Text>
        <TextInput
          name="username"
          id="username"
          placeholder={this.state.user_id}
          onChangeText={ (user_id) => this.setState({ user_id }) }
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
    updateSyncStatus: () => { dispatch(updateSyncStatus()); },
    resetHistory: () => { dispatch(resetHistory()); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen);
