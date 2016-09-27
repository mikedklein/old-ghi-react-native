#!/bin/bash

# make sure to update xcode
# TODO need to convert all this to an actual bash script eventually

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
