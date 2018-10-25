import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class PreviousSite extends Component {
  render() {
    return (
      <View style={{ marginBottom: 10 }}>
        <Text id="site" >
          <Text style={styles.previous}>Previous: </Text> <Text style={styles.site}>{ this.props.site.side } { this.props.site.part } { this.props.site.quadrant }{'\n'}</Text>
          <Text style={styles.previous}>When:      </Text><Text style={styles.site}> {this.props.time.calendar()}</Text> 
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  previous: {
    fontStyle: 'italic',
  },
  site: {
    fontWeight: 'bold',
  },
  timeText: {
   fontStyle: 'italic',
   marginLeft: 30,
   fontWeight: 'bold',
  },
});

export default PreviousSite;
