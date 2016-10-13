import React, {Component, PropTypes} from 'react';
import { Icon } from 'react-native-elements';
import Container from '../../components/layout/Container';
import HorizontalRule from '../../components/elements/HorizontalRule';
import Avatar from '../../components/elements/Avatar';
import Allergy from './scene-comps/Allergy';
import Doctor from './scene-comps/Doctor';
import variables from '../../theme/styleVariables';


//noinspection JSUnresolvedVariable
import {
  StyleSheet,
  View,
  ScrollView,
  Text
} from 'react-native';

export default class ProfileView extends Component {

  render() {
    return (
      <Container>
        <ScrollView
          contentContainerStyle={styles.contentContainer}
          style={styles.scrollView}>
          <View style={styles.imageWrapper}>
            <Avatar url='https://avatars1.githubusercontent.com/u/3578720?v=3&s=466' size='large'/>
          </View>
          <Text style={styles.name}>
            {this.props.user.name}
          </Text>
          <Text style={styles.subText}>
            {this.props.user.dob}
            <Text style={styles.subTextContext}> (DOB)</Text>
          </Text>
          <Text style={styles.subText}>
            {this.props.user.familyContact}
            <Text style={styles.subTextContext}> (Contact)</Text>
          </Text>
          <HorizontalRule margin={1} />
          <View style={styles.sectionContent} >
          <Text style={styles.description}>
            {this.props.user.description}
          </Text>
          </View>
          <View style={styles.section}>
            <View style={styles.headingRow} >
              <Text style={styles.heading}>
                Address
              </Text>
              <View style={styles.spacer} />
            </View>
            <HorizontalRule margin={1} />
            <View style={styles.sectionContent}>
              <Text style={styles.subText} >{this.props.user.address.street}</Text>
              <Text style={styles.subText} >{this.props.user.address.city}, {this.props.user.address.state} {this.props.user.address.zip}</Text>
            </View>
          </View>
          {/* Allergy Section Component to go here */}
          <View style={styles.section}>
            <View style={styles.headingRow}>
              <Text style={styles.heading}>
                Allergies
              </Text>
              <View style={styles.spacer} />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{this.props.user.allergies.length}</Text>
              </View>
              <Icon name='arrow-drop-down'  color={variables.colors.headingText} />
            </View>
            <HorizontalRule margin={1} />
            <View style={styles.sectionContent}>
              {
                this.props.user.allergies.map((allergy, index)=> {
                  return (
                    <Allergy key={index} name={allergy.drug} reaction={allergy.mainSymptom} severity={allergy.severity} />
                  )
                })
              }
            </View>
          </View>
          {/* End Allergy Section */}

          {/* Doctor Section Component to go here */}
          <View style={styles.section}>
              <View style={styles.headingRow}>
                <Text style={styles.heading}>
                  Doctors
                </Text>
                <View style={styles.spacer} />
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{this.props.user.doctors.length}</Text>
                </View>
                <Icon name='arrow-drop-down' color={variables.colors.headingText} />
              </View>
            <HorizontalRule margin={1} />
            <View style={styles.sectionContent} >
            {
              this.props.user.doctors.map((doctor, index)=> {
                return (
                  <Doctor
                    key={index}
                    name={doctor.name}
                    type={doctor.role}
                    address={doctor.address}
                    phone={doctor.phone} />
                )
              })
            }
            </View>
          </View>
          {/* End Doctor Section */}

        </ScrollView>
      </Container>
    );
  }
}


ProfileView.propTypes = {
  user: PropTypes.object.isRequired
};

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
  contentContainer: {
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  sectionContent: {
    paddingTop: 10
  },
  imageWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    color: variables.colors.primary,
    fontSize: 36,
    marginTop: 10,
  },
  subText: {
    textAlign: 'left',
    marginBottom: 5,
    color: variables.colors.headingTextDark,
    fontSize: variables.type.headingFontSize
  },
  subTextContext: {
    color: variables.colors.headingText
  },
  description: {
    fontSize: 20
  },
  headingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8
  },
  badge: {
    backgroundColor: variables.colors.primary,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 5
  },
  badgeText: {
    color: 'white',
    fontWeight: 'bold'
  },
  spacer: {
    flex: 1
  },
  heading: {
    color: variables.colors.headingText,
    fontSize: variables.type.headingFontSize,
    fontWeight: 'bold'
  },
  section: {
    marginTop: 20,
  }
});
