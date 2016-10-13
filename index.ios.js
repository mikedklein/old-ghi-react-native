'use strict';

import React, { Component } from 'react';
import IpadLayout from './src/devices/IpadLayout';
import IphoneLayout from './src/devices/IphoneLayout';
import {
  AppRegistry,
  View,
  Dimensions
} from 'react-native';

class TestProject extends Component {
  constructor() {
    super();

    this.state = {
      height: 0,
      width: 0
    };
  }

  componentDidMount() {
    this.setState({
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width
    });
  }
  render() {
    let component;
    if (this.state.width > 750) {
      component = <IpadLayout />;
    } else {
      component = <IphoneLayout />;
    }

    return (
     <View>
       {component}
     </View>
    );
  }
}

AppRegistry.registerComponent('TestProject', () => TestProject);
