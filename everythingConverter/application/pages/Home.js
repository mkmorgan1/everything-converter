import React from 'react';
import {
  SafeAreaView, ScrollView, View, Text, StatusBar, Button, Alert, TouchableOpacity
} from 'react-native';

import { LearnMoreLinks } from 'react-native/Libraries/NewAppScreen';
import styles from '../styles.js';
import HomeButton from './HomeButton.js';

const redirect = (e) => {
  Alert.alert('redirect is not set up yet');
}

const Home = ({ navigation }) => {
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Everything Converter</Text>
              <HomeButton navigation={navigation} title={'Time'}/>
              <HomeButton navigation={navigation} title={'Length'}/>
              <HomeButton navigation={navigation} title={'Weight'}/>
              <HomeButton navigation={navigation} title={'Volume'}/>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Cmd + d = debug | Cmd + r = reload
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;