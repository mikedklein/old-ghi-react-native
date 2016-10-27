import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text
} from 'react-native';
import { Icon } from 'react-native-elements';
import Container from '../../components/layout/Container';
import HorizontalRule from '../../components/elements/HorizontalRule';
import Avatar from '../../components/elements/Avatar';
import HeadingText from '../../components/elements/HeadingText';
import Label from '../../components/elements/Label';
import SubText from '../../components/elements/SubText';
import Spacer from '../../components/elements/Spacer';
import Allergy from './scene-comps/Allergy';
import Doctor from './scene-comps/Doctor';
import variables from '../../theme/styleVariables';

export default class ProfileView extends Component {

  render() {
    return (
      <Container>
        <ScrollView contentContainerStyle={styles.contentContainer} style={styles.scrollView} >
          <View style={[styles.sectionContent, styles.sectionContentFirst]} >
            <View style={styles.imageWrapper}>
              <Avatar url='https://avatars1.githubusercontent.com/u/3578720?v=3&s=466' size='large' />
            </View>
            <View>
              <HeadingText themed>
                {this.props.user.name}
              </HeadingText>
            </View>
            <View>
              <SubText context=' (DOB)' dark>
                {this.props.user.dob}
              </SubText>
              <SubText context=' (Contact)' dark>
                {this.props.user.familyContact}
              </SubText>
            </View>
          </View>
          <HorizontalRule margin={1} />

          <View style={styles.sectionContent} >
            <Text style={styles.description}>
              {this.props.user.description}
            </Text>
          </View>
          
          <View style={styles.section}>
            <View style={styles.headingRow} >
              <SubText bold>
                Address
              </SubText>
              <Spacer />
            </View>
            <HorizontalRule margin={1} />
            <View style={styles.sectionContent}>
              <Text style={styles.subText} >{this.props.user.address.street}</Text>
              <Text style={styles.subText} >
                {this.props.user.address.city},
                {this.props.user.address.state}
                {this.props.user.address.zip}
              </Text>
            </View>
          </View>

          {/* Allergy Section */}
          <View style={styles.section}>
            <View style={styles.headingRow}>
              <SubText bold>
                Allergies
              </SubText>
              <Spacer />
              <Label>
                {this.props.user.allergies.length}
              </Label>
              <Icon name='arrow-drop-down' color={variables.colors.headingText} />
            </View>
            <HorizontalRule margin={1} />
            <View style={styles.sectionContent}>
              {
                this.props.user.allergies.map((allergy, index) => (
                    <Allergy
                      key={index}
                      name={allergy.drug}
                      reaction={allergy.mainSymptom}
                      severity={allergy.severity}
                    />
                ))
              }
            </View>
          </View>
          {/* End Allergy Section */}

          {/* Doctor Section */}
          <View style={styles.section}>
              <View style={styles.headingRow}>
                <SubText bold>
                  Doctors
                </SubText>
                <Spacer />
                <Label>
                  {this.props.user.doctors.length}
                </Label>
                <Icon name='arrow-drop-down' color={variables.colors.headingText} />
              </View>
            <HorizontalRule margin={1} />
            <View style={styles.sectionContent} >
            {
              this.props.user.doctors.map((doctor, index) => (
                  <Doctor
                    key={index}
                    name={doctor.name}
                    type={doctor.role}
                    address={doctor.address}
                    phone={doctor.phone}
                  />
              ))
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
    shadowOpacity: 0.12,
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
  sectionContentFirst: {
    paddingBottom: 10
  },
  imageWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8
  },
  section: {
    marginTop: 20,
  }
});
