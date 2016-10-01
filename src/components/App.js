import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Home</Link> | <Link to='/counter'>Counter</Link>
        {this.props.children}
      </div>
    );
  }
}
