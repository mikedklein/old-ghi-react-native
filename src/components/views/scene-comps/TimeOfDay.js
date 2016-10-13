import React, { Component, PropTypes } from 'react';
import variables from '../../../theme/styleVariables';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

const times = {
  morning: 'Morning',
  evening: 'Evening'
};
export default class TimeOfDay extends Component {
  render() {
    let image;
    let text;

    if(this.props.time === 'morning') {
      text = times[this.props.time];
      image = require('../../../images/sun.png');
    } else if (this.props.time === 'evening') {
      text = times[this.props.time];
      image = require('../../../images/moon.png');
    } else {
      // NOTE For now default case is morning might change later.
      text = times[this.props.time];
      image = require('../../../images/sun.png');
    }
    return (
      <View style={styles.block}>
        <Image style={styles.image} source={image} />
        <Text style={styles.text}>
          {text}
        </Text>
        <View style={styles.spacer} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  image: {
    height: 65,
    width: 65,
    marginRight: 20
  },
  spacer: {
    flex: 1
  },
  text: {
    color: variables.colors.headingText,
    fontSize: variables.type.headingFontSize,
    fontWeight: 'bold'
  }
});


TimeOfDay.propTypes = {
  time: PropTypes.string.isRequired,
}
