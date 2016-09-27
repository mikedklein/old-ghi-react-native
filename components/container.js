import React, { Component } from 'react';
import variables from '../theme/styleVariables';

import {
  StyleSheet,
  View,
} from 'react-native';

export default class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: variables.colors.backgroundColor,
  }
});
