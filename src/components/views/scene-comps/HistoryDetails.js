import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import {
  VictoryChart,
  VictoryAxis,
  VictoryLine,
  VictoryScatter,
  VictoryArea,
  VictoryTheme
} from 'victory-native';

import variables from '../../../theme/styleVariables';
import HeadingText from '../../elements/HeadingText';
import TitleText from '../../elements/TitleText';
import SubText from '../../elements/SubText';
import HorizontalRule from '../../elements/HorizontalRule';
import HistoryDetailItem from './HistoryDetailItem';


class HistoryDetails extends Component {
  state = {
    graphWidth: 400,
    graphHeight: 200
  }

  calculateGraph = (event) => {
    const { width } = event.nativeEvent.layout;

    this.setState({
      graphWidth: width + 30
    });
  }

  render() {
    return (
      <ScrollView style={styles.scrollViewStyle}>
        <View style={styles.headingSection}>
          <HeadingText themed>
            R.A. Assessment
          </HeadingText>
          <View style={styles.description}>
            <SubText dark italic>
              Arthritis means inflammation in a joint. That inflammation
              causes redness, warmth, swelling, and pain within the joint.
            </SubText>
            <SubText dark italic>
              Rheumatoid arthritis affects joints on both sides of the body,
              such as both hands, both wrists, or both knees. This symmetry
              helps to set it apart from other types of arthritis.
            </SubText>
            <SubText dark italic>
              RA can also affect the skin, eyes, lungs, heart, blood, or nerves.
            </SubText>
          </View>
        </View>
        <HorizontalRule margin={1} />
        <View
          onLayout={this.calculateGraph}
          style={styles.chartRow}
        >
          <View style={styles.subTextRow}>
            <TitleText themed bold>
              Your History
            </TitleText>
          </View>
          {/*TODO Fix the animation => For some reason the timing arg is not being obeyed*/}
          <View>
            <VictoryChart
              theme={VictoryTheme.material}
              height={this.state.graphHeight}
              width={this.state.graphWidth}
              scale={{
                x: 'time'
              }}
            >
              <VictoryAxis
                tickValues={[
                  new Date(1980, 1, 1),
                  new Date(2000, 1, 1),
                  new Date(2017, 1, 1),
                ]}
                tickFormat={(x) => x.getFullYear()}
              />
              <VictoryArea
                style={{ data: {
                  fill: variables.colors.secondary,
                  stroke: variables.colors.secondary,
                  strokeOpacity: 0.4,
                  fillOpacity: 0.4,
                } }}
                data={[
                  { x: new Date(1982, 1, 1), y: 50 },
                  { x: new Date(1987, 1, 1), y: 175 },
                  { x: new Date(1993, 1, 1), y: 250 },
                  { x: new Date(1997, 1, 1), y: 300 },
                  { x: new Date(2001, 1, 1), y: 200 },
                  { x: new Date(2005, 1, 1), y: 100 },
                  { x: new Date(2011, 1, 1), y: 180 },
                  { x: new Date(2015, 1, 1), y: 200 }
                ]}
              />
              <VictoryAxis
                dependentAxis
                tickValues={[200, 400, 600]}
                style={{
                  grid: {
                    stroke: 'grey',
                    strokeWidth: 0.5
                  },
                  axis: { stroke: 'transparent' },
                  ticks: { stroke: 'transparent' }
                }}
              />
              <VictoryLine
                style={{ data: {
                  stroke: variables.colors.primary,
                } }}
                data={[
                  { x: new Date(1982, 1, 1), y: 125 },
                  { x: new Date(1987, 1, 1), y: 257 },
                  { x: new Date(1993, 1, 1), y: 345 },
                  { x: new Date(1997, 1, 1), y: 515 },
                  { x: new Date(2001, 1, 1), y: 132 },
                  { x: new Date(2005, 1, 1), y: 305 },
                  { x: new Date(2011, 1, 1), y: 270 },
                  { x: new Date(2015, 1, 1), y: 470 }
                ]}
              />
              <VictoryScatter
                style={{ data: {
                  fill: 'white',
                  stroke: variables.colors.primary,
                  strokeWidth: 2
                } }}
                data={[
                  { x: new Date(1982, 1, 1), y: 125 },
                  { x: new Date(1987, 1, 1), y: 257 },
                  { x: new Date(1993, 1, 1), y: 345 },
                  { x: new Date(1997, 1, 1), y: 515 },
                  { x: new Date(2001, 1, 1), y: 132 },
                  { x: new Date(2005, 1, 1), y: 305 },
                  { x: new Date(2011, 1, 1), y: 270 },
                  { x: new Date(2015, 1, 1), y: 470 }
                ]}
              />
            </VictoryChart>
          </View>
        </View>
        <View style={styles.resultsRow}>
          <HistoryDetailItem
            first
            date='March 1, 2017'
            details={{ title: 'Medication Refill Request', summary: 'Got your medicine' }}
            icon='medkit'
          />
          <HistoryDetailItem
            date='February 26, 2017'
            details={{ title: 'Follow Up With Rheumatologist', summary: 'You Followed Up' }}
            icon='user-md'
          />
          <HistoryDetailItem
            date='February 19, 2017'
            details={{ title: 'R.A. Assessment', summary: 'Evaluate your symptoms systematically' }}
            icon='file-text-o'
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollViewStyle: {
    flex: 1,
    padding: 20,
  },
  headingSection: {
    marginBottom: 10,
  },
  subTextRow: {
    alignSelf: 'flex-start',
    marginTop: 10
  },
  descriptionParagraph: {
    marginBottom: 8,
  },
  chartRow: {
    alignItems: 'center'
  },
  resultsRow: {
    marginBottom: 30
  }
});

export default HistoryDetails;
