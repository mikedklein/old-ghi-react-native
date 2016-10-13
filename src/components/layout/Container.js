import React, { Component } from 'react';
import variables from '../../theme/styleVariables';

import {
  StyleSheet,
  View
} from 'react-native';

export default class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let backgroundColor = this.props.color ? this.props.color : variables.colors.background;
    return (
      <View style={[styles.container, {backgroundColor}]}>
        {this.props.children}
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
