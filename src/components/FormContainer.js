import React, { Component } from 'react';
import Input from './Input';

class FormContainer extends Component {
  constructor() {
    super();

    this.state = {
      title: 'hello'
    };
  }

  render() {
    return (
      <form id="article-form">
        <Input title={ this.state.title } />
      </form>
    )
  }
}

export default FormContainer;
