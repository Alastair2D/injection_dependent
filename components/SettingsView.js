import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckBox } from 'react-native-elements';

class SettingsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      // armsChecked: false,
      // abdomenChecked: false,
      // buttocksChecked: false,
      // thighsChecked: false,
    };

    this.check = this.check.bind(this);
  }

  check() {
    this.setState({checked: !this.state.checked});
    // this.setState({armsChecked: !this.state.checked});
    // this.setState({abdomenChecked: !this.state.checked});
    // this.setState({buttocksChecked: !this.state.checked});
    // this.setState({thighsChecked: !this.state.checked});
  }

  render() {
    return (
      <View>
      <Text id='sites'>Sites</Text>
      <CheckBox
        id='legs'
        title='legs'
        onPress={event => {
          this.check()
        }}
        checkedIcon='check-square-o'
        uncheckedIcon='square-o'
        checked={this.state.checked}
        />

      <CheckBox
        id='arms'
        title='arms'
        onPress={event => {
          this.check()}}
        checkedIcon='check-square-o'
        uncheckedIcon='square-o'
        checked={this.state.checked}
      />

      <CheckBox
       id='abdomen'
       title='abdomen'
       onPress={event => {
         this.check()}}
       checkedIcon='check-square-o'
       uncheckedIcon='square-o'
       checked={this.state.checked}
       />

     <CheckBox
       id='buttocks'
       title='buttocks'
       onPress={event => {
         this.check()}}
       checkedIcon='check-square-o'
       uncheckedIcon='square-o'
       checked={this.state.checked}
       />

     <CheckBox
       id='thighs'
       title='thighs'
       onPress={event => {
         this.check()}}
       checkedIcon='check-square-o'
       uncheckedIcon='square-o'
       checked={this.state.checked}
       />
      </View>
    )
  }

};

export default SettingsView;
