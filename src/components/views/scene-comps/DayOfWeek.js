import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TitleBar from '../../elements/TitleBar';
import TimeOfDay from './TimeOfDay';
import HorizontalRule from '../../elements/HorizontalRule';
import Prescription from './Prescription';

export default class DayOfWeek extends Component {
  render() {
    let morningMeds = [];
    let eveningMeds = [];

    this.props.meds.map((item, index)=>{
      if(item.times.morning.scheduled && item.times.evening.scheduled) {
        morningMeds.push(
          <Prescription key={index} name={item.name} dosage={item.dosage} taken={item.times.morning.taken} alert={item.alert} />
        );
        eveningMeds.push(
           <Prescription key={index} name={item.name} dosage={item.dosage} taken={item.times.evening.taken} alert={item.alert} />
        );
      } else if(item.times.morning.scheduled) {
        morningMeds.push(
          <Prescription key={index} name={item.name} dosage={item.dosage} taken={item.times.morning.taken} alert={item.alert} />
        );
      } else if(item.times.evening.scheduled) {
        eveningMeds.push(
          <Prescription key={index} name={item.name} dosage={item.dosage} taken={item.times.evening.taken} alert={item.alert} />
        );
      }
    });
    return (
      <View style={styles.block}>
        <TitleBar text={this.props.day} subText={this.props.date} />
        <TimeOfDay time='morning' />
        {morningMeds}
        <HorizontalRule />
        <TimeOfDay time='evening' />
        {eveningMeds}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  block: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});


DayOfWeek.propTypes = {
  day: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  meds: PropTypes.array.isRequired
};
