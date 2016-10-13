import React, { Component, PropTypes } from 'react';
import { TouchableHighlight, StyleSheet, Text, Platform } from 'react-native';
import variables from '../../theme/styleVariables';

export default class Button extends Component {
  render() {
    return (
      <TouchableHighlight style={styles.button} onPress={this.props.clickHandler} underlayColor={variables.colors.primaryDark}>
        <Text style={styles.buttonText}>
          {this.props.text}
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    marginLeft: variables.fullWidthMargin,
    marginRight: variables.fullWidthMargin,
    backgroundColor: variables.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: variables.buttonRadius,
    marginTop: (Platform.OS === 'ios') ? 0 : 30,
  },
  buttonText: {
    fontSize: 19,
    color: 'white'
  }
});

Button.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func
}
