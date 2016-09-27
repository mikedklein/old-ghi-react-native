/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import variables from './theme/styleVariables';
import React, { Component } from 'react';
import LoginView from './views/Login';
import HomeView from './views/Home';

import {
  AppRegistry,
  Navigator
} from 'react-native';

class TestProject extends Component {

  navigtorRenderScene = (route, navigator) => {
    switch (route.id) {
      case 'login':
        return (
          <LoginView
            id='login'
            navigator={navigator}
            title='Login'
            configureScene={(route, routeStack) => Navigator.SceneConfigs.HorizontalSwipeJump}
            />
        );
      case 'home':
        return (
          <HomeView
            id='home'
            navigator={navigator}
            configureScene={(route, routeStack) => Navigator.SceneConfigs.HorizontalSwipeJumpFromRight}
            {...route.passProps}
            title='Home' />
        );
    }
  }

  render() {
    return (
      <Navigator
        initialRoute = {{ title: 'Login', id: 'login'}}
        renderScene={this.navigtorRenderScene}
      />
    );
  }
}

AppRegistry.registerComponent('TestProject', () => TestProject);
