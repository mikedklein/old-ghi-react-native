import React, { PropTypes } from 'react';
import { StyleSheet, View } from 'react-native';
import TitleText from '../../elements/TitleText';
import SubText from '../../elements/SubText';

const Doctor = ({ name, type, phone, address }) => (
  <View style={styles.wrapper} >
    <TitleText themed>
      {name}
    </TitleText>
    <SubText italic>
      {type}
    </SubText>
    <SubText dark>{address.street}</SubText>
    <SubText dark>{address.city}, {address.state} {address.zip}</SubText>
    <SubText>{phone}</SubText>
  </View>
);

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
});

export default Doctor;
