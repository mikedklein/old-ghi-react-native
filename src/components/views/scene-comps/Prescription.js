import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import variables from '../../../theme/styleVariables';
import { CheckBox, Icon} from 'react-native-elements'

export default class Prescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.taken
    };
  }
  pressHandler = () => {
    this.setState({
      checked: !this.state.checked
    });
  };

  render() {
    let icon;
    if(this.props.alert) {
      icon = (
        <Icon
          name='notifications'
          color={variables.colors.primary}
          style={styles.icon}
        />
      );
    }
    return (
      <View style={styles.row}>
        <CheckBox
          title={this.props.name}
          iconType='material'
          checkedIcon='check-box'
          uncheckedIcon='check-box-outline-blank'
          textStyle={styles.checkText}
          checked={this.state.checked}
          containerStyle={styles.containerStyle}
          checkedColor={variables.colors.primary}
          onPress={this.pressHandler}
        />
        <View style={styles.spacer} />
        {icon}
        <Text style={styles.dosageText}>
          {this.props.dosage}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 30,
    marginRight: 30,
    paddingBottom: 10,
  },
  spacer: {
    flex: 1,
  },
  containerStyle: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -4,
    padding: 0,
    borderRadius: 0,
    borderWidth: 0
  },
  checkText: {
    color: variables.colors.headingText,
    fontSize: 24
  },
  dosageText: {
    color: variables.colors.headingText,
    marginLeft: 10
  }
});

Prescription.propTypes = {
  name: PropTypes.string.isRequired,
  dosage: PropTypes.string.isRequired,
  taken: PropTypes.bool.isRequired,
  alert: PropTypes.bool
};