import React, { Component } from 'react';
import variables from '../theme/styleVariables';
import Container from '../components/container';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Modal,
  Image,
  Platform,
  Navigator
} from 'react-native';

export default class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      title: 'Login'
    };
  }

  clickHandler = () => {
    if(this.state.username === 'Test' && this.state.password === 'test123') {
      this.props.navigator.push({
        passProps: {
          username: this.state.username,
          password: this.state.password
        },
        id: 'home'
      });
    } else {
      alert('Username and Password are incorrect!');
    }
  };

  render() {
    return (
      <Container>
        <View style={styles.imageRow}>
          <Image
            style={styles.image}
            source={require('../ghilogo.png')} />
        </View>
        <Text style={styles.welcome}>Please Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        />
        <Text style={styles.instructions}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          secureTextEntry
        />
        <Text style={styles.instructions}>Password</Text>
        <TouchableHighlight style={styles.button} onPress={this.clickHandler}>
          <Text style={styles.buttonText}>
            Login
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
  instructions: {
    textAlign: 'left',
    color: '#333333',
    marginTop: 5,
    marginBottom: 20,
    opacity: (Platform.OS === 'ios') ? 1 : 0,
    maxHeight: (Platform.OS === 'ios') ? null: 0,
    marginLeft: variables.fullWidthMargin,
    marginRight: variables.fullWidthMargin,
  },
  input: {
    marginLeft: variables.fullWidthMargin,
    marginRight: variables.fullWidthMargin,
    paddingLeft: 10,
    color: '#333333',
    height: 40,
    borderColor: 'gray',
    borderWidth: (Platform.OS === 'ios') ? 1 : 0,
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
