'use strict';

import React, {Component} from 'react';
import {Tabs, Tab, Icon} from 'react-native-elements';
import Orientation from 'react-native-orientation';

import LoginView from '../components/views/Login';
import HomeView from '../components/views/Home';
import ProfileView from '../components/views/Profile';
import JournalView from '../components/views/Journal';

import userData from '../api/user';

import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Text,
  Dimensions
} from 'react-native';

export default class IpadLayout extends Component {

  state = {
    username: '',
    password: '',
    loggedIn: false,
    userData: {},
    height: 0,
    width: 0,
    selectedTab: 'home'
  };

  orientationDidChange = () => {
    this.setState({
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width
    });
  };

  loginHandler = () => {
    if (this.state.username === 'Test' && this.state.password === 'test123') {
      this.setState({
        loggedIn: true,
        userData
      });
    } else {
      alert('Please Check Your Creds!!!');
    }
  };

  changeTab = (selectedTab) => {
    this.setState({selectedTab})
  };

  renderContent = () => {
    const {selectedTab} = this.state;

    if (this.state.loggedIn) {
      return (
        <KeyboardAvoidingView style={[styles.screen, {height: this.state.height}]}>
          <View style={styles.master}>
            <ProfileView user={userData}/>
          </View>
          <View style={styles.detail}>
            <Tabs
              tabBarStyle={styles.tabBarStyle}
              tabBarShadowStyle={styles.tabBarShadowStyle}>
              <Tab
                selected={selectedTab === 'home'}
                title={selectedTab === 'home' ? 'HOME' : null}
                titleStyle={styles.titleStyle}
                selectedTitleStyle={styles.titleStyle}
                renderIcon={() => <Icon name='home' color='white' size={26}/>}
                renderSelectedIcon={() => <Icon name='home' color='white' size={26}/>}
                onPress={() => this.changeTab('home')}>
                <HomeView />
              </Tab>
              <Tab
                selected={selectedTab === 'journal'}
                title={selectedTab === 'journal' ? 'JOURNAL' : null}
                titleStyle={styles.titleStyle}
                selectedTitleStyle={styles.titleStyle}
                renderIcon={() => <Icon name='mode-edit' color='white' size={26}/>}
                renderSelectedIcon={() => <Icon name='mode-edit' color='white' size={26}/>}
                onPress={() => this.changeTab('journal')}>
                <JournalView />
              </Tab>
            </Tabs>
          </View>
        </KeyboardAvoidingView>
      )
    } else {
      return (
        <KeyboardAvoidingView style={[styles.loginScreen, {height: this.state.height}]}>
          <View style={styles.loginSpacer}/>
          <LoginView
            id='login'
            title='Login'
            username={this.state.username}
            password={this.state.password}
            loginHandler={this.loginHandler}
            usernameChange={(username) => this.setState({username})}
            passwordChange={(password) => this.setState({password})}
          />
          <View style={styles.loginSpacer}/>
        </KeyboardAvoidingView>
      );

    }

  };

  componentDidMount() {
    this.setState({
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width
    });

    Orientation.addOrientationListener(this.orientationDidChange);
  }

  componentWillUnmount() {
    Orientation.removeOrientationListener(this.orientationDidChange);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: "row",
    paddingTop: 20
  },
  loginScreen: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarShadowStyle: {
    shadowColor: 'black',
    shadowOffset: {
      height: 1,
      width: 1
    },
    shadowRadius: 3,
  },
  tabBarStyle: {
    borderWidth: 0,
    borderRadius: 2,
    backgroundColor: variables.colors.primary,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 50
  },
  titleStyle: {
    color: 'white'
  },
  loginSpacer: {
    flex: .5
  },
  master: {
    flex: 1
  },
  detail: {
    paddingBottom: 10,
    backgroundColor: variables.colors.background,
    flex: 2
  }
});
