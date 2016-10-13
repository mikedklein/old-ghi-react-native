import React, { Component, PropTypes } from 'react';
import variables from '../../../theme/styleVariables';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class SectionHeading extends Component {
  render() {
    return (
      <View style={styles.block}>
        <Text style={styles.text}>
          {this.props.text.toUpperCase()}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  text: {
    color: variables.colors.headingText,
    fontSize: variables.type.headingFontSize,
    fontWeight: 'bold'
  }
});


SectionHeading.propTypes = {
  text: PropTypes.string.isRequired
}
