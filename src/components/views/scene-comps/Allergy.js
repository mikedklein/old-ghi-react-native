import React, { Component, PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import TitleText from '../../elements/TitleText';
import SubText from '../../elements/SubText';
import Spacer from '../../elements/Spacer';

class Allergy extends Component {
  getRating = () => {
    const ratings = [];

    for (let i = 0; i < 5; i++) {
      if (i > this.props.severity - 1) {
        ratings.push(<View key={i} style={styles.dotEmpty} />);
      } else {
        ratings.push(<View key={i} style={styles.dotFilled} />);
      }
    }

    return ratings;
  };

  getSeverityName = () => {
    switch (this.props.severity) {
      case 5:
        return 'Severe';
      case 4:
        return 'Moderate to Severe';
      case 3:
        return 'Moderate';
      case 2:
        return 'Mild to Moderate';
      default:
        return 'Mild';
    }
  };

  render() {
    return (
      <View style={styles.wrapperRow}>
        <View style={styles.row}>
          <TitleText themed>
            {this.props.name}
          </TitleText>
          <Spacer />
          <View style={styles.dotWrapper}>
            {this.getRating()}
          </View>
        </View>
        <View style={styles.row}>
          <SubText>
            {this.props.reaction}
          </SubText>
          <Spacer />
          <SubText style={{ textAlign: 'right' }}>
            {this.getSeverityName()}
          </SubText>
        </View>
      </View>
    );
  }
}

Allergy.propTypes = {
  name: PropTypes.string.isRequired,
  reaction: PropTypes.string.isRequired,
  severity: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  wrapperRow: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 5,
    marginBottom: 5
  },
  row: {
    flexDirection: 'row',
  },
  dotWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dotFilled: {
    padding: 5,
    marginLeft: 3,
    backgroundColor: '#D8C84B',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#EEEEEE'
  },
  dotEmpty: {
    padding: 5,
    marginLeft: 3,
    backgroundColor: 'white',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#EEEEEE'
  }
});

export default Allergy;
