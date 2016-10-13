import React, { Component, PropTypes } from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

import variables from '../../../theme/styleVariables';

class JournalEntry extends Component {
  render() {


    let {active, title, doctor, iconType, location, date, type, score, scoreTitle, onPress} = this.props
    let scoreContent;

    //TODO This check is insufficient but works for now will need to be revamped when the actual API is
    // official
    if(score) {
      scoreContent = (
        <View style={styles.scoreContainer}>
          <View style={styles.scoreWrapper}>
            <View style={styles.scoreShadow}>
              <Text style={styles.score}>
                {score}
              </Text>
            </View>
          </View>
          <Text style={styles.scoreTitle}>
            {scoreTitle}
          </Text>
        </View>
      )
    }

    let iconColor = '#E2E2E2';
    let activeBackground = null;
    let activeTextColor = null;

    if (active) {
      iconColor = 'white';
      activeBackground = { backgroundColor: variables.colors.primary };
      activeTextColor = { color: 'white' };
    }

    return (
      <View style={styles.container} onPress={ () => {onPress(title)} }>
        <Image source={require('../../../images/background.png')} style={styles.left}>
          <View style={[ styles.iconWrapper, activeBackground ]} >
            <Icon type='font-awesome' name={iconType} color={iconColor} size={40} />
          </View>
        </Image>
        <View style={[ styles.right, activeBackground ]}>
          <View style={styles.column1}>
            <View style={styles.spacer} />
            <Text style={[ styles.name, activeTextColor]} >{title}</Text>
            <Text style={[ styles.doctor, activeTextColor ]} >{doctor}, {location}</Text>
            <View style={styles.spacer} />
            <Text style={[ styles.date, activeTextColor ]}>{date}</Text>
            <View style={styles.spacer} />
          </View>
          <View style={styles.spacer} />
          <View style={styles.column2}>
            {scoreContent}
          </View>
        </View>
      </View>
    )
  }
};

JournalEntry.propTypes = {
  title: PropTypes.string.isRequired,
  doctor: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  scoreTitle: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    flex: 1
  },
  left: {
    resizeMode: 'stretch', // or 'stretch'
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconWrapper: {
    maxWidth: 70,
    maxHeight: 70,
    minWidth: 70,
    minHeight: 70,
    padding: 10,
    backgroundColor: '#FBFBFB',
    borderRadius: 40,
    borderWidth: 5,
    borderColor: '#E2E2E2',
    borderStyle: 'solid'
  },
  right: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: variables.colors.background,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 5,
    borderRadius: 2,
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height: 1,
      width: 1
    },
    shadowRadius: 2,
  },
  scoreContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scoreWrapper: {
    backgroundColor: 'rgba(255,255,255, .8)',
    padding: 3,
    marginBottom: 5,
    borderRadius: 50,
    overflow: 'hidden',
  },
  scoreShadow: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: .67,
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowRadius: 12,
    borderRadius: 50,
    padding: 10
  },
  score: {
    color: variables.colors.primary,
    fontSize: variables.type.headingFontSize + 15,
    fontWeight: 'bold'
  },
  scoreTitle: {
    fontSize:variables.type.headingFontSize -5,
    color: '#414141'
  },
  name: {
    color: variables.colors.primary,
    fontSize: variables.type.headingFontSize,
    fontWeight: 'bold'
  },
  doctor: {
    fontSize: (variables.type.headingFontSize - 4),
    color: '#414141',
    fontStyle: 'italic'
  },
  date: {
    fontSize: (variables.type.headingFontSize - 5),
    color: '#414141',
  },
  spacer: {
    flex: 1
  }
});

export default JournalEntry;
