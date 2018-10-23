import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class HistoryTable extends Component {
<<<<<<< HEAD
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Date', 'Site'],
      tableData: [
        ['12/01/1997', 'Left Leg 4'],
        ['13/01/1997', 'Right Leg 1'],
        ['13/01/1997', 'Right Leg 2']
      ]
    };
=======
  organiseData() {
    formattedData = this.props.history.map((injection) => {
      return [injection.time.calendar(), injection.site.part]
    })
    return formattedData.reverse()
>>>>>>> development
  }

  render() {
    const state = this.state;
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
