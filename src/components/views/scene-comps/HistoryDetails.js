import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import variables from '../../../theme/styleVariables';
import HorizontalRule from '../../elements/HorizontalRule';
import { VictoryChart, VictoryAxis, VictoryLine, VictoryArea, VictoryTheme } from 'victory-native';

class HistoryDetails extends Component {
  render() {
    return (
      <ScrollView style={styles.scrollViewStyle}>
        <View style={styles.headingSection}>
          <Text style={styles.headingText}>R.A. Assessment</Text>
          <View style={styles.description}>
            <Text style={styles.descriptionParagraph}>
              Arthritis means inflammation in a joint. That inflammation causes redness, warmth, swelling, and pain within the joint.
            </Text>
            <Text style={styles.descriptionParagraph}>
              Rheumatoid arthritis affects joints on both sides of the body, such as both hands, both wrists, or both knees. This symmetry helps to set it apart from other types of arthritis.
            </Text>
            <Text style={styles.descriptionParagraph}>
              RA can also affect the skin, eyes, lungs, heart, blood, or nerves.
            </Text>
          </View>
        </View>
        <HorizontalRule margin={1}/>

        <View style={styles.twoColumn}>
          <View style={[ styles.column, styles.leftColumn ]}>
            <Text style={styles.subHeading}>
              Your Medications
            </Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.subHeading}>
              Your Medications
            </Text>
          </View>
        </View>

        <HorizontalRule margin={1} />
        <View style={styles.chartRow}>
          <VictoryChart
            theme={VictoryTheme.material}
            height={200}
            width={400}
            scale={{
              x: "time"
            }}>
            <VictoryAxis
              theme={VictoryTheme.material}
              tickValues={[
                new Date(1980, 1, 1),
                new Date(2000, 1, 1),
                new Date(2020, 1, 1),
              ]}
              tickFormat={(x) => x.getFullYear()}/>
            <VictoryArea
              style={{ data: {
                fill: variables.colors.secondary,
                stroke: variables.colors.secondary,
                strokeOpacity: 0.4,
                fillOpacity: 0.4,
              }}}
              data={[
                {x: new Date(1982, 1, 1), y: 50},
                {x: new Date(1987, 1, 1), y: 175},
                {x: new Date(1993, 1, 1), y: 250},
                {x: new Date(1997, 1, 1), y: 300},
                {x: new Date(2001, 1, 1), y: 200},
                {x: new Date(2005, 1, 1), y: 100},
                {x: new Date(2011, 1, 1), y: 180},
                {x: new Date(2015, 1, 1), y: 200}
              ]}/>

            <VictoryLine
              style={{ data: {
                stroke: variables.colors.primary,
              }}}
              data={[
                {x: new Date(1982, 1, 1), y: 125},
                {x: new Date(1987, 1, 1), y: 257},
                {x: new Date(1993, 1, 1), y: 345},
                {x: new Date(1997, 1, 1), y: 515},
                {x: new Date(2001, 1, 1), y: 132},
                {x: new Date(2005, 1, 1), y: 305},
                {x: new Date(2011, 1, 1), y: 270},
                {x: new Date(2015, 1, 1), y: 470}
              ]}/>
          </VictoryChart>
        </View>
      </ScrollView>
    )
  }
};

const styles = StyleSheet.create({
  scrollViewStyle: {
    flex: 1,
    padding: 20
  },
  headingSection: {
    marginBottom: 10,
  },
  twoColumn: {
    flexDirection: 'row'
  },
  column: {
    flex: 1
  },
  headingText: {
    color: variables.colors.primary,
    fontSize: 30,
    marginBottom: 20
  },
  subHeading: {
    color: variables.colors.primary,
    fontWeight: '600',
    marginTop: 10
  },
  descriptionParagraph: {
    fontSize: 14,
    fontStyle: 'italic',
    marginBottom: 8,
  },
  chartRow: {
    alignItems: 'center'
  }
});

export default HistoryDetails;


