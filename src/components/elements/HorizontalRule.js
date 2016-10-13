import React, { Component, PropTypes } from 'react';
import variables from '../../theme/styleVariables';
import { StyleSheet, View } from 'react-native';


export default class HorizontalRule extends Component {
  render() {
    let fill = this.props.color || variables.colors.rule;
    let margin = this.props.margin || 30;
    return (
      <View style={styles.container}>
        <View style={[styles.rule, { backgroundColor: fill, margin }]}>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rule: {
    flex: 1,
    height: 2,
    opacity: .49
  }
});

HorizontalRule.propTypes = {
  color: PropTypes.string
};