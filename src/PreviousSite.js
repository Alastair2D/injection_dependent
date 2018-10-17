import React, { Component } from "react";
import { AsyncStorage, Text, View, Button } from "react-native";

class PreviousSite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: null,
      error: null
    };
    // this.getPrevious = this.getPrevious.bind(this);
  }

  async asyncFunction() {
    try {
      test_var = 'right before async'
      // const value = await AsyncStorage.getItem(this.props.asyncStorageKey);
      self.setState({ data: {foo: 'bar'}, loading: false })
      test_var = "after set state"
    } catch (error) {
      self.setState({ data: {foo: 'reached error', loading: false} });
    }
  }

  getPrevious() {
    var self = this
    self.setState({ data: {foo: 'before the async'}, loading: false})
    var test_var
    test_var = 'before async'
    // this.asyncFunction()
    _retrieveData = async () => {
      try {
        test_var = 'right before async'
        // const value = await AsyncStorage.getItem(this.props.asyncStorageKey);
        self.setState({ data: {foo: 'bar'}, loading: false })
        test_var = "after set state"
      } catch (error) {
        self.setState({ data: {foo: 'reached error', loading: false} });
      }
    }
    // this.setState({ data: {foo: 'outside async'}, loading: false })
    test_var = "after async"
    return test_var
  }

  componentDidMount() {
    // _ = this.getPrevious(this)
  }

  render() {
    // var t_var = this.getPrevious(this)
    return (
      <div>
        {this.state.loading ? 'loading' : this.state.data.foo}
        <Button
          title="Load" id="#loadPrevious"
          onPress={event => {
            event.preventDefault();
            this.getPrevious();
          }}
        />
      </div>
    );
  }
}

export default PreviousSite;
