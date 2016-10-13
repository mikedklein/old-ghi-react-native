import React, { PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import variables from '../../../theme/styleVariables';

const Doctor = ({name, type, phone, address}) => {
  return (
    <View style={styles.wrapper} >
      <Text style={styles.name} >
        {name}
      </Text>
      <Text style={styles.type}>
        {type}
      </Text>
      <Text style={styles.subText} >{address.street}</Text>
      <Text style={styles.subText} >{address.city}, {address.state} {address.zip}</Text>
      <Text style={styles.phone}>{phone}</Text>
    </View>
  );
};

Doctor.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10
  },
  name: {
    color: variables.colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3
  },
  type: {
    marginBottom: 3,
    color: variables.colors.headingText,
    fontSize: variables.type.headingFontSize,
    fontStyle: 'italic',
  },
  subText: {
    marginBottom: 5,
    color: variables.colors.headingTextDark,
    fontSize: variables.type.headingFontSize
  },
  phone: {
    color: variables.colors.headingText,
    fontSize: variables.type.headingFontSize
  }
});

export default Doctor;