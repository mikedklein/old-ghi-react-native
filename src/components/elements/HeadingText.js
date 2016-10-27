import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import variables from '../../theme/styleVariables';

const HeadingText = (props) => {
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
    <Text style={style}>
      {props.children}
    </Text>
  );
};

HeadingText.propTypes = {
  dark: PropTypes.bool,
  themed: PropTypes.bool,
  italic: PropTypes.bool,
};

const styles = {
  primary: {
    color: variables.colors.headingText,
    fontSize: variables.type.headingTextFontSize,
    flex: 1,
    lineHeight: variables.type.headingTextLineHeight,
  },
  dark: {
    color: variables.colors.headingTextDark
  },
  themed: {
    color: variables.colors.primary
  }
};

export default HeadingText;
