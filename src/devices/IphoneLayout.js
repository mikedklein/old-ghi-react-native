/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, {Component} from 'react';
import {SideMenu, List, ListItem} from 'react-native-elements';
import Orientation from 'react-native-orientation';

import LoginView from '../components/views/Login';
import HomeView from '../components/views/Home';
import ProfileView from '../components/views/Profile';
import JournalView from '../components/views/Journal';
import AppBar from '../components/elements/AppBar';
import userData from '../api/user';

import {
  Navigator,
  StyleSheet,
  View,
  Dimensions
} from 'react-native';

// NOTE Pulling this in as recommended by the Github issues referenced below for removing animation from
// scene transitions
const buildStyleInterpolator = require('buildStyleInterpolator');

const menuItems = [
  {
    id: 'home',
    name: 'Home',
    icon: 'home',
    subtitle: 'Welcome Home'
  },
  {
    id: 'profile',
    name: 'Profile',
    icon: 'account-circle',
    subtitle: 'About You'
  },
  {
    id: 'journal',
    name: 'Medical Journal',
    icon: 'mode-edit',
    subtitle: 'Medical Journal History'
  }
];

class MenuComponent extends Component {

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
        <List containerStyle={{marginBottom: 20}}>
          {
            menuItems.map((item, i) => (
              <ListItem
                leftIcon={{name: item.icon}}
                onPress={() => this.props.navigate(item)}
                key={i}
                id={item.id}
                title={item.name}
                subtitle={item.subtitle}/>
            ))
          }
        </List>
      </View>
    )
  }
}

export default class IphoneLayout extends Component {

  state = {
    toggled: false,
    username: '',
    user: 'Mike Klein',
    password: '',
    loggedIn: false,
    userData: {}
  };

  toggleSideMenu = () => {
    this.setState({
      toggled: !this.state.toggled
    });
  };

  loginHandler = () => {
    if (this.state.username === 'Test' && this.state.password === 'test123') {
      this.setState({
        loggedIn: true,
        userData
      });
    } else {
      alert('Username and Password are incorrect!');
    }
  };

  navigtorRenderScene = (route) => {
    switch (route.id) {
      case 'home':
        return (
          <HomeView
            id='home'
            {...route.passProps}
            title='Home'/>
        );
      case 'profile':
        return (
          <ProfileView
            id='profile'
            user={this.state.userData}
            {...route.passProps}
            title='Profile'/>
        );
      case 'journal':
        return (
          <JournalView
            id='journal'
            {...route.passProps}
            title='Profile'/>
        );
    }
  };

  navigatorConfigureScene = () => {
    // NOTE Pulled this from github as scene transistions were not working well with the sidemenu
    // https://github.com/facebook/react-native/issues/1953
    let NoTransition = {
      opacity: {
        value: 1.0,
        type: 'constant',
      }
    };
    return {
      ...Navigator.SceneConfigs.FadeAndroid,
      gestures: null,
      defaultTransitionVelocity: 100,
      animationInterpolators: {
        into: buildStyleInterpolator(NoTransition),
        out: buildStyleInterpolator(NoTransition),
      },
    }
  };

  orientationDidChange = () => {
    this.setState({
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width
    });
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

  navigate = (route) => {
    this.refs.navigator.push({
      id: route.id
    });
    this.setState({
      toggled: !this.state.toggled
    });
  };

  renderContent = () => {
    if (this.state.loggedIn) {
      return (
        <SideMenu
          MenuComponent={<MenuComponent navigate={this.navigate}/>}
          toggled={this.state.toggled}>
          <AppBar text='GHI Global' onPress={this.toggleSideMenu}/>
          <Navigator
            initialRoute={{title: 'Home', id: 'home'}}
            renderScene={this.navigtorRenderScene}
            configureScene={this.navigatorConfigureScene}
            ref='navigator'
          />
        </SideMenu>
      );
    }
    return (
      <LoginView
        id='login'
        title='Login'
        username={this.state.username}
        password={this.state.password}
        loginHandler={this.loginHandler}
        usernameChange={(username) => this.setState({username})}
        passwordChange={(password) => this.setState({password})}
      />
    );
  };

  render() {
    return (
      <View style={[styles.screen, {height: this.state.height}]}>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20
  }
});


