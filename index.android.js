import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import App from './src/App';


class TestProject extends Component {

  render() {
    return (<App />
  );
  }
}

AppRegistry.registerComponent('TestProject', () => TestProject);
