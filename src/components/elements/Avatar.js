import React, { PropTypes } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import variables from '../../theme/styleVariables';


export default Avatar = ({url, size}) => {
  let dimensions = {
    height: 100,
    width: 100,
    borderRadius: 50
  };

  if(size==='large') {
    dimensions.height = 200;
    dimensions.width = 200;
    dimensions.borderRadius = 100;
  }

  return (
    <View style={[styles.wrapper, {height: dimensions.height, width: dimensions.width, borderRadius: dimensions.borderRadius}]}>
      <Image
        style={[styles.image, {height: dimensions.height - 5, width: dimensions.width - 5, borderRadius: dimensions.borderRadius - 1 }]}
        source={{uri: url}}
      />
    </View>
  )
};

Avatar.propTypes = {
  url: PropTypes.string.isRequired,
  size: PropTypes.string
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 10,
    borderColor: variables.colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    borderWidth: 5,
    borderColor: 'white'
  }
});