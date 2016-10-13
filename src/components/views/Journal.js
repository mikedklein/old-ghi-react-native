import React, {Component} from 'react';
import { Button } from 'react-native-elements';
import history from '../../api/history';
import Container from '../../components/layout/Container';
import variables from '../../theme/styleVariables';
import JournalEntry from './scene-comps/JournalEntry';
import HistoryDetails from './scene-comps/HistoryDetails';
import {
  Animated,
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableHighlight
} from 'react-native';



export default class JournalView extends Component {

  state = {
    height: 0,
    width: 0,
    showDetails: false,
    activeItem: null,
    activeY: 0,
    bounceValue: new Animated.Value(0),
    backgroundValue: new Animated.Value(0),
  };

  toggleDetails = (clearItems = true) => {

    if ( clearItems ) {
      this.state.bounceValue.setValue(.8);
      this.state.backgroundValue.setValue(.8);
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

      setTimeout(()=>{
        this.setState({
          showDetails: !this.state.showDetails,
          activeItem: null,
        });

      }, 125)
    } else {
      this.setState({
        showDetails: !this.state.showDetails,
      });
    }
  };

  onPressHandler = (item) => {
    this.state.bounceValue.setValue(.8);
    this.state.backgroundValue.setValue(0)
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



    this.refs[item.title + item.index].measure((ox, oy, width, height, px, py) => {
      this.setState({
        activeY: py
      });
    });

    this.setState({
      activeItem: item.index
    });

    this.toggleDetails(false);
  };

  setSize = (event) => {
    var {width, height} = event.nativeEvent.layout;

    this.setState({
      height,
      width
    });
  };

  renderDetails = () => {
    if ( this.state.showDetails ) {
      return (
        <Animated.View style={[ { height: this.state.height, width: this.state.width,  opacity: this.state.backgroundValue } ,styles.floatView]} >
          <Animated.View style={{ flex: 1, transform: [ {scale: this.state.bounceValue} ] }}>
            <View style={[styles.triangle, {top: this.state.activeY, right:  this.state.width * .60 }]} />
            <View style={[ {height: this.state.height - 20, width: this.state.width * .60}, styles.floatViewContent]} >
              <HistoryDetails />
              <Button
                backgroundColor='white'
                buttonStyle={styles.button}
                color={variables.colors.primary}
                title='CLOSE'
                onPress={this.toggleDetails}  />
            </View>
          </Animated.View>
        </Animated.View>
      );
    } else {
      return null;
    }
  };

  render() {
    return (
      <Container>
        { this.renderDetails() }
        <ScrollView onLayout={this.setSize} style={styles.scrollView}>
          {
            history.map((item, index)=>{

              item.index = index;

              if ( item.score == null ) {
                return (
                  <View key={index} >
                    <View>
                      <JournalEntry
                        title={item.title}
                        doctor={item.doctor}
                        location={item.location}
                        date={item.date}
                        type={item.type}
                        score={item.score}
                        iconType={item.iconType}
                        scoreTitle={item.scoreTitle} />
                    </View>
                  </View>
                );
              } else {
                return (
                  <TouchableHighlight
                    ref={item.title + index}
                    key={index} 
                    onPress={ () => this.onPressHandler(item)} >
                    <View>
                      <JournalEntry
                        active={item.index === this.state.activeItem}
                        title={item.title}
                        doctor={item.doctor}
                        location={item.location}
                        date={item.date}
                        type={item.type}
                        score={item.score}
                        iconType={item.iconType}
                        scoreTitle={item.scoreTitle} />
                    </View>
                  </TouchableHighlight>
                )
              }
            })
          }
        </ScrollView>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  scrollView: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 2,
    shadowColor: 'black',
    shadowOffset: {
      height: 1,
      width: 1
    },
    shadowOpacity: .12,
    shadowRadius: 3
  },
  overlayButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  button: {
    borderWidth: 2,
    borderColor: variables.colors.primary,
    borderRadius: 2,
    marginBottom: 10
  },
  floatView: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,.30)',
    margin: 10,
    top: 0,
    left: 0,
    zIndex: 10
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
