import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
} from 'react-native';
import Container from '../../components/layout/Container';
import DayOfWeek from './scene-comps/DayOfWeek';
import variables from '../../theme/styleVariables';


// TODO retrieve this from data service
const meds = [
  {
    name: 'Methotrexate',
    dosage: '2.5 mg',
    alert: true,
    times: {
      morning: {
        scheduled: true,
        taken: true
      },
      evening: {
        scheduled: false,
        taken: false
      }
    }
  },
  {
    name: 'Physical Therapy Exercises',
    dosage: '15 mins',
    alert: false,
    times: {
      morning: {
        scheduled: true,
        taken: true
      },
      evening: {
        scheduled: false,
        taken: false
      }
    }
  },
  {
    name: 'Lipitor',
    dosage: '40 mg',
    alert: false,
    times: {
      morning: {
        scheduled: false,
        taken: false
      },
      evening: {
        scheduled: true,
        taken: false
      }
    }
  },
  {
    name: 'Lisinopril',
    dosage: '20 mg',
    alert: true,
    times: {
      morning: {
        scheduled: false,
        taken: false
      },
      evening: {
        scheduled: true,
        taken: false
      }
    }
  }
];

export default class HomeView extends Component {

    render() {
        return (
            <Container>
                <ScrollView style={styles.scrollView}>
                    <DayOfWeek day='Monday' date='September 26, 2016' meds={meds} />
                    <DayOfWeek day='Tuesday' date='September 27, 2016' meds={meds} />
                    <DayOfWeek day='Wednesday' date='September 28, 2016' meds={meds} />
                    <DayOfWeek day='Thursday' date='September 29, 2016' meds={meds} />
                    <DayOfWeek day='Friday' date='September 30, 2016' meds={meds} />
                    <DayOfWeek day='Saturday' date='October 1, 2016' meds={meds} />
                    <DayOfWeek day='Sunday' date='October 2, 2016' meds={meds} />
                </ScrollView>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
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
        shadowOpacity: variables.shadowOpacity,
        shadowRadius: 3,
    }
});
