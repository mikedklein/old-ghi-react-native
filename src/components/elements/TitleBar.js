import React, { Component, PropTypes } from 'react';
import variables from '../../theme/styleVariables';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class TitleBar extends Component {
  render() {
    return (
      <View style={styles.block}>
        <Text style={styles.text}>
          {this.props.text.toUpperCase()}
        </Text>
        <View style={styles.spacer} />
        <Text style={styles.subText}>
          {this.props.subText}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: variables.colors.primary,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10,
  },
  spacer: {
    flex: 1
  },
  text: {
    color: 'white',
    fontSize: variables.type.headingFontSize,
    fontWeight: 'bold'
  },
  subText: {
    color: 'rgba(255,255,255,.67)'
  }
});


TitleBar.propTypes = {
  text: PropTypes.string.isRequired,
  subText: PropTypes.string
}
