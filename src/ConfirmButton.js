import React, { Component } from "react";
import { Button } from "react-native";

class ConfirmButton extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { onSubmit } = this.props;
    onSubmit();
  }

  render() {
    return <Button onPress={this.handleSubmit} title="Confirm" />;
  }
}

export default ConfirmButton;
