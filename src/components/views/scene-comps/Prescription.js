import React, { Component, PropTypes } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { CheckBox, Icon } from 'react-native-elements';
import Spacer from '../../elements/Spacer';
import TitleText from '../../elements/TitleText';
import variables from '../../../theme/styleVariables';

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
    if (this.props.alert) {
      icon = (
        <Icon
          name='notifications'
          color={variables.colors.primary}
          style={styles.icon}
        />
      );
    }
    return (
      <TouchableOpacity style={styles.row} onPress={this.pressHandler}>

          <View style={styles.checkWrapper}>
              <CheckBox
                iconType='material'
                checkedIcon='check-box'
                uncheckedIcon='check-box-outline-blank'
                textStyle={styles.checkText}
                checked={this.state.checked}
                containerStyle={styles.containerStyle}
                checkedColor={variables.colors.primary}

              />
          </View>

          <View style={styles.nameWrapper} >
            <TitleText>
              {this.props.name}
            </TitleText>
          </View>

          <View style={styles.dosageWrapper} >
            {icon}
            <TitleText style={{ marginLeft: 5, marginTop: 0}}>
              {this.props.dosage}
            </TitleText>
          </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 30,
    paddingBottom: 10,
  },
  checkWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  nameWrapper: {
    flex: 2,
    flexWrap: 'wrap'
  },
  dosageWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  containerStyle: {
    backgroundColor: variables.colors.white,
    padding: 0,
    borderRadius: 0,
    borderWidth: 0
  },
  checkText: {
    color: variables.colors.titleText,
    fontSize: variables.type.titleTextFontSize,
    lineHeight: variables.type.titleTextLineHeight,
  }
});

Prescription.propTypes = {
  name: PropTypes.string.isRequired,
  dosage: PropTypes.string.isRequired,
  taken: PropTypes.bool.isRequired,
  alert: PropTypes.bool
};
