import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { Icon } from 'react-native-elements';
import SubText from '../../elements/SubText';
import variables from '../../../theme/styleVariables';

class HistoryDetailItem extends Component {
  render() {
    let borderTop = null;

    if (this.props.first) {
      borderTop = {
        borderTopWidth: 1
      };
    }
    return (
      <View style={[styles.row, borderTop]}>
        <View style={styles.dateColumn}>
          <SubText style={{ flex: 0 }} italic>
            {this.props.date}
          </SubText>
        </View>
        <View style={styles.detailsColumn}>
          <SubText style={{ flex: 0 }} bold dark>
            {this.props.details.title}
          </SubText>
          <SubText style={{ flex: 0 }} italic small>
            {this.props.details.summary}
          </SubText>
        </View>
        <View style={styles.iconColumn}>
          <Icon
            name={this.props.icon || 'heartbeat'}
            type='font-awesome'
            color={variables.colors.iconColor}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: variables.borderWidth,
    borderTopWidth: 0,
    borderColor: variables.colors.border,
    paddingTop: 20,
    paddingBottom: 20
  },
  dateColumn: {
    flex: 2,
    justifyContent: 'center'
  },
  detailsColumn: {
    flex: 3
  },
  iconColumn: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  }
});

export default HistoryDetailItem;
