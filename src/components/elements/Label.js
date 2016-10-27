import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import variables from '../../theme/styleVariables';

const Label = (props) => {
  let style = { ...styles.primary, ...props.style };

  if (props.danger) {
    style = { ...styles.primary, backgroundColor: variables.colors.danger };
  }

  if (props.info) {
    style = { ...styles.primary, backgroundColor: variables.colors.info };
  }

  if (props.neutral) {
    style = { ...styles.primary, backgroundColor: variables.colors.neutral };
  }

  return (
    <View style={style}>
      <Text style={styles.labelText}>
        {props.children}
      </Text>
    </View>
  );
};

Label.propTypes = {
  danger: PropTypes.bool,
  info: PropTypes.bool,
  neutral: PropTypes.bool,
};

const styles = {
  primary: {
    backgroundColor: variables.colors.primary,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 5
  },
  labelText: {
    color: 'white',
    fontWeight: 'bold'
  },
};

export default Label;
