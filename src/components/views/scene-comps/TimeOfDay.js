import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';
import Spacer from '../../elements/Spacer';
import HeadingText from '../../elements/HeadingText'
import variables from '../../../theme/styleVariables';


const times = {
  morning: 'Morning',
  evening: 'Evening'
};
export default class TimeOfDay extends Component {
  render() {
    let image;
    let text;

    if (this.props.time === 'morning') {
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
        <Spacer />
        <View>
          <HeadingText themed>
            {text}
          </HeadingText>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  image: {
    height: 65,
    width: 65,
    marginRight: 20
  },
  text: {
    color: variables.colors.headingText,
    fontSize: variables.type.headingFontSize,
    fontWeight: 'bold'
  }
});


TimeOfDay.propTypes = {
  time: PropTypes.string.isRequired,
};
