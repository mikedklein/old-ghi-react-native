import React, {Component, PropTypes} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import variables from '../../../theme/styleVariables';

class Allergy extends Component {
  getRating = () => {
    let ratings = [];

    for (let i = 0; i < 5; i++) {
      if (i > this.props.severity - 1) {
        ratings.push(<View key={i} style={styles.dotEmpty}/>);
      } else {
        ratings.push(<View key={i} style={styles.dotFilled}/>);
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
      case 1:
        return 'Mild';
    }
  };

  render() {
    return (
      <View style={styles.wrapperRow}>
        <View style={styles.row}>
          <Text style={styles.name}>
            {this.props.name}
          </Text>
          <View style={styles.spacer}/>
          <View style={styles.dotWrapper}>
            {this.getRating()}
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.lowerText}>
            {this.props.reaction}
          </Text>
          <View style={styles.spacer}/>
          <Text style={styles.lowerText}>
            {this.getSeverityName()}
          </Text>
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
  name: {
    color: variables.colors.primary,
    fontSize: variables.type.headingFontSize,
    fontWeight: 'bold'
  },
  row: {
    flexDirection: 'row',
  },
  spacer: {
    flex: 1
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
  },
  lowerText: {
    color: variables.colors.headingText,
    fontSize: 16
  }
});

export default Allergy;