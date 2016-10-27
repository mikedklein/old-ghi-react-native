import React, { Component, PropTypes } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import TitleText from '../../elements/TitleText';
import SubText from '../../elements/SubText';
import Spacer from '../../elements/Spacer';
import variables from '../../../theme/styleVariables';

class JournalEntry extends Component {
  state = {
    showIcon: true
  };

  componentDidMount() {
    if (Dimensions.get('window').width < 750) {
      this.setState({
        showIcon: false
      });
    }
  }

  render() {
    const {
      active,
      title,
      doctor,
      iconType,
      location,
      date,
      score,
      scoreTitle,
      onPress
    } = this.props;

    let scoreContent;

    // TODO This check is insufficient but works for now will need to be
    // revamped when the actual API is complete
    if (score) {
      scoreContent = (
        <View style={styles.scoreContainer}>
          <View style={styles.scoreWrapper}>
            <View style={styles.scoreShadow}>
              <Text
                style={styles.scoreText}
                themed
              >
                {score}
              </Text>
            </View>
          </View>
          <View>
            <SubText dark>
              {scoreTitle}
            </SubText>
          </View>
        </View>
      );
    }

    let iconColor = variables.colors.iconLight;
    let activeBackground = {};
    let activeTextColor = {};

    if (active) {
      iconColor = variables.colors.white;
      activeBackground = { backgroundColor: variables.colors.primary };
      activeTextColor = { color: variables.colors.white };
    }

    return (
      <View style={styles.container} onPress={() => onPress(title)} >
        {
          this.state.showIcon &&
          <Image source={require('../../../images/background.png')} style={styles.left}>
            <View style={[styles.iconWrapper, activeBackground]} >
              <Icon type='font-awesome' name={iconType} color={iconColor} size={40} />
            </View>
          </Image>
        }
        <View style={[styles.right, activeBackground]}>
          <View style={styles.column1}>
            <Spacer />
            <View>
              <TitleText themed style={activeTextColor}>{title}</TitleText>
              <SubText
                style={activeTextColor}
                italic
                >
                {doctor}, {location}
              </SubText>
            </View>
            <Spacer />
            <View>
              <SubText style={activeTextColor}>{date}</SubText>
            </View>
            <Spacer />
          </View>
          <View style={styles.column2}>
            {scoreContent}
          </View>
        </View>
      </View>
    );
  }
}

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
    minHeight: 110,
    maxHeight: 110,
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
    paddingTop: 10,
    paddingBottom: 10,
    margin: 5,
    borderRadius: 2,
    shadowColor: 'black',
    shadowOpacity: 0.2,
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
    backgroundColor: 'rgba(255,255,255, 0.8)',
    padding: 3,
    marginBottom: 5,
    borderRadius: 50,
    overflow: 'hidden',
  },
  scoreShadow: {
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: variables.shadowOpacity,
    shadowOffset: {
      height: 0,
      width: 0
    },
    shadowRadius: 12,
    borderRadius: 50,
    padding: 10
  },
  scoreText: {
    fontSize: variables.type.scoreTextFontSize,
    lineHeight: variables.type.scoreTextLineHeight,
    color: variables.colors.primary,
    fontWeight: '600',
    marginTop: 3
  },
  column1: {
    flex: 3,
  },
  column2: {
    flex: 1,
    alignSelf: 'flex-end'
  }
});

export default JournalEntry;
