import React, { Component } from 'react';
import variables from '../theme/styleVariables';
import Container from '../components/container';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Platform
} from 'react-native';

export default class HomeView extends Component {

  clickHandler = () => {
    this.props.navigator.push({
      id: 'login'
    });
  };

  render() {
    return (
      <Container>
        <View style={styles.imageRow}>
          <Image
            style={styles.image}
            source={require('../ghilogo.png')} />
        </View>
        <Text style={styles.welcome}>
          Welcome
        </Text>
        <Text style={styles.welcome}>
          {this.props.username}
        </Text>
        <TouchableHighlight style={styles.button} onPress={this.clickHandler}>
          <Text style={styles.buttonText}>
            Logout
          </Text>
        </TouchableHighlight>
      </Container>
    );
  }
}



const styles = StyleSheet.create({
  imageRow: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    marginBottom: 20,
    borderRadius: 50,
    alignItems: 'center'
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 30,
    color: '#333333',
  },
  button: {
    padding: 12,
    marginLeft: variables.fullWidthMargin,
    marginRight: variables.fullWidthMargin,
    backgroundColor: variables.colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: variables.buttonRadius,
    marginTop: (Platform.OS === 'ios') ? 0 : 30,
  },
  buttonText: {
    fontSize: 19,
    color: 'white'
  }
});
