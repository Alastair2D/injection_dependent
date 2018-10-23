import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import injectionsites from './injectionsites';

export default class HistoryTable extends Component {
  organiseData() {
    const formattedData = this.props.history.map((injection) => {
      return [injection.time.calendar(), `${injection.side} ${injection.part} ${injection.quadrant}`];
    })
    return formattedData.reverse()
  }

  render() {
    return (
      <View style={styles.container}>
        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Row
            data={["Date", "Site"]}
            style={styles.head}
            textStyle={styles.text}
          />
          <Rows data={this.organiseData()} textStyle={styles.text} />
        </Table>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});
