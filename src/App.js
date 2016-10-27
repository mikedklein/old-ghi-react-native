import React, { Component } from 'react';
import {
  View,
  Dimensions
} from 'react-native';

import IpadLayout from './devices/IpadLayout';
import IphoneLayout from './devices/IphoneLayout';
import variables from './theme/styleVariables';


class App extends Component {
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
     <View backgroundColor={variables.colors.white}>
       {component}
     </View>
    );
  }
}

export default App;
