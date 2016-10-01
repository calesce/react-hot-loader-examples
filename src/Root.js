import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';

export default class Root extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        {this.props.routes()}
      </Router>
    );
  }
}
