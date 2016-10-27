import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import variables from '../../theme/styleVariables';

const TitleText = (props) => {
  let style = { ...styles.primary };

  if (props.dark) {
    style = { ...styles.primary, color: styles.dark.color };
  }

  if (props.themed) {
    style = { ...styles.primary, color: styles.themed.color };
  }

  // style props should always override component styles
  style = { ...style, ...props.style };

  return (
    <View style={{ flexWrap: 'wrap' }} >
      <Text style={style}>
        {props.children}
      </Text>
    </View>
  );
};

TitleText.propTypes = {
  dark: PropTypes.bool,
  themed: PropTypes.bool,
  italic: PropTypes.bool,
};

const styles = {
  primary: {
    color: variables.colors.titleText,
    fontSize: variables.type.titleTextFontSize,
    lineHeight: variables.type.titleTextLineHeight,
    fontWeight: 'bold',
    flex: 1,
  },
  dark: {
    color: variables.colors.titleTextDark
  },
  themed: {
    color: variables.colors.primary
  }
};

export default TitleText;
