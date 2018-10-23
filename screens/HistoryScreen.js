import React from 'react';
import { ScrollView, StyleSheet, Button } from 'react-native';
import axios from 'axios'
import HistoryTable from '../components/HistoryTable';

import { connect } from 'react-redux'
import { resetHistory } from '../redux/actions/history';

export class HistoryScreen extends React.Component {
  static navigationOptions = {
    title: 'History'
  };

  saveData() {
    axios.post(`http://localhost:9292/injections`)
  }

  loadData() {
    axios.get(`http://localhost:9292/injections?user_id=${1}`)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <HistoryTable history={this.props.history}/>
        <Button
          title={'Save'}
          id={'save'}
          onPress={this.saveData()}
        />
        <Button
          title={'Load'}
          id={'load'}
          onPress={this.loadData()}
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
    // resetHistory: () => { dispatch(resetHistory()); }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryScreen);
