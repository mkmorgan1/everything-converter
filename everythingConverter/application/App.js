/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView, ScrollView, View, Text, StatusBar, Button, Alert, TouchableOpacity
} from 'react-native';

import { LearnMoreLinks } from 'react-native/Libraries/NewAppScreen'; //just for reference

// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// const Stack = createStackNavigator();

import styles from './styles.js';



const redirect = (e) => {
  Alert.alert('redirect is not set up yet');
}

const App: () => React$Node = () => {
  return (
    // <NavigationContainer>
    //   {/* Rest of your app code */}
    // </NavigationContainer>
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {/* {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )} */}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Everything Converter</Text>

              {/* TIME ZONE */}
              <TouchableOpacity style={styles.button} onPress={redirect}>
                <Text style={styles.buttonText}>Time Zone</Text>
              </TouchableOpacity>

              {/* LENGTH */}
              <TouchableOpacity style={styles.button} onPress={redirect}>
                <Text style={styles.buttonText}>Length</Text>
              </TouchableOpacity>

              {/* WEIGHT */}
              <TouchableOpacity style={styles.button} onPress={redirect}>
                <Text style={styles.buttonText}>Weight</Text>
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


export default App;
