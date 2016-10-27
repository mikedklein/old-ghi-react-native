import React, { PropTypes } from 'react';
import { Text } from 'react-native';
import variables from '../../theme/styleVariables';

const SubText = (props) => {
  let style = { ...styles.primary };
  let context = null;

  if (props.context) {
    context = (
      <Text style={styles.subTextContext}>{props.context}</Text>
    );
  }

  if (props.dark) {
    style = { ...style, ...styles.dark };
  }

  if (props.themed) {
    style = { ...style, ...styles.themed };
  }

  if (props.italic) {
    style = { ...style, fontStyle: 'italic' };
  }

  if (props.bold) {
    // TODO might want to consider variablizing bold for other elements
    style = { ...style, fontWeight: 'bold' };
  }

  if (props.small) {
    style = { ...style, fontSize: variables.type.small };
  }

  // style props should always override component styles
  style = { ...style, ...props.style };

  return (
    <Text style={style}>
      {props.children}{context}
    </Text>
  );
};

SubText.propTypes = {
  dark: PropTypes.bool,
  themed: PropTypes.bool,
  italic: PropTypes.bool,
};

const styles = {
  primary: {
    color: variables.colors.subText,
    fontSize: variables.type.subTextFontSize,
    marginBottom: variables.type.marignBottom,
    flex: 1,
  },
  dark: {
    color: variables.colors.subTextDark
  },
  themed: {
    color: variables.colors.primary
  },
  subTextContext: {
    color: variables.colors.subText
  }
};

export default SubText;
