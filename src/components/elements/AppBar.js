import React, { Component, PropTypes } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Icon } from 'react-native-elements';
import variables from '../../theme/styleVariables';

export default class AppBar extends Component {
  render() {
    return (
      <View>
        <StatusBar
            backgroundColor={variables.colors.secondaryDark}
            barStyle="light-content"
        />
        <View style={styles.block}>
          <View
            style={styles.imageContainer}
          >
            <Icon
              color='white'
              size={30}
              onPress={this.props.onPress}
              underlayColor={variables.colors.secondaryDark}
              name='menu'
            />
          </View>
          <Text style={styles.text}>
            {this.props.text.toUpperCase()}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: variables.colors.secondaryDark,
    paddingTop: (Platform.OS === 'ios') ? 25 : 0,
    flexDirection: 'row',
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
