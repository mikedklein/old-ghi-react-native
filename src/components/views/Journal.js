import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import history from '../../api/history';
import Container from '../../components/layout/Container';
import Modal from '../../components/elements/Modal';
import variables from '../../theme/styleVariables';
import JournalEntry from './scene-comps/JournalEntry';
import HistoryDetails from './scene-comps/HistoryDetails';

// TODO need to update the modal dimensions being based to it
// when the orientation changes.

export default class JournalView extends Component {

  state = {
    height: 0,
    width: 0,
    showDetails: false,
    activeItem: null,
    activeY: 0,
  };

  onPressHandler = (item, index) => {
    // First handle case when score is null
    // I.E. Just highlight the  active item
    if (item.score === null) {
      this.setState({
        activeItem: index
      });
      return;
    }

    this.refs[item.title + index].measure((ox, oy, width, height, px, py) => {
      this.setState({
        activeY: py,
        activeItem: index,
        showDetails: !this.state.showDetails
      });
    });
  };

  setSize = (event) => {
    const { width, height } = event.nativeEvent.layout;
    this.setState({
      height,
      width
    });
  };

  //TODO Mildly redundant consider refactoring
  toggleDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails,
      activeItem: null,
    });
  };

  renderDetails = () => {
    if (this.state.showDetails) {
      return (
        <Modal
          height={this.state.height}
          width={this.state.width}
          yCoord={this.state.activeY}
        >
          <HistoryDetails />
          <Button
            backgroundColor='white'
            buttonStyle={styles.button}
            color={variables.colors.primary}
            title='CLOSE'
            onPress={this.toggleDetails}
          />
        </Modal>
      );
    }

    return;
  };
  // TODO may want to consider a listview element form RN for performance reasons.
  render() {
    return (
      <Container>

        <ScrollView onLayout={this.setSize} style={styles.scrollView}>
          { history.map((item, index) => (
                <TouchableHighlight
                  ref={item.title + index}
                  key={index}
                  onPress={() => this.onPressHandler(item, index)}
                  underlayColor='white'
                >
                  <View>
                    <JournalEntry
                      active={index === this.state.activeItem}
                      title={item.title}
                      doctor={item.doctor}
                      location={item.location}
                      date={item.date}
                      type={item.type}
                      score={item.score}
                      iconType={item.iconType}
                      scoreTitle={item.scoreTitle}
                    />
                  </View>
                </TouchableHighlight>
              ))
          }
        </ScrollView>
        { this.renderDetails() }
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
    shadowOpacity: 0.12,
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
  }
});
