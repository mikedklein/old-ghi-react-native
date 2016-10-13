import React, { Component } from 'react';
import variables from '../../theme/styleVariables';
import Container from '../../components/layout/Container';
import Button from '../../components/elements/Button';

import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  View,
  TextInput,
  TouchableHighlight,
  Modal,
  Image,
  Platform,
} from 'react-native';

export default class LoginView extends Component {

  render() {
    return (
      <Container color='white'>
        <KeyboardAvoidingView behavior='position' contentContainerStyle={styles.container} >
          <View style={styles.imageRow}>
            <Image
              style={styles.image}
              source={require('../../images/ghilogo.png')} />
          </View>
          <Text style={styles.welcome}>Please Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Username"
            onChangeText={this.props.usernameChange}
            autoCorrect={false}
            value={this.props.username}
          />
          <Text style={styles.instructions}>Username</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            onChangeText={this.props.passwordChange}
            value={this.props.password}
            autoCorrect={false}
            secureTextEntry
          />
          <Text style={styles.instructions}>Password</Text>
          <Button clickHandler={this.props.loginHandler} text='Login' />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    paddingBottom: 150
  },
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
  }
});
