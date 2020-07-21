import React, { Component } from "react";

export default class firstCode extends Component {
  handleInputChange = () => {};

  render() {
    return (
      <Form>
        <Input handleInputChange={this.handleInputChange} />
      </Form>
    );
  }
}

const Input = ({ handleInputChange }) => (
  <Field handleInputChange={handleInputChange} />
);

export default Input;
