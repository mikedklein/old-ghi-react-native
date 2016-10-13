# ghi-sample-ios
Sample iOS application using React Native

# Basic setup

- install Homebrew if on Mac `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
- install node (React Native Docs Reccomend using chocolately to insatall windows deps [docs](https://facebook.github.io/react-native/docs/getting-started.html#content))
- install watchman (again only for mac)
- now install the react-native-cli `npm install react-native-cli`
- make sure to have Java updated and that Xcode and Android studio are up to date
- when testing on Android making sure to to open `android/` in android studio is and have it auto fix any dep errors makes setting up easy
- when running android command make sure to have the simulator up and running before running the command from the command line
- to run ios `react-native run-ios`
  - you can pass the simulator flag to choose different devices
  - example : `react-native run-ios --simulator='iPad Pro (9.7 inch)'`
- to run android `react-native run-android`


# Troubleshooting

- If `android` is not working from the commandline
  - `vim ~/.bash_profile`
  - `export ANDROID_HOME=/Users/i/Android\ SDK # !!! Change this configuration path. I install Android SDK in my local Mac directory.`
  - `export PATH=$ANDROID_HOME/tools:$PATH`
  - `export PATH=$ANDROID_HOME/platform-tools:$PATH`
- You cannot build to IOS from a windows env

# Notes

- right now the setup is pretty focused on IOS and slightly tailored to the IPAD layout entry

# WIP stuff

### Possible beginnings of a shell script

```
#!/bin/bash

# make sure to update xcode

#install homebrew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

#install node
brew install node
#install watchman
brew install watchman
#install the react native cli
npm install -g react-native-cli
#install java and jdk if you don't have it
brew cask install java
#install platform tools
brew install android-platform-tools

#NOTE Make sure to have Android studio up and have an AVD device running for adb to connect to
```
