import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  View,
  TextInput,
  Image,
  Platform,
} from 'react-native';
import I18n from 'react-native-i18n';

import variables from '../../theme/styleVariables';
import Container from '../../components/layout/Container';
import Button from '../../components/elements/Button';


export default class LoginView extends Component {

  render() {
    return (
      <Container color='white'>
        <KeyboardAvoidingView behavior='position' contentContainerStyle={styles.container} >
          <View style={styles.imageRow}>
            <Image
              style={styles.image}
              source={require('../../images/ghilogo.png')}
            />
          </View>
          <Text style={styles.welcome}>{I18n.t('login')}</Text>
          <TextInput
            style={styles.input}
            placeholder={I18n.t('usernamePrompt')}
            onChangeText={this.props.usernameChange}
            autoCorrect={false}
            value={this.props.username}
          />
        <Text style={styles.instructions}>{I18n.t('username')}</Text>
          <TextInput
            style={styles.input}
            placeholder={I18n.t('passwordPrompt')}
            onChangeText={this.props.passwordChange}
            value={this.props.password}
            autoCorrect={false}
            secureTextEntry
          />
          <Text style={styles.instructions}>{I18n.t('password')}</Text>
          <Button clickHandler={this.props.loginHandler} text={I18n.t('password')} />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

I18n.fallbacks = true;

I18n.translations = {
  en: {
    login: 'Please Login',
    username: 'Username',
    usernamePrompt: 'Enter Username',
    password: 'Password',
    passwordPrompt: 'Enter Password',
    loginText: 'Login'
  },
  ar: {
    login: 'الرجاء تسجيل الدخول',
    username: 'اسم المستخدم',
    usernamePrompt: 'أدخل اسم المستخدم',
    password: 'كلمة السر',
    passwordPrompt: 'أدخل كلمة المرور',
    loginText: 'تسجيل الدخول'
  }
};

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
    maxHeight: (Platform.OS === 'ios') ? null : 0,
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
