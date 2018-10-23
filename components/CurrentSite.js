import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ModalConfirm from '../screens/ConfirmModal';

class CurrentSite extends Component {
  render() {
    return (
      <View>
        <Text id="site" style={styles.current}>
          { this.props.site.side } { this.props.site.part } { this.props.site.quadrant }
        </Text>
        <ModalConfirm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  current: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default CurrentSite;
