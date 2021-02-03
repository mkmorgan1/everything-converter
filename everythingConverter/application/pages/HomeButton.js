import React from 'react';
import {
  SafeAreaView, ScrollView, View, Text, StatusBar, Button, Alert, TouchableOpacity
} from 'react-native';
import styles from '../styles.js';


const Length = ({ navigation, title }) => {
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate(title)}}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default Length;