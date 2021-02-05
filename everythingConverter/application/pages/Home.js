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

// Cmd + d = debug | Cmd + r = reload
const Home = ({ navigation }) => {
  return (
    <>
      {/* <StatusBar barStyle="dark-content" /> */}
      {/* <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}> */}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Everything Converter</Text>
              <HomeButton navigation={navigation} title={'Time'}/>
              <HomeButton navigation={navigation} title={'Length'}/>
              <HomeButton navigation={navigation} title={'Mass'}/>
              <HomeButton navigation={navigation} title={'Volume'}/>
            </View>
          </View>
        {/* </ScrollView>
      </SafeAreaView> */}
    </>
  );
};

export default Home;