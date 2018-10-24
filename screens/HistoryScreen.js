import React from 'react';
import { ScrollView, StyleSheet, Button, Text } from 'react-native';
import axios from 'axios'
import HistoryTable from '../components/HistoryTable';
import moment from 'moment'

import { connect } from 'react-redux'
import { saveInj, resetHistory } from '../redux/actions/history';

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
    axios.post(`http://localhost:9292/injections`, {
      injection: {
        user_id: "1",
        site: JSON.stringify(this.props.history[0].site),
        time: this.props.history[0].time.unix() * 1000,
        medtype: "short"
      }
    })
  }

  loadData() {
    self = this
    axios.get(`http://localhost:9292/injections?user_id=${1}`)
    .then(data => {
      for (i in data) {
        data[i].forEach((inj) => {
          // self.setState({ time: moment.unix(parseInt(inj.time, 10)/1000).calendar() })
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
    saveInj: (inj) => { dispatch(saveInj(inj)); }
    // resetHistory: () => { dispatch(resetHistory()); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen);
