import React, { useState, useEffect} from 'react';
import {
  SafeAreaView, ScrollView, View, Text, StatusBar, Button, Alert, TouchableOpacity, TextInput, Keyboard,KeyboardAvoidingView, TouchableWithoutFeedback
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles.js';

// import Icon from 'react-native-vector-icons/FontAwesome';
// const myIcon = <Icon name="rocket" size={30} color="#900" />;
const massTitles = ['Metric ton', 'Kilogram', 'Gram', 'Milligram', 'Micogram', 'Imperial ton', 'US ton', 'Stone', 'Pound', 'Ounce'];

const pickerLabels = () => {
  return massTitles.map((label) =>{
    return (<Picker.Item label={label} value={label} />)
  })
}

const convert = ( A, B ) => {
  if (A === 'Metric ton') {
    if (B === 'Metric ton') {

    } else if (B === 'Kilogram') {

    } else if (B === 'Gram') {

    } else if (B === 'Milligram') {

    } else if (B === 'Microgram') {

    } else if (B === 'Imperial ton') {

    } else if (B === 'US ton') {

    } else if (B === 'Stone') {

    } else if (B === 'Pound') {

    } else if (B === 'Ounce') {

    } else {
      Alert.alert('whoops')
}
  } else if (A === 'Kilogram') {

  } else if (A === 'Gram') {

  } else if (A === 'Milligram') {

  } else if (A === 'Microgram') {

  } else if (A === 'Imperial ton') {

  } else if (A === 'US ton') {

  } else if (A === 'Stone') {

  } else if (A === 'Pound') {

  } else if (A === 'Ounce') {

  } else {
    Alert.alert('whoops')
  }
}



const Mass = ({ navigation }) => {
  const [ selectA, setSelectA ] = useState(massTitles[0]);
  const [ selectB, setSelectB ] = useState(massTitles[0]);

  return (
    <>
      <KeyboardAvoidingView
        style={styles.container}
        behavior='position'
        >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            {}
            <Picker
              selectedValue={selectA}
              onValueChange={(itemValue, itemIndex) => setSelectA(itemValue)}
            >
              {pickerLabels()}
            </Picker>
            <Picker
              selectedValue={selectB}
              onValueChange={(itemValue) => setSelectB(itemValue)}
            >
              {pickerLabels()}
            </Picker>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.sectionContainer}>
          <Text style={styles.converterLable}>{`${selectA} → ${selectB}`}</Text>
          <TextInput
            keyboardType = 'numeric'
            style={styles.input}
            textAlign='center'
            placeholder='0'
            onSubmitEditing={Keyboard.dismiss}
          />
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default Mass;