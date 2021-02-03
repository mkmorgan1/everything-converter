import React from 'react';
import {
  SafeAreaView, ScrollView, View, Text, StatusBar, Button, Alert, TouchableOpacity
} from 'react-native';

import { LearnMoreLinks } from 'react-native/Libraries/NewAppScreen';
import styles from '../styles.js';

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

              {/* TIME */}
              <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Time')}}>
                <Text style={styles.buttonText}>Time</Text>
              </TouchableOpacity>

              {/* LENGTH */}
              <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Length')}}>
                <Text style={styles.buttonText}>Length</Text>
              </TouchableOpacity>

              {/* WEIGHT */}
              <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Weight')}}>
                <Text style={styles.buttonText}>Weight</Text>
              </TouchableOpacity>

              {/* VOLUME */}
              <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('Volume')}}>
                <Text style={styles.buttonText}>Volume</Text>
              </TouchableOpacity>

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