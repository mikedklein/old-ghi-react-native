import React, { Component } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import Orientation from 'react-native-orientation';

//TODO probably need to address this more systematically
const MAGIC_PADDING = 20;
const WIDTH_RATIO = 0.60;

class Modal extends Component {

  state = {
    height: this.props.height,
    width: this.props.width,
    activeY: this.props.yCoord,
    bounceValue: new Animated.Value(0),
    backgroundValue: new Animated.Value(0),
    showCallout: true,
    calculatedWidth: this.props.width
  };

  componentDidMount() {
    if (this.props.width * WIDTH_RATIO < 300) {
      this.setState({
        showCallout: false,
        calculatedWidth: this.props.width - MAGIC_PADDING
      });
    } else {
      this.setState({
        showCallout: true,
        calculatedWidth: this.state.width * WIDTH_RATIO
      });
    }

    this.state.bounceValue.setValue(0.8);
    this.state.backgroundValue.setValue(0);
    Animated.timing(
      this.state.bounceValue,
      {
        toValue: 1,
        duration: 125,
        delay: 125
      }
    ).start();
    Animated.timing(
      this.state.backgroundValue,
      {
        toValue: 1,
        duration: 125
      }
    ).start();
  }

  componentWillUnmount() {
    this.state.bounceValue.setValue(0.8);
    this.state.backgroundValue.setValue(0.8);

    Animated.timing(
      this.state.bounceValue,
      {
        toValue: 0.0,
        duration: 100
      }
    ).start();
    Animated.timing(
      this.state.backgroundValue,
      {
        toValue: 0,
        duration: 125
      }
    ).start();
  }

  render() {
    return (
      <Animated.View
        style={[
          {
            height: this.state.height,
            width: this.state.width,
            opacity: this.state.backgroundValue
          },
          styles.floatView
        ]}
      >
        <Animated.View style={{ flex: 1, transform: [{ scale: this.state.bounceValue }] }}>
          {this.state.showCallout && <View
            style={[
              styles.triangle,
              {
                top: this.state.activeY,
                right: this.state.calculatedWidth
              }
            ]}
          />}
          <View
            style={[
              {
                height: this.state.height - 20,
                width: this.state.calculatedWidth
              },
              styles.floatViewContent
            ]}
          >
        {this.props.children}
        </View>
        </Animated.View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  floatView: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,.30)',
    margin: 10,
    top: 0,
    left: 0,
  },
  floatViewContent: {
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    margin: 10,
    padding: 5,
    borderRadius: 10,
  },
  triangle: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 30,
    borderRightWidth: 40,
    borderBottomWidth: 30,
    borderLeftWidth: 0,
    borderTopColor: 'transparent',
    borderRightColor: 'white',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
  },
});

export default Modal;
