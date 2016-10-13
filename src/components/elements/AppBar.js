import React, {Component, PropTypes} from 'react';
import variables from '../../theme/styleVariables';
import {Icon} from 'react-native-elements';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class AppBar extends Component {
  render() {
    return (
      <View style={styles.block}>
        <View
          style={styles.imageContainer}>
          <Icon
            color='white'
            size={30}
            onPress={this.props.onPress}
            underlayColor={variables.colors.secondaryDark}
            name='menu'/>
        </View>
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
    backgroundColor: variables.colors.secondaryDark,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  imageContainer: {
    marginRight: 10
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: 'red'
  },
  text: {
    color: 'white',
    fontSize: 24,
    flex: 1
  },
  subText: {
    color: 'rgba(255,255,255,.67)'
  }
});


AppBar.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};
