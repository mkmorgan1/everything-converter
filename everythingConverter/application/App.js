/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import {
//   SafeAreaView, ScrollView, View, Text, StatusBar, Button, Alert, TouchableOpacity
// } from 'react-native';

import Home from './pages/Home.js';
import Time from './pages/Time.js';
import Length from './pages/Length.js';
import Mass from './pages/Mass.js';
import Volume from './pages/Volume.js';

import { LearnMoreLinks } from 'react-native/Libraries/NewAppScreen'; //just for reference

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import styles from './styles.js';



const redirect = (e) => {
  Alert.alert('redirect is not set up yet');
}

const App: () => React$Node = () => {
  return (
    <>
      {/* {global.HermesInternal == null ? null : (
        <View style={styles.engine}>
          <Text style={styles.footer}>Engine: Hermes</Text>
        </View>
      )} */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="Time" component={Time} />
          <Stack.Screen name="Length" component={Length} />
          <Stack.Screen name="Mass" component={Mass} />
          <Stack.Screen name="Volume" component={Volume} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;
