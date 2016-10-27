import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import variables from '../../theme/styleVariables';

class BadgeSlider extends Component {
  state = {
    width: 0,
    position: 0,
    color: variables.colors.danger,
    message: ''
  };

  componentDidMount() {
    const { value, high, medium } = this.props;

    if (value > high) {
      this.setState({
        color: variables.colors.danger,
        message: 'TOO HIGH'
      });
    } else if (value > medium) {
      this.setState({
        color: variables.colors.neutral,
        message: 'O.K.'
      });
    } else {
      this.setState({
        color: variables.colors.primary,
        message: 'GOOD'
      });
    }
  }

  computeWidth = (event) => {
    const { width } = event.nativeEvent.layout;
    const { value, max } = this.props;

    const relativeValue = (width - (width * (value / max))) - 40;

    this.setState({
      width,
      position: relativeValue
    });
  };

  render() {
    return (
      <View
      onLayout={this.computeWidth}
      style={styles.container}
      >
        <LinearGradient
          start={[0.0, 0.0]}
          end={[1.0, 0.0]}
          locations={[0.0, 0.4, 0.6, 1.0]}
          colors={[
            variables.colors.danger,
            variables.colors.neutral,
            variables.colors.neutral,
            variables.colors.primary]}
          style={styles.gradientBar}
        />
        <View style={[styles.badgeContainer, { left: this.state.position }]}>
          <View style={[styles.badgeCircle, { borderColor: this.state.color }]}>
            <Text style={styles.badgeCircleText}>{this.props.value}</Text>
            <Text style={styles.subText}>{this.props.unit}</Text>
          </View>
          <View style={[styles.badgeBanner, { backgroundColor: this.state.color }]}>
            <Text style={styles.bannerText}>
              {this.state.message}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const ROW_HEIGHT = 100;
const SLIDER_HEIGHT = 80;
const SLIDER_WIDTH = 80;

const styles = StyleSheet.create({
  container: {
    height: ROW_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },
  gradientBar: {
    flex: 1,
    height: 20,
    borderRadius: variables.borderRadius
  },
  badgeContainer: {
    height: 80,
    width: 80,
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'flex-end',
    top: (ROW_HEIGHT - SLIDER_HEIGHT) / 2,
    left: 30,
  },
  badgeCircle: {
    position: 'absolute',
    top: -5,
    left: 0,
    paddingTop: 6,
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: SLIDER_HEIGHT,
    width: SLIDER_WIDTH,
    borderRadius: 50,
    backgroundColor: 'white',
    borderColor: variables.colors.danger,
    borderWidth: 4,
  },
  badgeCircleText: {
    fontSize: 30,
    fontWeight: '700',
    color: variables.colors.badgeText,
    backgroundColor: 'transparent'
  },
  subText: {
    marginTop: -3,
    padding: 0,
    fontSize: 12,
    color: variables.colors.headingText,
    backgroundColor: 'transparent'
  },
  badgeBanner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: variables.borderRadius,
    backgroundColor: variables.colors.danger
  },
  bannerText: {
    color: 'white',
    fontWeight: '600'
  }
});

export default BadgeSlider;
